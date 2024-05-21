import { Head, Link } from "@inertiajs/react";
import Example from "./Components/Layout";

export default function Users({ time }) {
    return (
        <>
            <Head title="Users" />
            <Example heading={"Users"}>
                <p className="mt-[1000px]">The current time is {time}</p>
                <Link
                    href={route("inertia.users")}
                    className="text-blue-700"
                    preserveScroll
                >
                    Refresh
                </Link>
            </Example>
        </>
    );
}
