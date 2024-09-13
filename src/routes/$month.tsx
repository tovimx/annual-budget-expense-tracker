import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/$month")({
    component: () => {
        const month = Route.useLoaderData();
        return <div>Hello {month}</div>;
    },
    loader: ({ params }) => {
        return params.month;
    },
});
