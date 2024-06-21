import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";

import Link from "next/link";
import Image from "next/image"
import SkillsList from "./Skills"

export default function SocialLink() {
    return(

        <>
            <div className="flex items-center gap-2">

                
                <Image 
                        src={"/IMG_0270.jpeg"}
                        width={600}
                        height={600}
                        className="rounded-sm"
                        alt="prof-img"

                    />
                <div className="text-wrap p-3 w-2/5">
                    <h1 className="text-7xl text-primary">About me</h1>

                    <p className="w-7/12 text-slate-400 text-left">I am a recent graduate of the University of California, Irvine with a Bachelors of Science in Informatics, specializing in Human-Computer Interaction. My interest in programming and software development stems through the use of social media platforms by understanding how much of a benefit technology has in connecting people together. I want to build and create platforms that allow people to interact and network themselves with other people to provide an accessible environment through the use of software. This thought process motivated me to build personal projects to learn new languages and technologies and my short-term software engineering experience at ObvioHealth aided my basic understanding of software development. Besides programming, I am also interested in working out, fashion, and traveling.</p>



                </div>

                <SkillsList />
                

            </div>
            

                

            
            
        
        
        
        </>

        


    )


}