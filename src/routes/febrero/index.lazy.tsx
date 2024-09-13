import { createLazyFileRoute } from "@tanstack/react-router";
import { MonthlyDashboard } from "../../components/MonthlyDashboard";

export const Route = createLazyFileRoute("/febrero/")({
    component: () => <MonthlyDashboard month="Febrero" />,
});
