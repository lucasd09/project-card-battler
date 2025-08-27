import { createServerFn } from "@tanstack/react-start"

export const signUp = createServerFn({ method: 'POST' })
  .validator(
    z.object({
      email: z.string().email(),
      password: z.string().min(8).max(255),
      name: z.string().trim().min(1).max(120).optional(),
      avatar: z.string().url().optional(),
    }),
  )
  .handler(async ({ data }) => {
    // email único?
    const existing = await userService.getByEmail(data.email)
    if (existing) {
      return { ok: false as const, error: 'EMAIL_TAKEN' }
    }

    // força senha segura (Pwned Passwords)
    const strong = await verifyPasswordStrength(data.password)
    if (!strong) {
      return { ok: false as const, error: 'WEAK_PASSWORD' }
    }

    const hashed = await hashPassword(data.password)
    const user = await userService.create({
      email: data.email,
      name: data.name ?? null,
      password: hashed,
      avatar: data.avatar ?? null,
    })

    const token = generateSessionToken()
    const session = await createSession(token, user.id)

    setCookie(SESSION_COOKIE, token, cookieOptions(session.expiresAt))

    return {
      ok: true as const,
      user: { id: user.id, email: user.email, name: user.name, avatar: user.avatar },
      session: { id: session.id, expiresAt: session.expiresAt },
    }
  })