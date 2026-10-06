import React from "react";
import Logo from "../assets/images/logo.webp";
import Telegram from "../assets/images/telegram.webp";
import Twitter from "../assets/images/twitter.webp";
import Eth from "../assets/images/eth.webp";
import Dex from "../assets/images/dex.webp";
const Footer: React.FC = () => {
  return (
    <footer className="relative w-full bg-custom-black1">
      <div className="hidden md:block">
        <div className="flex flex-wrap items-center justify-between p-10">
          <img src={Logo} className="h-12 w-12" alt="logo" />

          <form className="flex items-center gap-2">
            <label htmlFor="simple-search" className="sr-only">
              Search
            </label>
            <div className="relative w-full">
              <div className="pointer-events-none absolute inset-y-0 start-0 flex items-center ps-3">
                {" "}
              </div>
              <input
                type="text"
                placeholder="Enter your email"
                required
                className="text-white2 block w-full rounded-full border border-custom-white2 bg-custom-black1 p-3 ps-5 font-inter text-[12px] opacity-25"
              />
            </div>
            <button className="relative inline-flex h-[39px] w-[125px] items-center justify-center rounded-full bg-gradient-to-b from-custom-blue1 to-custom-purple1 p-px text-[10px]">
              <span className="absolute inset-[1px] flex items-center justify-center rounded-full bg-four-color-gradient p-2 text-center font-inter text-white transition-all duration-300 ease-in-out hover:opacity-80">
                Try Now
                <svg
                  className="ml-1 h-3 w-3 text-white"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 6 10"
                >
                  <path
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M1 9L5 5 1 1"
                  />
                </svg>
              </span>
            </button>
          </form>
        </div>
        <div className="flex w-full items-end justify-end pr-10">
          <ul className="mt-3 flex flex-wrap items-center font-inter text-[11px] text-custom-white1 lg:text-[14px]">
            <li>
              <a href="#" className="me-4 hover:underline lg:me-6">
                Vision
              </a>
            </li>
            <li>
              <a href="#" className="me-4 hover:underline lg:me-6">
                What Makes
              </a>
            </li>
            <li>
              <a href="#" className="me-4 hover:underline lg:me-6">
                Ecosystem
              </a>
            </li>
            <li>
              <a href="#" className="me-4 hover:underline lg:me-6">
                Why BlockAI
              </a>
            </li>
            <li>
              <a href="#" className="me-4 hover:underline lg:me-6">
                How It
              </a>
            </li>
            <li>
              <a href="#" className="me-4 hover:underline lg:me-6">
                Use Cases
              </a>
            </li>
            <li>
              <a href="#" className="me-4 hover:underline lg:me-6">
                Governance
              </a>
            </li>
            <li>
              <a href="#" className="me-4 hover:underline lg:me-6">
                Action
              </a>
            </li>
          </ul>
        </div>
        <div className="flex justify-end gap-3 pr-14 pt-4">
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
        </div>
        <div className="flex items-center justify-between">
          <div className="p-10 font-dmsans text-[12px] text-white">Terms & Conditions</div>
          <div className="p-10">
            <span className="font-dmsans text-[12px] text-white">Copyright 2025 |</span>
            <span className="font-dmsans text-[12px] text-custom-purple4">Toko</span>
            <span className="font-dmsans text-[12px] text-white">| All Rights Recieved</span>
          </div>
        </div>
      </div>
      <div className="block md:hidden">
        <div className="flex h-full w-full items-center justify-center">
          <img src={Logo} alt="" className="h-12 w-12" />
        </div>
        <div className="flex h-full w-full items-center justify-center p-5">
          <div className="grid grid-cols-2 gap-10">
            <ul className="font-dmsans text-[12px] text-white">
              <li className="mb-4">
                <a href="" className="hover:underline">
                  Vision
                </a>
              </li>
              <li className="mb-4">
                <a href="" className="hover:underline">
                  What Makes
                </a>
              </li>
              <li className="mb-4">
                <a href="" className="hover:underline">
                  Ecosystem
                </a>
              </li>
              <li className="mb-4">
                <a href="" className="hover:underline">
                  Why BlockAI
                </a>
              </li>
            </ul>
            <ul className="font-dmsans text-[12px] text-white">
              <li className="mb-4">
                <a href="" className="hover:underline">
                  How It
                </a>
              </li>
              <li className="mb-4">
                <a href="" className="hover:underline">
                  Use Cases
                </a>
              </li>
              <li className="mb-4">
                <a href="" className="hover:underline">
                  Governance
                </a>
              </li>
              <li className="mb-4">
                <a href="" className="hover:underline">
                  Action
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="flex w-full items-center justify-center gap-2">
          <li className="relative flex items-center">
            <a href="#">
              <img
                src={Telegram}
                alt="telegram"
                className="flex h-7 w-7 cursor-pointer items-center justify-center rounded-full bg-white/10 p-1 hover:bg-white/15"
              />
            </a>
          </li>
          <li className="relative flex items-center">
            <a href="#">
              <img
                src={Twitter}
                alt="twitter"
                className="flex h-7 w-7 cursor-pointer items-center justify-center rounded-full bg-white/10 p-1 hover:bg-white/15"
              />
            </a>
          </li>
          <li className="relative flex items-center">
            <a href="#">
              <img
                src={Eth}
                alt="twitterlight"
                className="flex h-7 w-7 cursor-pointer items-center justify-center rounded-full bg-white/10 p-1 hover:bg-white/15"
              />
            </a>
          </li>
          <li className="relative flex items-center">
            <a href="#">
              <img
                src={Dex}
                alt="dex"
                className="flex h-7 w-7 cursor-pointer items-center justify-center rounded-full bg-white/10 p-1 hover:bg-white/15"
              />
            </a>
          </li>
        </div>
        <form className="flex items-center gap-3 px-8 pt-4">
          <label htmlFor="simple-search" className="sr-only">
            Search
          </label>
          <div className="relative w-full">
            <div className="pointer-events-none absolute inset-y-0 start-0 flex items-center ps-3">
              {" "}
            </div>
            <input
              type="text"
              placeholder="Enter your email"
              required
              className="text-white2 block w-full rounded-full border border-custom-white2 bg-custom-black1 p-3 ps-5 font-inter text-[12px] opacity-25"
            />
          </div>
          <button className="relative inline-flex h-[39px] w-[115px] items-center justify-center rounded-full bg-gradient-to-b from-custom-blue1 to-custom-purple1 p-px text-[10px]">
            <span className="absolute inset-[1px] flex items-center justify-center rounded-full bg-four-color-gradient p-2 text-center font-inter text-white transition-all duration-300 ease-in-out hover:opacity-80">
              Try Now
              <svg
                className="ml-1 h-3 w-3 text-white"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 6 10"
              >
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M1 9L5 5 1 1"
                />
              </svg>
            </span>
          </button>
        </form>
        <div className="flex flex-col items-center justify-center pt-4">
          <p className="font-dmsans text-[12px] leading-none text-white">Terms and Conditions </p>
          <div className="mb-4">
            <span className="font-dmsans text-[12px] text-white">Copyright 2025 |</span>
            <span className="font-dmsans text-[12px] text-custom-purple4">Toko</span>
            <span className="font-dmsans text-[12px] text-white">| All Rights Recieved</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
