import type { Route } from "./+types/home";
import { HomePage } from "~/pages/home/home";
export function meta({}: Route.MetaArgs) {
  return [
    { title: "React Home Page" },
    { name: "description", content: "Welcome to React Router!" },
  ];
}

export default function Home() {
  return <HomePage />
}
