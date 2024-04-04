import Link from "next/link";
import React from "react";
import Image from "next/image"



export default function ExperienceCards(){
    return (
        <section>
            <div className="flex items-center gap-20 justify-center">

                <div>
                    <Image 
                        src={"/unnamed.webp"}
                        width={250}
                        height={250}
                        className="rounded-lg"
                        alt="obviohealth"
                    
                    
                    />

                    
                    <section className="relative  backdrop-blur-sm mx-auto border-gray-500 border-2 inset-x-0 bottom-16 w-10/12 bg-white/15 rounded-lg flex items-center justify-between p-3">
                        <p className="text-base text-white">ObvioHealth</p>
                        <Link
                            href={""}
                            className="text-xs border-1 text-primary"
                        
                        >Learn More</Link>
                    </section>


                    

                    


                </div>
                
                <div>
                    <Image 
                        src={"/kailaasa_logo.jpeg"}
                        width={250}
                        height={250}
                        className="rounded-md"
                        alt="kailasa"
                    
                    />
                    <section className="relative  backdrop-blur-sm mx-auto border-gray-500 border-2 inset-x-0 bottom-16 w-10/12 bg-white/15 rounded-lg flex items-center justify-between p-3">
                        <p className="text-base text-white">Kailasa</p>
                        <Link
                            href={""}
                            className="text-xs border-1 text-primary"
                        
                        >Learn More</Link>
                    </section>

                </div>
                
                

            </div>

        </section>
    )
}