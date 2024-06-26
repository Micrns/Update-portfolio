import ExperienceCards from "@/components/layout/WorkExperience"
import ProjectLists from "@/components/layout/ProjectsList"
import NavBar from "@/components/layout/Navigation"

export default function ExperiencePage(){

    return (
        
        <section>
            <NavBar />

            <div className="max-w-screen-xl mx-auto p-4  text-right py-10">
                <h1 className="text-primary text-2xl">Work Experience</h1>
                
                <div className="py-5">
                    
                    <ExperienceCards />


                </div>

                <h2 className="text-primary text-2xl py-2">Projects</h2>

                <div>

                    <ProjectLists/>

                </div>
            </div>
            
            



        </section>
        
        
    )
}