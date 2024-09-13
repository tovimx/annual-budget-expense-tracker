import * as React from "react";
import { Link, Outlet, createFileRoute } from "@tanstack/react-router";
import IncomeForm from "@/components/income-form";

export const Route = createFileRoute("/")({
    component: IndexComponent,
});

function IndexComponent() {
    return (
        <div className={`p-2`}>
            <div className={`text-lg`}>Welcome Home!</div>
            <hr className={`my-2`} />
            <Link
                to="/dashboard/invoices/$invoiceId"
                params={{
                    invoiceId: 3,
                }}
                className={`py-1 px-2 text-xs bg-blue-500 text-white rounded-full`}>
                1 New Invoice
            </Link>
            <hr className={`my-2`} />
            <Outlet />
        </div>
    );
}
