import React from "react";
import Digitalworld from "../assets/images/digitalworld.webp";
import Digitalworldmobile from "../assets/images/digitalworldmobile.webp";
import Profilelist from "../assets/images/profilephotolist.webp";

const DigitalworldBox: React.FC = () => {
  return (
    <div>
      <div className="hidden grid-cols-[2fr_1.5fr_3fr] gap-4 bg-custom-black1 p-10 lg:grid">
        <img src={Digitalworld} alt="" className="h-auto w-full" />
        <div className="block rounded-2xl bg-gradient-to-b from-custom-purple1 via-custom-purple1 to-custom-black2 p-2 lg:h-[100px] xl:h-[140px] 2xl:h-[250px]">
          <p className="items-center font-darkgrotesque font-semibold leading-none text-white lg:text-[30px] xl:text-[35px] 2xl:text-[35px]">
            300+ <br /> Values
          </p>
        </div>
        <div className="block rounded-2xl bg-custom-purple2 pb-6 pt-6 lg:pl-32 xl:pl-32 2xl:pl-40">
          <span className="font-darkgrotesque font-semibold leading-none text-white lg:text-[40px] xl:text-[45px]">
            The Token <br /> That Powers
            <br />{" "}
            <span className="inline-block bg-gradient-to-t from-custom-purple1 to-custom-white1 bg-clip-text text-transparent">
              {" "}
              Digital World
            </span>{" "}
          </span>
        </div>
        <div className="flex items-center justify-center pt-1">
          <button className="relative inline-flex h-[45px] w-[120px] items-center justify-center rounded-full bg-gradient-to-b from-custom-blue1 to-custom-purple1 p-px text-[16px] lg:w-[180px] xl:h-[55px] xl:w-[230px] xl:text-[18px] 2xl:w-[230px] 2xl:text-[20px]">
            <span className="absolute inset-[1px] flex items-center justify-center rounded-full bg-four-color-gradient p-2 text-center font-inter text-white transition-all duration-300 ease-in-out hover:opacity-80">
              Join Community
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
        </div>

        <div className="z-10 -mr-24 lg:-mt-20 xl:-mt-16 2xl:-mt-16">
          <div className="relative h-[140px] rounded-2xl bg-custom-purple1 p-4 2xl:h-[200px] 2xl:p-10">
            <p className="font-darkgrotesque text-[20px] font-semibold leading-none text-white">
              KYC-compliant where <br /> required
            </p>
            <div className="absolute flex items-center justify-between 2xl:pt-5">
              <img src={Profilelist} alt="" className="scale-95 p-2" />
              <p className="font-darkgrotesque text-[10px] leading-none text-white xl:text-[12px] 2xl:text-[14px]">
                Join our Community,
                <br />
                We are waiting for you
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="lg:hidden">
        <div className="flex w-full items-center justify-center p-5">
          <span className="text-center font-darkgrotesque text-[42px] font-semibold leading-none text-white md:text-[55px]">
            The Token That <br /> Powers
            <br />{" "}
            <span className="inline-block bg-gradient-to-t from-custom-purple1 to-custom-white1 bg-clip-text text-transparent">
              {" "}
              Digital World
            </span>{" "}
          </span>
        </div>
        <div className="grid grid-cols-6 gap-4">
          <div className="col-span-6 col-start-1 px-5">
            <img src={Digitalworldmobile} alt="" className="h-auto w-full" />
          </div>
          <div className="col-start-1 col-end-3 pl-5">
            <button className="2 relative inline-flex h-[45px] w-[160px] items-center justify-end rounded-full bg-gradient-to-b from-custom-blue1 to-custom-purple1 p-px text-[12px] md:text-[14px]">
              <span className="absolute inset-[1px] flex items-center justify-center rounded-full bg-four-color-gradient p-2 text-center font-inter text-white transition-all duration-300 ease-in-out hover:opacity-80 md:p-4">
                Join Community
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
          </div>
          <div className="col-span-2 col-end-7 pr-5">
            <div className="block h-[80px] rounded-2xl bg-gradient-to-b from-custom-purple1 via-custom-purple1 to-custom-black2 p-2">
              <p className="items-center font-darkgrotesque text-[13px] font-semibold leading-none text-white md:text-[20px]">
                300+ <br /> Values
              </p>
            </div>
          </div>
          <div className="col-start-1 col-end-7 px-5 pb-3 pt-2">
            <div className="relative flex h-[100px] flex-col justify-between rounded-2xl bg-custom-purple1 p-4 md:h-[140px]">
              <div className="flex items-start justify-between">
                <p className="font-darkgrotesque text-[18px] font-semibold leading-none text-white md:text-[25px]">
                  KYC-compliant where <br /> required
                </p>
                <img src={Profilelist} alt="" className="scale-95 px-2 pt-2" />
              </div>
              <p className="mb-1 text-right font-darkgrotesque text-[11px] leading-none text-white md:mb-4 md:text-[12px]">
                Join our Community,
                <br />
                We are waiting for you
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DigitalworldBox;
