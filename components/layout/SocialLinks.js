"use client";

import Image from "next/image";
import SkillsList from "./Skills";
import FadeInSection from "./FadeInSection";
import React from "react";


export default function SocialLink() {
  return (
    <>
      <div className="flex flex-col md:flex-row items-center gap-2 p-4">
        
        <FadeInSection>
          <div className="relative w-full md:w-[600px] h-[400px] md:h-[750px]">
            {/* <Image
              src={profile}
              layout="fill"
              alt="prof-img"
              className="object-cover"
              unoptimized
              
            /> */}
            <img
                        src="\profile-pic.jpeg"
                        alt="profile"
                        className="w-15 md:w-24 lg:w-60 mb-2 transition-transform transform hover:scale-110"
                    />
          </div>
        </FadeInSection>
        <FadeInSection>
          <div className="text-wrap p-3 w-full md:w-10/12">
            <h1 className="text-3xl md:text-4xl lg:text-7xl text-primary">About me</h1>
            <p className="w-full md:w-8/12 lg:w-8/12 text-slate-400 text-left mt-2 md:mt-0">
              I am a recent graduate of the University of California, Irvine with a Bachelors of Science in Informatics, specializing in Human-Computer Interaction. My interest in programming and software development stems through the use of social media platforms by understanding how much of a benefit technology has in connecting people together. I want to build and create platforms that allow people to interact and network themselves with other people to provide an accessible environment through the use of software. This thought process motivated me to build personal projects to learn new languages and technologies and my short-term software engineering experience at ObvioHealth aided my basic understanding of software development. Besides programming, I am also interested in working out, fashion, and traveling.
            </p>
          </div>
        </FadeInSection>
        <FadeInSection>
          <SkillsList />
        </FadeInSection>
      </div>
    </>
  );
}
