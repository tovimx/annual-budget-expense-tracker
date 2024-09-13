import * as React from "react";
import {
    Link,
    Outlet,
    createFileRoute,
    redirect,
} from "@tanstack/react-router";
import { auth } from "../utils/auth";

export const Route = createFileRoute("/dashboard")({
    component: DashboardComponent,
    loader: () => ({
        crumb: "Dashboard",
    }),
    beforeLoad: ({ context, location }) => {
        // If the user is logged out, redirect them to the login page
        if (context.auth.status === "loggedOut") {
            throw redirect({
                to: "/login",
                search: {
                    // Use the current location to power a redirect after login
                    // (Do not use `router.state.resolvedLocation` as it can
                    // potentially lag behind the actual current location)
                    redirect: location.href,
                },
            });
        }

        // Otherwise, return the user in context
        return {
            username: auth.username,
            status: auth.status,
        };
    },
});

function DashboardComponent() {
    const { username, status } = Route.useRouteContext();
    console.log("DashboardComponent status:", status);
    React.useEffect(() => {
        console.log("DashboardComponent status:", status);
    }, []);
    return (
        <>
            <div className="flex items-center border-b">
                <h2 className="text-xl p-2">Dashboard</h2>
            </div>

            <div className="flex flex-wrap divide-x">
                {(
                    [
                        ["/dashboard", "Summary", true],
                        ["/dashboard/invoices", "Registro de Gastos"],
                        ["/dashboard/users", "Users"],
                    ] as const
                ).map(([to, label, exact]) => {
                    return (
                        <Link
                            key={to}
                            to={to}
                            activeOptions={{ exact }}
                            activeProps={{ className: `font-bold` }}
                            className="p-2">
                            {label}
                        </Link>
                    );
                })}
            </div>
            <hr />

            <Outlet />
        </>
    );
}
