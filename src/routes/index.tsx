import { Button } from "@/components/ui/button";
import { authClient } from "@/lib/auth-client";
import { createFileRoute, redirect } from "@tanstack/react-router";

export const Route = createFileRoute("/")({
  component: App,
  beforeLoad: async () => {
    const data = await authClient.getSession();

    if (!data) {
      throw redirect({ to: '/login' })
    }
  }
});

function App() {
  const { data } = authClient.useSession();

  const handleLogout = async () => {
    console.log('logging out');

    await authClient.signOut({
      fetchOptions: {
        onSuccess: () => {
          redirect({ to: '/login' })
        },
      },
    });
  }
  return (
    <div className="text-center">
      <p>logged as {data?.user.name}</p>
      <Button onClick={handleLogout}>LOGOUT</Button>
    </div>
  );
}
