import NavLink from "@/Components/NavLink";
import { Link } from "@inertiajs/react";

export default function Layout({ children }) {
    return (
        <>
            <nav className="flex gap-5 text-blue-500 underline">
                <Link
                    className="hover:text-blue-400 focus:text-blue-600 active:text-blue-600"
                    href="/test/"
                >
                    Home
                </Link>
                <Link
                    className="hover:text-blue-400 focus:text-blue-600 active:text-blue-600"
                    href="/test/about"
                >
                    About
                </Link>
                <Link
                    className="hover:text-blue-400 focus:text-blue-600 active:text-blue-600"
                    href="/test/contact"
                >
                    Contact
                </Link>
            </nav>
            <article>{children}</article>
        </>
    );
}
