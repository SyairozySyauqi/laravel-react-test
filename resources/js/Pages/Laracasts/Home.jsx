import { Head } from "@inertiajs/react";
import Layout from "./Components/Layout";

export default function Home() {
    return (
        <>
            <Head title="Home" />
            <Layout heading={"Home"}>
                <p>Home</p>
            </Layout>
        </>
    );
}
