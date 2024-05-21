import { Head } from "@inertiajs/react";
import Example from "./Components/Layout";

export default function Home() {
    return (
        <>
            <Head title="Home" />
            <Example heading={"Home"}>
                <p>Home</p>
            </Example>
        </>
    );
}
