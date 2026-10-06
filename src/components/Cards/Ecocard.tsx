import React from "react";

interface UtilityCardProps {
  title: string;
  description: string;
  buttonText: string;
}

const UtilityCard: React.FC<UtilityCardProps> = ({ title, description, buttonText }) => {
  return (
    <div className="flex h-full w-full flex-col justify-between rounded-lg bg-custom-purple2 p-10 font-darkgrotesque lg:min-h-[300px]">
      <div>
        <h5 className="mb-3 text-center text-[20px] font-bold leading-none text-white lg:text-left">
          {title}
        </h5>
        <p className="mb-2 hidden font-worksans text-[8px] text-white md:text-[12px] lg:block">
          {description}
        </p>
      </div>

      <div className="flex justify-center pt-4 lg:justify-end">
        <button className="relative inline-flex h-[39px] w-[150px] items-center justify-center rounded-full bg-gradient-to-b from-custom-blue1 to-custom-purple1 p-px xl:w-[180px] 2xl:w-[180px]">
          <span className="absolute inset-[1px] flex items-center justify-center rounded-full bg-four-color-gradient p-2 text-center font-inter text-[12px] text-white transition-all duration-300 ease-in-out hover:opacity-80">
            {buttonText}
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
    </div>
  );
};

export default UtilityCard;
