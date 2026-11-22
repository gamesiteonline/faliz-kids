import { createFileRoute } from "@tanstack/react-router";
import { FalizApp } from "@/faliz/ui/FalizApp";

export const Route = createFileRoute("/")({ component: Home });

function Home() {
  return <FalizApp />;
}
