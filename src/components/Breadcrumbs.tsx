import { isMatch, Link, useMatches } from "@tanstack/react-router";

export const Breadcrumbs = () => {
    const matches = useMatches();

    if (matches.some((match) => match.status === "pending")) return null;

    const matchesWithCrumbs = matches.filter((match) =>
        isMatch(match, "loaderData.crumb")
    );

    return (
        <nav>
            <ul className="flex gap-2 items-center">
                {matchesWithCrumbs.map((match, i) => (
                    <li className="flex gap-2" key={match.id}>
                        <Link
                            className="text-blue-700 dark:text-slate-300"
                            from={match.fullPath}>
                            {match.loaderData?.crumb}
                        </Link>
                        {i + 1 < matchesWithCrumbs.length ? (
                            <span className="">{">"}</span>
                        ) : null}
                    </li>
                ))}
            </ul>
        </nav>
    );
};
