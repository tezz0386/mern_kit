import type { Route } from "./+types/home";
import { LoginPage } from "~/pages/login/LoginPage";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "React About Page" },
    { name: "description", content: "Welcome to React Router!" },
  ];
}

export default function About() {
  return <LoginPage />;
}
