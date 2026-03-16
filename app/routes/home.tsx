import type { Route } from "./+types/home";
import OverviewPage from "../components/OverviewPage";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Kotlin Homepage" },
    { name: "description", content: "Kotlin landing page" },
  ];
}

export default function Home() {
  return <OverviewPage />;
}