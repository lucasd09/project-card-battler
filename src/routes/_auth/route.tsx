import { requireAuth } from '@/fn/require-auth'
import { createFileRoute, Outlet, redirect } from '@tanstack/react-router'

export const Route = createFileRoute('/_auth')({
  component: RouteComponent,
  beforeLoad: async () => {
    const data = await requireAuth();

    if (data) {
      throw redirect({ to: '/' })
    }
  }
})

function RouteComponent() {
  return (
    <Outlet />
  )
}
