"use client"

import { usePathname, useRouter, redirect } from "next/navigation";
import Link from "next/link";

const Navbar = () => {

    const pathname = usePathname();
    const router = useRouter();
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
        {
            title: "Login",
            link: "/login",
        },
        {
            title: "Register",
            link: "/register",
        },
        {
            title: "ForgetPassword",
            link: "/forget-password",
        },
    ]

    const handleClick = () => {
        // router.refresh();
        // router.replace("/about")
        // router.back();
        redirect("/about")
    }
    return (
        <>
        <nav className="w-full flex bg-blue-50 justify-center items-center h-20 rounded-lg">
            <ul className="flex justify-center items-center">
                {navsLink.map((link) => (
                    <li key={link.title} className="mx-4 text-blue-600 font-bold">
                        <Link className={link.link === pathname ? "border-b-2 border-blue-700" : ""} href={link.link}>{link.title}</Link>
                    </li>
                ))}

                    <button onClick={handleClick} className="bg-blue-500 cursor-pointer text-white px-6 py-2 rounded">
                        Click
                    </button>

            </ul>
        </nav>
        </>
    )
}

export default Navbar;