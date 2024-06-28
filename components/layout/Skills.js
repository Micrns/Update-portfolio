"use client";
import React from 'react';

export default function SkillsList() {
    const skills = [
        { src: "icons/devicon_typescript.svg", alt: "TypeScript", label: "TypeScript" },
        { src: "icons/logos_react.svg", alt: "React", label: "React" },
        { src: "icons/logos_python.svg", alt: "Python", label: "Python" },
        { src: "icons/fa6-brands_node.svg", alt: "Node.js", label: "Node.js" },
        { src: "icons/logos_mysql.svg", alt: "SQL", label: "SQL" },
        { src: "icons/logos_html-5.svg", alt: "HTML5", label: "HTML5" },
        { src: "icons/logos_css-3.svg", alt: "CSS3", label: "CSS3" },
        { src: "icons/logos_vue.svg", alt: "Vue.js", label: "Vue.js" },
        { src: "icons/skill-icons_docker.svg", alt: "Docker", label: "Docker" },
        { src: "icons/devicon_nextjs.svg", alt: "Next.js", label: "Next.js" },
        { src: "icons/devicon_tailwindcss.svg", alt: "Tailwind CSS", label: "Tailwind CSS" },
        { src: "icons/logos_figma.svg", alt: "Figma", label: "Figma" },
        { src: "icons/logos_javascript.svg", alt: "JavaScript", label: "JavaScript" },
        { src: "icons/simple-icons_caddy.svg", alt: "Caddy", label: "Caddy" },
    ];

    return (
        <div className="text-2xl flex flex-col items-center gap-2">
            {skills.map((skill, index) => (
                <div key={index} className="relative flex items-center group">
                    <img
                        src={skill.src}
                        alt={skill.alt}
                        className="w-15 md:w-24 lg:w-60 mb-2 transition-transform transform hover:scale-110"
                    />
                    <span className="absolute right-full mr-1 bg-slate-100 text-primary text-sm rounded px-2 py-1 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                        {skill.label}
                    </span>
                </div>
            ))}
        </div>
    );
}
