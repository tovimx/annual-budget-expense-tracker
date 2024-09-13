import { ExpenseFormWithSearch } from "@/components/expense-form-with-search";
import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/expense")({
    component: () => (
        <div className={`max-w-xl`}>
            <ExpenseFormWithSearch />
        </div>
    ),
});
