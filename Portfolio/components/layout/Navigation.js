import Link from "next/link";
import { IoMdHome } from "react-icons/io";
import { MdOutlineEmail } from "react-icons/md";
import { IoIosPaper } from "react-icons/io";
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";

export default function NavBar(){


    return (
        <header className="sticky top-5 bg-white mx-auto rounded-full shadow-md w-1/2 z-50">

            {/* make this into an interactive button */}
            <div className="flex items-center justify-between p-4">
                <div className="flex items-center gap-2">
                    <Link href={"/"}>
                        <IoMdHome className="size-5 text-primary"/>
                    </Link>
                    <p className="text-primary">Oscar Reyes</p>


                </div>
                
                
                <nav className="flex gap-4 text-primary hover:black items-center">
                    <Link href="https://www.linkedin.com/in/oscar-reyes1/">
                        <FaLinkedin className="text-color-linkedin" />
                    </Link>
                    <Link href="https://github.com/micrns">
                        <FaGithub className="text-color-github" />
                    </Link>
                    <Link href={"/Experience"}>Experience</Link>
                    <Link href={"/about"}>About</Link>
                    <Link href={"mailto:oscarvreyess@gmail.com"}><MdOutlineEmail className="size-5"/></Link>
                    <Link href="/Resume/Oscar V Reyes's Resume.pdf"><IoIosPaper className="size-5" /></Link>
                



                </nav>
            


            </div>
            
        </header>
    )
}