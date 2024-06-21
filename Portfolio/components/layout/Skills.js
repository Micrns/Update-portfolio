import { SiTypescript } from "react-icons/si";
import { FaReact } from "react-icons/fa";
import { FaPython } from "react-icons/fa";
import { FaNode } from "react-icons/fa";
import { BsFiletypeSql } from "react-icons/bs";
import { TiHtml5 } from "react-icons/ti";
import { FaCss3Alt } from "react-icons/fa";
import { IoLogoVue } from "react-icons/io5";
import { FaDocker } from "react-icons/fa";
import { SiNextdotjs } from "react-icons/si";
import { SiTailwindcss } from "react-icons/si";
import { FiFigma } from "react-icons/fi";
import { IoLogoJavascript } from "react-icons/io5";
import { SiCaddy } from "react-icons/si";

export default function SkillsList() {
    const skills = [
        { component: SiTypescript, className: "text-blue-700", label: "TypeScript" },
        { component: FaReact, className: "text-blue-400", label: "React" },
        { component: FaPython, className: "text-slate-400", label: "Python" },
        { component: FaNode, className: "text-green-600", label: "Node.js" },
        { component: BsFiletypeSql, className: "text-blue-500", label: "SQL" },
        { component: TiHtml5, className: "text-red-600", label: "HTML5" },
        { component: FaCss3Alt, className: "text-sky-500", label: "CSS3" },
        { component: IoLogoVue, className: "text-green-600", label: "Vue.js" },
        { component: FaDocker, className: "text-blue-600", label: "Docker" },
        { component: SiNextdotjs, className: "text-slate-500", label: "Next.js" },
        { component: SiTailwindcss, className: "text-sky-400", label: "Tailwind CSS" },
        { component: FiFigma, className: "text-red-700", label: "Figma" },
        { component: IoLogoJavascript, className: "text-yellow-400", label: "JavaScript" },
        { component: SiCaddy, className: "text-blue-400", label: "Caddy" },
    ];

    return (
        <div className="text-3xl flex flex-col items-center gap-2">
            {skills.map((skill, index) => {
                const IconComponent = skill.component;
                return (
                    <div key={index} className="relative flex items-center group">
                        <IconComponent
                            className={`${skill.className} mb-2 transition-transform transform hover:scale-110`}
                        />
                        <span className="absolute left-full ml-2 bg-gray-800 text-white text-sm rounded px-2 py-1 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                            {skill.label}
                        </span>
                    </div>
                );
            })}
        </div>
    );
}
