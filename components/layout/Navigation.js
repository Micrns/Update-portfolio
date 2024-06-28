"use client"

import { useState } from 'react';
import Link from 'next/link';
import Image from "next/image";
// import { HiOutlineMenu, HiOutlineX } from 'react-icons/hi';

export default function NavBar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <header className="sticky top-5 bg-white mx-auto shadow-sm w-1/2 rounded-full z-50 p-4">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-2">
          <Link href="/" passHref>
            <div className="flex items-center gap-1 text-primary hover:text-slate-400 transition ease-in duration-400 cursor-pointer">
              {/* <IoMdHome size={24} /> */}
              <Image
              src="icons/ic_round-home.svg"
              width={20}
              height={20}
              alt="Home Icon"
              
            />

              <p>Oscar Reyes</p>
            </div>
          </Link>
        </div>

        <div className="md:hidden">
          <button onClick={toggleMenu} aria-label="Toggle Menu">
            {isOpen ? <Image
              src="icons/ph_x.svg"
              width={20}
              height={20}
              alt="Home Icon"
              
            /> : <Image
            src="icons/mingcute_menu-fill.svg"
            width={20}
            height={20}
            alt="Home Icon"
            
          />}
          {/* {isOpen ? <HiOutlineX size={24} /> : <HiOutlineMenu size={24} />} */}
          </button>
        </div>

        <nav className="hidden md:flex gap-4 items-center">
          <Link href="https://www.linkedin.com/in/oscar-reyes1/">
            {/* <FaLinkedin className="text-color-linkedin hover:text-slate-400 transition ease-in duration-400" size={24} aria-label="LinkedIn" /> */}
            <Image
              src="icons/mdi_linkedin.svg"
              width={20}
              height={20}
              alt="LinkedIn Icon"
              
            />
          </Link>
          <Link href="https://github.com/micrns">
            {/* <FaGithub className="text-color-github hover:text-slate-400 transition ease-in duration-400" size={24} aria-label="GitHub" /> */}
            <Image
              src="icons/mdi_github.svg"
              width={20}
              height={20}
              alt="github Icon"
              
            />
          </Link>
          <Link href="/Experience">
            <p className="text-primary hover:text-slate-400 cursor-pointer transition ease-in duration-400">Experience</p>
          </Link>
          <Link href="/">
            <p className="text-primary hover:text-slate-400 cursor-pointer transition ease-in duration-400">About</p>
          </Link>
          <Link href="mailto:oscarvreyess@gmail.com">
            {/* <MdOutlineEmail className="text-primary hover:text-slate-400 transition ease-in duration-400" size={24} aria-label="Email" /> */}
            <Image
              src="icons/ic_outline-email.svg"
              width={20}
              height={20}
              alt="email icon"
              
            />
          </Link>
          <Link href="/Resume/Oscar V Reyes's Resume.pdf">
            {/* <IoIosPaper className="text-primary hover:text-slate-400 transition ease-in duration-400" size={24} aria-label="Resume" /> */}
            <Image
              src="icons/quill_paper.svg"
              width={20}
              height={20}
              alt="Home Icon"
              
            />
          </Link>
        </nav>
      </div>

      {isOpen && (
        <nav className="md:hidden flex flex-col items-center gap-4 mt-4">
          <Link href="https://www.linkedin.com/in/oscar-reyes1/">
            {/* <FaLinkedin className="text-color-linkedin hover:text-black" size={24} aria-label="LinkedIn" /> */}
            <Image
              src="icons/mdi_linkedin.svg"
              width={20}
              height={20}
              alt="LinkedIn Icon"
              
            />
          </Link>
          <Link href="https://github.com/micrns">
            {/* <FaGithub className="text-color-github hover:text-black" size={24} aria-label="GitHub" /> */}
            <Image
              src="icons/mdi_github.svg"
              width={20}
              height={20}
              alt="github Icon"
              
            />
          </Link>
          <Link href="/Experience">
            <p className="text-primary hover:text-black cursor-pointer">Experience</p>
          </Link>
          <Link href="/">
            <p className="text-primary hover:text-black cursor-pointer">About</p>
          </Link>
          <Link href="mailto:oscarvreyess@gmail.com">
            {/* <MdOutlineEmail className="text-primary hover:text-black" size={24} aria-label="Email" /> */}
            <Image
              src="icons/ic_outline-email.svg"
              width={20}
              height={20}
              alt="email icon"
              
            />
          </Link>
          <Link href="/Resume/Oscar V Reyes's Resume.pdf">
            {/* <IoIosPaper className="text-primary hover:text-black" size={24} aria-label="Resume" /> */}
            <Image
              src="icons/quill_paper.svg"
              width={20}
              height={20}
              alt="Home Icon"
              
            />
          </Link>
        </nav>
      )}
    </header>
  );
}
