"use client"

import Link from "next/link";
import { usePathname } from "next/navigation";

const Navbar = () => {

    const pathname = usePathname();

    const navsLink = [
        {
            title: "Home",
            link: "/",
        },
        {
            title: "Support",
            link: "/support",
        },
        {
            title: "About",
            link: "/about",
        },
    ]
    return (
        <>
        <nav className="w-full flex bg-blue-50 justify-center items-center h-20 rounded-lg">
            <ul className="flex">
                {navsLink.map((link) => (
                    <li key={link.title} className="mx-4 text-blue-600 font-bold">
                        <Link className={link.link === pathname ? "border-b-2 border-blue-700" : ""} href={link.link}>{link.title}</Link>
                    </li>
                ))}
            </ul>
        </nav>
        </>
    )
}

export default Navbar;