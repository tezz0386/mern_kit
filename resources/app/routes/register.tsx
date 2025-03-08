import type { Route } from "./+types/home";
import { RegisterPage } from "~/pages/user/RegisterPage";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "React About Page" },
    { name: "description", content: "Welcome to React Router!" },
  ];
}

export default function register() {
  return <RegisterPage />;
}
