import { Head } from "@inertiajs/react";
import Layout from "./Components/Layout";

export default function About() {
    return (
        <>
            <Head title="About" />
            <Layout heading={"About"}>
                <p>About</p>
            </Layout>
        </>
    );
}
