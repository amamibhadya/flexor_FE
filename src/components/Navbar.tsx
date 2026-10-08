import React, { useState, useRef } from "react";
import Logo from "../assets/images/logo.webp";
import Telegram from "../assets/images/telegram.webp";
import Twitter from "../assets/images/twitter.webp";
import Eth from "../assets/images/eth.webp";
import Dex from "../assets/images/dex.webp";
import { SectionRefs } from "../types/MainLayoutTypes";
import useClickOutside from "../hooks/UseClickOutside";

interface NavbarProps {
  sectionRefs: SectionRefs;
}

const Navbar: React.FC<NavbarProps> = ({ sectionRefs }) => {
  const scrollToSection = (ref: React.RefObject<HTMLDivElement | null>) => {
    if (ref.current) {
      ref.current.scrollIntoView({ behavior: "smooth" });
    }
    setIsOpen(false);
  };

  const [isOpen, setIsOpen] = useState(false);
  const navbarRef = useRef<HTMLDivElement>(null);

  const toggleMenu = () => setIsOpen(!isOpen);

  useClickOutside(navbarRef, () => {
    if (isOpen) setIsOpen(false);
  });

  return (
    <nav className="start-0 top-0 z-20 w-full rounded-t-3xl bg-custom-black1">
      <div className="flex flex-wrap items-center justify-between p-4">
        <img
          src={Logo}
          onClick={() => window.location.reload()}
          className="h-12 w-12 cursor-pointer"
          alt="logo"
        />

        <div className="flex gap-1 space-x-2 md:order-2 lg:space-x-3">
          <li className="relative hidden items-center md:flex">
            <a href="#">
              <img
                src={Telegram}
                alt="telegram"
                className="flex h-8 w-8 cursor-pointer items-center justify-center rounded-full bg-white/10 p-2 hover:bg-white/15"
              />
            </a>
          </li>
          <li className="relative hidden items-center md:flex">
            <a href="#">
              <img
                src={Twitter}
                alt="twitter"
                className="flex h-8 w-8 cursor-pointer items-center justify-center rounded-full bg-white/10 p-2 hover:bg-white/15"
              />
            </a>
          </li>
          <li className="relative hidden items-center md:flex">
            <a href="#">
              <img
                src={Eth}
                alt="twitterlight"
                className="flex h-8 w-8 cursor-pointer items-center justify-center rounded-full bg-white/10 p-2 hover:bg-white/15"
              />
            </a>
          </li>
          <li className="relative hidden items-center md:flex">
            <a href="#">
              <img
                src={Dex}
                alt="dex"
                className="flex h-8 w-8 cursor-pointer items-center justify-center rounded-full bg-white/10 p-2 hover:bg-white/15"
              />
            </a>
          </li>

          <button
            onClick={toggleMenu}
            type="button"
            className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-custom-purple1 p-2 text-sm text-white md:hidden"
            aria-controls="navbar-sticky"
            aria-expanded={isOpen ? "true" : "false"}
          >
            <span className="sr-only">Open main menu</span>
            <svg
              className="h-5 w-5"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 17 14"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M3 1h10"
              />

              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M0 7h14"
              />

              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M2 13h8"
              />
            </svg>
          </button>
        </div>
        <div
          ref={navbarRef}
          className={`absolute left-0 top-0 w-full bg-transparent backdrop-blur-lg md:relative md:bg-none md:backdrop-blur-0 ${isOpen ? "flex" : "hidden md:flex md:w-auto md:justify-center"}`}
        >
          <div
            className={`w-full items-center justify-between md:order-1 md:flex md:w-auto`}
            id="navbar-sticky"
          >
            <ul className="mt-4 flex flex-col p-4 font-inter font-normal md:mt-0 md:flex-row md:space-x-4 md:p-0">
              <li>
                <a
                  onClick={() => scrollToSection(sectionRefs.Thetoken)}
                  className="block cursor-pointer px-3 py-2 text-[14px] text-custom-white1 md:p-0"
                >
                  Home
                </a>
              </li>
              <li>
                <a
                  onClick={() => scrollToSection(sectionRefs.Threebox)}
                  className="block cursor-pointer px-3 py-2 text-[14px] text-custom-white1 md:p-0"
                >
                  Ecosystem
                </a>
              </li>
              <li>
                <a
                  onClick={() => scrollToSection(sectionRefs.Utilitybox)}
                  className="block cursor-pointer px-3 py-2 text-[14px] text-custom-white1 md:p-0"
                >
                  Utility
                </a>
              </li>
              <li>
                <a
                  onClick={() => scrollToSection(sectionRefs.Digitalworldbox)}
                  className="block cursor-pointer px-3 py-2 text-[14px] text-custom-white1 md:p-0"
                >
                  Tokenomics
                </a>
              </li>
              <li>
                <a
                  onClick={() => scrollToSection(sectionRefs.Transparancybox)}
                  className="block cursor-pointer px-3 py-2 text-[14px] text-custom-white1 md:p-0"
                >
                  Trust
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
      
    </nav>
  );
};

export default Navbar;
