import { createLazyFileRoute } from "@tanstack/react-router";
import { MonthlyDashboard } from "../../components/MonthlyDashboard";

export const Route = createLazyFileRoute("/enero/")({
    component: () => <MonthlyDashboard month="Enero" />,
});
