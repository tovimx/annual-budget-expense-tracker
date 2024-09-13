import IncomeForm from "@/components/income-form";
import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/income")({
    component: () => (
        <div className={`max-w-xl`}>
            <IncomeForm />
        </div>
    ),
});
