import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/_protected/")({
  component: App,
});

function App() {
  return (
    <div className="text-center">
      index
    </div>
  );
}
