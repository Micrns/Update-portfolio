import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { IoIosPaper } from "react-icons/io";
import Link from "next/link";


export default function SocialLink() {
    return(

        <div className="flex gap-3 text-3xl justify-center py-1">
            <Link href="https://www.linkedin.com/in/oscar-reyes1/">
                <FaLinkedin className="text-color-linkedin" />
            </Link>

            <Link href="https://github.com/micrns">
                <FaGithub className="text-color-github" />
            </Link>

            <Link href="">
                <IoIosPaper />
            </Link>
            
            

        </div>


    )


}