import Image from "next/image"
import SocialLink from "./SocialLinks"



export default function Introduct () {

    return(

        <section className="flex items-center py-10">
            <div>

                <Image 
                    src={"/IMG_0270.jpeg"}
                    width={600}
                    height={600}
                    className="rounded-md"
                    alt="prof-img"

                />

                <SocialLink />



            </div>

            <div>
                <h1 className="text-6xl p-5">
                        <span className="text-primary">Hello, </span>my name is <span className="text-primary">Oscar Reyes</span>
                </h1>

            </div>

        </section>
        

        
       
    )

}