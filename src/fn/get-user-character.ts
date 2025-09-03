import { userCharacterService } from "@/services/user-character"
import { requireAuth } from "./require-auth"
import { createServerFn } from "@tanstack/react-start"

export const getUserCharacter = createServerFn({
    method: "GET",
    response: "data"
}).handler(async () => {
    const session = await requireAuth()

    if (!session) {
        return null
    }

    const data = await userCharacterService.getByColumn("userId", session?.user.id ?? '')
    return data
})