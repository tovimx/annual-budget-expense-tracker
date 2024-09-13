import * as React from "react";
import {
    Link,
    Outlet,
    createRootRouteWithContext,
    useRouterState,
} from "@tanstack/react-router";
import { TanStackRouterDevtools } from "@tanstack/router-devtools";
import { Spinner } from "@/components/Spinner";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import type { Auth } from "@/utils/auth";
import { getCurrentMonthName } from "@/utils/dates";
import { Button } from "@/components/ui/button";

function RouterSpinner() {
    const isLoading = useRouterState({ select: (s) => s.status === "pending" });
    return <Spinner show={isLoading} />;
}

export const Route = createRootRouteWithContext<{
    auth: Auth;
}>()({
    component: RootComponent,
});

function RootComponent() {
    return (
        <>
            <div className={`min-h-screen flex flex-col`}>
                <div className={`flex items-center border-b gap-2`}>
                    <h1 className={`text-3xl p-2`}>Annual expense tracker</h1>
                    <Breadcrumbs />
                    {/* Show a global spinner when the router is transitioning */}
                    <div className={`text-3xl`}>
                        <RouterSpinner />
                    </div>
                    <Button>
                        <Link to="/expense">Agregar Gasto</Link>
                    </Button>
                    <Button>
                        <Link to="/income">Registrar Ingreso</Link>
                    </Button>
                </div>
                <div className={`flex-1 flex`}>
                    <div className={`divide-y w-56`}>
                        {(
                            [
                                ["/", "Inicio"],
                                [
                                    "/$month",
                                    `Mes actual`,
                                    {
                                        params: {
                                            month: getCurrentMonthName(),
                                        },
                                    },
                                ],
                                ["/dashboard", "Resumen del año"],
                                ["/enero", "Otros meses"],
                                // ["/enero", "Enero"],
                                // ["/febrero", "Febrero"],
                                // ["/marzo", "Marzo"],
                                // ["/abril", "Abril"],
                                // ["/mayo", "Mayo"],
                                // ["/junio", "Junio"],
                                // ["/julio", "Julio"],
                                // ["/agosto", "Agosto"],
                                // ["/septiembre", "Septiembre"],
                                // ["/noviembre", "Noviembre"],
                                // ["/diciembre", "Diciembre"],
                                // ["/layout-a", "Layout A"],
                                // ["/layout-b", "Layout B"],
                                // ["/profile", "Profile"],
                                ["/login", "Login"],
                                // ["/route-group", "Route Group"],
                            ] as const
                        ).map(([to, label, params]) => {
                            return (
                                <div key={to}>
                                    <Link
                                        to={to}
                                        {...params}
                                        activeOptions={
                                            {
                                                // If the route points to the root of it's parent,
                                                // make sure it's only active if it's exact
                                                // exact: to === '.',
                                            }
                                        }
                                        preload="intent"
                                        className={`block py-2 px-3 text-blue-700 dark:text-slate-300`}
                                        // Make "active" links bold
                                        activeProps={{
                                            className: `font-bold`,
                                        }}>
                                        {label}
                                    </Link>
                                </div>
                            );
                        })}
                    </div>
                    <div className={`flex-1 border-l`}>
                        {/* Render our first route match */}
                        <Outlet />
                    </div>
                </div>
            </div>
            <TanStackRouterDevtools position="bottom-right" />
        </>
    );
}
