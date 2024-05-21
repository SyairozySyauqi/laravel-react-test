import { Head } from "@inertiajs/react";
import Example from "./Components/Layout";

export default function Settings() {
    return (
        <>
            <Head title="Settings" />
            <Example heading={"Settings"}>
                <p>Settings</p>
            </Example>
        </>
    );
}
