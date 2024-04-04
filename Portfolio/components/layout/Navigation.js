import Link from "next/link";
import { IoMdHome } from "react-icons/io";

export default function NavBar(){


    return (
        <header className="flex items-center justify-between">

            {/* make this into an interactive button */}
            <Link href={"/"}>
                <IoMdHome className="size-10 text-primary"/>
            </Link>
            
            <nav className="flex gap-4 text-primary hover:black">
                <Link href={"/Experience"}>Experience</Link>
                <Link href={"/Projects"}>Projects</Link>
                <Link href={"/about"}>About</Link>
                <Link href={"/Contact"}>Contact</Link>


            </nav>
            
        </header>
    )
}