export default function Thetoken() {
  return (
    <div className="w-full rounded-b-3xl bg-custom-black1">
      <div className="flex justify-center px-2 text-center font-darkgrotesque text-[40px] font-bold leading-none sm:text-[50px] md:px-3 md:text-[70px] lg:px-4 lg:text-[85px] xl:px-4 xl:text-[90px] 2xl:px-4 2xl:text-[90px]">
        <div className="text-center">
          <span className="text-shine">The Token That</span> <br />
          <span className="text-shine">Powers Your Digital </span>
          <br />
          <span className="text-shine-purple"> World</span>{" "}
        </div>
      </div>
      <div className="flex items-center justify-center px-3 font-darkgrotesque text-white">
        <p className="hidden text-center sm:block md:px-8 md:text-[14px] lg:px-3 xl:px-3 xl:text-[18px] 2xl:px-3">
          Built for speed, transparency, and real-world utility. Unlock exclusive access, features,
          and benefits across our ecosystem with $Toko.
        </p>
        <p className="block px-3 pt-2 text-center text-[16px] sm:hidden">
          Built for speed, transparency, and real-world utility. Unlock exclusive access, features,
          and benefits across our ecosystem with $Toko.
        </p>
      </div>
      <div className="flex flex-col items-center justify-center gap-6 p-10 font-inter font-normal md:flex-row">
        <button className="relative inline-flex h-[39px] w-[150px] items-center justify-center rounded-full bg-gradient-to-b from-custom-blue1 to-custom-purple1 p-px md:w-[80px] lg:w-[80px] xl:w-[100px] 2xl:w-[100px]">
          <span className="font-titillium absolute inset-[1px] flex items-center justify-center rounded-full bg-four-color-gradient p-2 text-center text-[12px] text-white transition-all duration-300 ease-in-out hover:opacity-80">
            Buy
            <svg
              className="ml-20 h-3 w-3 text-white md:ml-1"
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

        <button className="relative inline-flex h-[39px] w-[150px] items-center justify-center rounded-full bg-gradient-to-b from-custom-blue1 to-custom-purple1 p-px md:w-[150px] lg:w-[150px] xl:w-[180px] 2xl:w-[180px]">
          {/* <span className="absolute inset-0 w-[300px] rounded-full bg-gradient-to-r from-custom-blue1 to-custom-purple1 md:w-[50px] lg:w-[80px] xl:w-[100px] 2xl:w-[100px]"></span> */}
          <span className="font-titillium absolute inset-[1px] flex items-center justify-center rounded-full bg-four-color-gradient p-2 text-center text-[12px] text-white transition-all duration-300 ease-in-out hover:opacity-80">
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
        <button className="relative inline-flex h-[39px] w-[150px] items-center justify-center rounded-full bg-gradient-to-b from-custom-blue1 to-custom-purple1 p-px md:w-[150px] lg:w-[150px] xl:w-[180px] 2xl:w-[180px]">
          <span className="font-titillium absolute inset-[1px] flex items-center justify-center rounded-full bg-four-color-gradient p-2 text-center text-[12px] text-white transition-all duration-300 ease-in-out hover:opacity-80">
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
  );
}
