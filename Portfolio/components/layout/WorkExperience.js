import Link from "next/link";
import React from "react";
import Image from "next/image"



export default function ExperienceCards(){
    return (
        <section className="shadow-lg rounded-md">
            <div className="flex items-center gap-20 justify-center">

                <div>
                    <Image 
                        src={"/unnamed.webp"}
                        width={300}
                        height={300}
                        className="rounded-lg shadow-xl"
                        alt="obviohealth"
                    
                    
                    />

                    
                    <section className="relative  backdrop-blur-md mx-auto border-white/15 border-2 inset-x-0 bottom-16 w-10/12 bg-white/20 rounded-full flex items-center justify-between p-3">
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
                        width={300}
                        height={300}
                        className="rounded-md shadow-xl"
                        alt="kailasa"
                    
                    />
                    <section className="relative  backdrop-blur-md mx-auto border-white/15 border-2 inset-x-0 bottom-16 w-10/12 bg-white/20 rounded-full flex items-center justify-between p-3">
                        <p className="text-base text-white">Kailasa</p>
                        <Link
                            href={""}
                            className="text-xs text-primary"
                        
                        >Learn More</Link>
                    </section>

                </div>
                
                

            </div>

        </section>
    )
}