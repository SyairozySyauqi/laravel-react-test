import { Head } from "@inertiajs/react";
import Example from "./Components/Layout";

export default function Users() {
    return (
        <>
            <Head title="Users" />
            <Example heading={"Users"}>
                <p>Users</p>
            </Example>
        </>
    );
}
