
import Introduct from "@/components/layout/Introduction"
import Image from "next/image"
import SocialLink from "@/components/layout/SocialLinks"
// skills icons
import SkillsList from "@/components/layout/Skills"

export default function AboutPage(){

    return (
        <section className="flex py-4">
            <div>

                <Image 
                    src={"/IMG_0270.jpeg"}
                    width={600}
                    height={600}
                    className="rounded-md border-2 border-black"
                    alt="prof-img"

                />

                <SocialLink />



            </div>
            <div className="w-1/2 ">
                <h1 className="text-primary text-5xl p-4 overline">About Me</h1>
                <p className="p-4">I am a recent graduate of the University of California, Irvine with a Bachelors of Science in Informatics, specializing in Human-Computer Interaction. My interest in programming and software development stems through the use of social media platforms by understanding how much of a benefit technology has in connecting people together. I want to build and create platforms that allow people to interact and network themselves with other people to provide an accessible environment through the use of software. This thought process motivated me to build personal projects to learn new languages and technologies and my short-term software engineering experience at ObvioHealth aided my basic understanding of software development. Besides programming, I am also interested in working out, fashion, and traveling.</p>
                <h2 className="text-primary text-5xl p-4 overline">Skills</h2>
                {/* making a list to showcase skills */}
                <div className="p-4">
                    <SkillsList/>

                </div>
                
                
                
            </div>
            
        </section>
        
    )
}