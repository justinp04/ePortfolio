import * as React from "react";
import Image from "next/image";

export default function Navbar() {
    return (
        <div className="flex flex-row justify-between items-center w-4/12 right-0 left-12 absolute">
            <a><Image
                className="relative dark:drop-shadow-[0_0_0.3rem_#ffffff70] dark:invert px-2.5 shrink-0"
                src="/logo.svg"
                alt="Justin Pan's Logo"
                width={80}
                height={80}
                priority
                /></a>
            <a><p className="px-2.5">ABOUT</p></a>
            <a><p className="px-2.5">EXPERIENCE</p></a>
            <a><p className="px-2.5">PROJECTS</p></a>
            <a><p className="px-2.5">CONTACT</p></a>
        </div>
    )
}