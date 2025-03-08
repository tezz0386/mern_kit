import type { Route } from "./+types/home";
import { AboutPage } from "~/pages/about/about";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "React About Page" },
    { name: "description", content: "Welcome to React Router!" },
  ];
}

export default function About() {
  return <AboutPage />;
}
