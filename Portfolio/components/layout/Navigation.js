import Link from "next/link";
import { IoMdHome } from "react-icons/io";
import { MdOutlineEmail } from "react-icons/md";
import { IoIosPaper } from "react-icons/io";

export default function NavBar(){


    return (
        <header className="rounded-b-lg shadow-md">

            {/* make this into an interactive button */}
            <div className="flex items-center justify-between p-4">
                <Link href={"/"}>
                    <IoMdHome className="size-10 text-primary"/>
                </Link>
                
                <nav className="flex gap-4 text-primary hover:black items-center">
                    <Link href={"/Experience"}>Experience</Link>
                    <Link href={"/about"}>About</Link>
                    <Link href={""}><MdOutlineEmail className="size-10"/></Link>
                    <Link href=""><IoIosPaper className="size-10" /></Link>
                



                </nav>
            


            </div>
            
        </header>
    )
}