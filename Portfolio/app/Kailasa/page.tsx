"use client"

import NavBar from "@/components/layout/Navigation";
import Image from "next/image";
import { motion } from "framer-motion";

const fadeInUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
};
export default function Kailasa (){
    return (

        <section>
            <NavBar />
            <div className="flex justify-center py-20">

                <Image 
                    src={"/visuals-000669216578-NlXWzN-t1240x260.jpg"}
                    width={1000}
                    height={600}
                    alt="Kailasa Icon" />

                
            </div>
            
            <div className="py-10 flex justify-center items-center gap-4 p-10">
                <motion.div 
                initial="hidden" 
                whileInView="visible" 
                viewport={{ once: true }}
                variants={fadeInUp}>
                <Image 
                    src="/Kailasa-hpage.png"
                    width={600}
                    height={500}
                    alt="Kailasa Home Page" />
                </motion.div>
                <motion.p 
                className="text-slate-400 w-1/4"
                initial="hidden" 
                whileInView="visible" 
                viewport={{ once: true }}
                variants={fadeInUp}>
                Kailasa is a micro-nation founded by Nithyananda, who is a respected Hindu guru that wanted to establish an enlightened Hindu civilization. Their goal is to provide services for current and new members of the religion within the digital world.
                </motion.p>
            </div>

            <div className="py-20 flex justify-center items-center gap-4">
                <motion.div 
                className="flex flex-col gap-5"
                initial="hidden" 
                whileInView="visible" 
                viewport={{ once: true }}
                variants={fadeInUp}>
                <Image 
                    src="/Screenshot 2024-02-25 124618.png"
                    width={600}
                    height={600}
                    alt="Kailasa Product confirmation" />
                <Image 
                    src="/Screenshot 2024-02-25 124718.png"
                    width={600}
                    height={600}
                    alt="Kailasa product scheduling" />
                </motion.div>
                <motion.div 
                className="w-1/4"
                initial="hidden" 
                whileInView="visible" 
                viewport={{ once: true }}
                variants={fadeInUp}>
                <h1 className="text-primary text-2xl">Development Process</h1>
                <p className="text-slate-400">Hello</p>
                </motion.div>
            </div>
            
        
        </section>

    )
}