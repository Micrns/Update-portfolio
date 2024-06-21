"use client"

import NavBar from "@/components/layout/Navigation";
import Image from "next/image";
import { motion } from "framer-motion";

const fadeInUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
};
export default function ObvioHealthPage(){
    return(
        <section>
            <NavBar />
            
            <div className="py-10 flex justify-center items-center">
                <Image 
                src={"/color-obviohealth.svg"}
                width={600}
                height={500}
                alt="ObvioHealth Logo"
            />
            </div>

            <div className="flex justify-center gap-4 py-10">
        <motion.div 
          initial="hidden" 
          whileInView="visible" 
          viewport={{ once: true }}
          variants={fadeInUp}>
          <Image 
            src="/Screenshot 2022-05-26 174701.jpg"
            width={300}
            height={300}
            alt="Obviohealth homepage"
          />
        </motion.div>
        <motion.p 
          className="w-1/3 text-slate-400"
          initial="hidden" 
          whileInView="visible" 
          viewport={{ once: true }}
          variants={fadeInUp}>
          During the crisis of COVID-19, social distancing was among the most suggestive advice to minimize the spread of the disease, making it difficult for people to do regular day-to-day activities and being able to schedule appointments for physical, daily checkups with a doctor. This lead to the idea of developing an application that allows users to connect with their own, personal doctor/clinician, while safely being at home. With the popularization of Zoom, ObvioHealth is designed to allow for Video conferencing calls, which is privatized between the clinician and patient, to allow for a seamless experience in performing physical checkups, diagnosis reports, and prescribing medications virtually. Additionally, users are able to maintain contact with their personal clinician by sending private messages to them about any questions they have. The goal was to provide a service that allowed for easy access
        </motion.p>
      </div>

      <div className="py-20 flex justify-center gap-5">
        <motion.iframe 
          width="900" 
          height="521" 
          src="https://www.youtube.com/embed/_x0Uzv0m2Ao" 
          title="Introduction of Coachlink" 
          frameBorder="0" 
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
          allowFullScreen
          initial="hidden" 
          whileInView="visible" 
          viewport={{ once: true }}
          variants={fadeInUp}>
        </motion.iframe>
        <motion.div 
          className="w-1/4"
          initial="hidden" 
          whileInView="visible" 
          viewport={{ once: true }}
          variants={fadeInUp}>
          <h1 className="text-primary text-xl">Development Process</h1>
          <p className="text-slate-400">
            Collaborated with a team of 5+ developers and product management team to develop CoachLink, a React Native mobile app using Twilio API, enhancing clinician-patient communication and medical assistance by 85%. Designed and programmed essential UI elements, including homepage, login, signup, and messaging pages, using TypeScript, HTML, and CSS, achieving a cohesive visual design aligned with Figma mockups. Created GraphQL queries for messaging and video chat features, integrating them with Twilio API and Gifted Chat. Implemented efficient task tracking through organized sprint reports, ensuring timely completion of project milestone.
          </p>
        </motion.div>
      </div>
            
        </section>
    )
}