import { Header } from '@/components/header';
import { requireAuth } from '@/fn/require-auth';
import { authClient } from '@/lib/auth-client';
import { createFileRoute, Outlet, redirect } from '@tanstack/react-router'

export const Route = createFileRoute('/_protected')({
  component: RouteComponent,
  beforeLoad: async () => {
    const data = await requireAuth();

    if (!data) {
      throw redirect({ to: '/login' })
    }

    return data;
  }
})

function RouteComponent() {
  const { data } = authClient.useSession();

  if (!data) {
    return null
  }

  return (
    <div>
      <Header data={data} />
      <main className="py-4 select-none">
        <Outlet />
      </main>
    </div>)
}
