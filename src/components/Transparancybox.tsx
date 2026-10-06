import React from "react";
const DigitalworldBox: React.FC = () => {
  return (
    <div className="flex w-full flex-col items-center justify-center">
      <span className="hidden pb-14 font-darkgrotesque font-semibold leading-none text-white md:block md:text-[55px] lg:text-[60px] xl:text-[75px] 2xl:text-[77px]">
        Built with Trust &{" "}
        <span className="inline-block bg-gradient-to-t from-custom-purple1 to-custom-white1 bg-clip-text text-transparent">
          {" "}
          Transparancy
        </span>{" "}
      </span>

      <span className="block pb-12 text-center font-darkgrotesque text-[45px] font-semibold leading-none text-white md:hidden">
        Built with Trust & <br />{" "}
        <span className="inline-block bg-gradient-to-t from-custom-purple1 to-custom-white1 bg-clip-text text-transparent">
          {" "}
          Transparancy
        </span>{" "}
      </span>

      <div className="grid w-full grid-cols-2 justify-items-center gap-4 px-2 py-3 md:grid-cols-2 lg:grid-cols-4">
        <div className="flex h-[110px] w-[150px] flex-col rounded-lg bg-custom-purple2 p-2 font-darkgrotesque md:h-[130px] md:w-[300px] md:p-5 lg:w-[230px] xl:w-[300px] 2xl:w-[300px]">
          <h5 className="mb-3 text-left text-[14px] font-bold leading-tight text-white md:text-[20px]">
            Audited smart contracts (link to audit reports)
          </h5>
          <div className="items-start">
            <button className="relative inline-flex h-[35px] w-[120px] items-center justify-center rounded-full bg-gradient-to-b from-custom-blue1 to-custom-purple1 p-px text-[10px] md:w-[130px] lg:w-[130px] xl:w-[150px] xl:text-[12px] 2xl:w-[150px] 2xl:text-[12px]">
              <span className="absolute inset-[1px] flex items-center justify-center rounded-full bg-four-color-gradient p-2 text-center font-inter text-white transition-all duration-300 ease-in-out hover:opacity-80">
                View Tokenomics
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
        <div className="flex h-[110px] w-[150px] flex-col rounded-lg bg-custom-purple2 p-2 font-darkgrotesque md:h-[130px] md:w-[300px] md:p-5 lg:w-[230px] xl:w-[300px] 2xl:w-[300px]">
          <h5 className="mb-3 text-left text-[14px] font-bold leading-tight text-white md:text-[20px]">
            KYC-compliant where <br /> required
          </h5>
          <div className="items-start">
            <button className="relative inline-flex h-[35px] w-[120px] items-center justify-center rounded-full bg-gradient-to-b from-custom-blue1 to-custom-purple1 p-px text-[10px] md:w-[130px] lg:w-[130px] xl:w-[150px] xl:text-[12px] 2xl:w-[150px] 2xl:text-[12px]">
              <span className="absolute inset-[1px] flex items-center justify-center rounded-full bg-four-color-gradient p-2 text-center font-inter text-white transition-all duration-300 ease-in-out hover:opacity-80">
                View Tokenomics
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
        <div className="flex h-[110px] w-[150px] flex-col rounded-lg bg-custom-purple2 p-2 font-darkgrotesque md:h-[130px] md:w-[300px] md:p-5 lg:w-[230px] xl:w-[300px] 2xl:w-[300px]">
          <h5 className="mb-3 text-left text-[14px] font-bold leading-tight text-white md:text-[20px]">
            Transparent public ledger{" "}
            <span className="hidden md:inline lg:hidden xl:inline 2xl:inline">
              <br />
            </span>
            access
          </h5>

          <div className="items-start">
            <button className="relative inline-flex h-[35px] w-[120px] items-center justify-center rounded-full bg-gradient-to-b from-custom-blue1 to-custom-purple1 p-px text-[10px] md:w-[130px] lg:w-[130px] xl:w-[150px] xl:text-[12px] 2xl:w-[150px] 2xl:text-[12px]">
              <span className="absolute inset-[1px] flex items-center justify-center rounded-full bg-four-color-gradient p-2 text-center font-inter text-white transition-all duration-300 ease-in-out hover:opacity-80">
                View Tokenomics
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
        <div className="flex h-[110px] w-[150px] flex-col rounded-lg bg-custom-purple2 p-2 font-darkgrotesque md:h-[130px] md:w-[300px] md:p-5 lg:w-[230px] xl:w-[300px] 2xl:w-[300px]">
          <h5 className="mb-3 text-left text-[14px] font-bold leading-tight text-white md:text-[20px]">
            Transparent public ledger{" "}
            <span className="hidden md:inline lg:hidden xl:inline 2xl:inline">
              <br />
            </span>
            access
          </h5>

          <div className="items-start">
            <button className="relative inline-flex h-[35px] w-[120px] items-center justify-center rounded-full bg-gradient-to-b from-custom-blue1 to-custom-purple1 p-px text-[10px] md:w-[130px] lg:w-[130px] xl:w-[150px] xl:text-[12px] 2xl:w-[150px] 2xl:text-[12px]">
              <span className="absolute inset-[1px] flex items-center justify-center rounded-full bg-four-color-gradient p-2 text-center font-inter text-white transition-all duration-300 ease-in-out hover:opacity-80">
                View Tokenomics
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
      </div>
    </div>
  );
};

export default DigitalworldBox;
