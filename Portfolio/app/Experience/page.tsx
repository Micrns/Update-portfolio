import ExperienceCards from "@/components/layout/WorkExperience"
import ProjectLists from "@/components/layout/ProjectsList"

export default function ExperiencePage(){

    return (
        <section className="py-10 text-center">
            <h1 className="text-primary text-6xl overline">Work Experience</h1>
            <div className="py-20">
                
                <ExperienceCards />


            </div>

            <h2 className="text-primary text-6xl overline">Projects</h2>

            <div>

                <ProjectLists/>

            </div>
            



        </section>
        
        
    )
}