import Image from "next/image"
import NavBar from "@/components/layout/Navigation";





export default function Introduct () {

    return(

        <section className="relative h-screen">
            <NavBar />
            <div className="absolute inset-0">
                <Image
                    src="/IMG_0591.jpg"
                    layout="fill"
                    objectFit="cover"
                    quality={100}
                    alt="main-pic"
                    sizes="100vw"
                    objectPosition="center 35%"
                    className="shadow-md"
                    
                    
                />
            </div>
            <div className="absolute inset-0 bg-black opacity-45"></div>
            <div className="absolute top-1/2 right-0 transform translate-y-(-50%) text-right text-white right-[11%] px-4">
                <h1 className="text-white text-4xl font-bold">Hello, my name is <span className="text-primary text-5xl ">Oscar Reyes</span></h1>
            </div>
        </section>

       
        

        
       
    )

}