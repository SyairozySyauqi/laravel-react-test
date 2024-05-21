import { Head } from "@inertiajs/react";
import Layout from "./Components/Layout";

export default function Jobs() {
    const jobs = [
        {
            title: "Director",
            salary: 50,
        },
        {
            title: "Programmer",
            salary: 20,
        },
        {
            title: "Teacher",
            salary: 20,
        },
    ];

    const jobList = jobs.map((job) => (
        <li key={job.title}>
            <b className="font-bold">{job.title}</b>: Pays {job.salary} per year
        </li>
    ));

    return (
        <>
            <Head title="Jobs" />
            <Layout heading={"Job Listings"}>
                <ul className="list-disc list-inside ml-2">{jobList}</ul>
            </Layout>
        </>
    );
}
