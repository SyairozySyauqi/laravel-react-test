export default function Layout() {
    return (
        <>
            <ul class="flex">
                <li class="mr-6">
                    <a class="text-blue-500 hover:text-blue-800" href="/">
                        Home
                    </a>
                </li>
                <li class="mr-6">
                    <a class="text-blue-500 hover:text-blue-800" href="/About">
                        About
                    </a>
                </li>
                <li class="mr-6">
                    <a
                        class="text-blue-500 hover:text-blue-800"
                        href="/Contact"
                    >
                        Contact
                    </a>
                </li>
            </ul>
        </>
    );
}
