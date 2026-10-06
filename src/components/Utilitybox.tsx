import React from "react";
import Utilitypurple from "../assets/images/utilitpurple.webp";
import Utilitypurplemobile from "../assets/images/utilitpurplemobile.webp";

const UtilityBox: React.FC = () => {
  return (
    <div>
      <div className="hidden w-full grid-cols-[47%_1fr_1.5fr_1fr] gap-0 px-2 py-3 lg:grid">
        <div className="flex items-center">
          <span className="font-darkgrotesque text-[40px] font-bold leading-none text-white sm:text-[50px] md:text-[500px] lg:text-[50px] xl:text-[60px] 2xl:text-[70px]">
            Real Utility,Real <br />{" "}
            <span className="inline-block bg-gradient-to-t from-custom-purple1 to-custom-white1 bg-clip-text text-transparent">
              {" "}
              Value
            </span>{" "}
            <p className="py-4 font-darkgrotesque text-white lg:text-[11px] xl:text-[13px] 2xl:text-[13px]">
              Built for speed, transparency, and real-world utility. Unlock exclusive access,
              features,
              <br /> and benefits across our ecosystem with $Toko.
            </p>
          </span>
        </div>

        <div className="">
          <div className="grid w-full grid-cols-1 justify-items-center gap-1 px-2 pb-2 pt-3 xl:gap-6">
            <div className="flex h-[98px] flex-col justify-between rounded-lg bg-custom-purple2 p-3 font-dmsans lg:w-[130px] xl:h-[110px] xl:w-[200px] 2xl:w-[210px]">
              <div>
                <h5 className="mb-3 text-left text-[9px] leading-none text-white lg:font-bold xl:text-[16px] xl:font-semibold 2xl:text-[16px]">
                  Access Pass
                </h5>
                <p className="mb-2 pr-4 text-center text-[8px] leading-none text-white lg:text-left lg:text-[9px] xl:pr-8 xl:text-[12px] 2xl:pr-8 2xl:text-[12px]">
                  Unlock premium features or gated platforms.
                </p>
              </div>
            </div>

            <div className="flex h-[98px] flex-col justify-between rounded-lg bg-custom-purple2 p-3 font-dmsans lg:w-[130px] xl:h-[110px] xl:w-[200px] 2xl:w-[210px]">
              <div>
                <h5 className="mb-3 text-center text-[9px] leading-none text-white lg:text-left lg:font-bold xl:text-[16px] xl:font-semibold 2xl:text-[16px]">
                  Staking Rewards
                </h5>
                <p className="mb-2 pr-3 text-center text-[8px] leading-none text-white lg:text-left lg:text-[9px] xl:pr-5 xl:text-[12px] 2xl:text-[12px]">
                  Earn passive income through DeFi staking.
                </p>
              </div>
            </div>

            <div className="flex h-[98px] flex-col justify-between rounded-lg bg-custom-purple2 p-3 font-dmsans lg:w-[130px] xl:h-[110px] xl:w-[200px] 2xl:w-[210px]">
              <div>
                <h5 className="mb-3 text-center text-[9px] leading-none text-white lg:text-left lg:font-bold xl:text-[16px] xl:font-semibold 2xl:text-[16px]">
                  Governance
                </h5>
                <p className="mb-2 pr-3 text-center font-worksans text-[8px] leading-none text-white lg:text-left lg:text-[9px] xl:pr-5 xl:text-[12px] 2xl:text-[12px]">
                  Vote on proposals that shape the project.
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="w-full">
          <img
            src={Utilitypurple}
            alt="bg"
            className="h-full w-full scale-95 lg:object-fill xl:object-cover xl:px-2"
          />
        </div>
        <div className="">
          <div className="grid w-full grid-cols-1 justify-items-center gap-1 px-2 pb-2 pt-3 xl:gap-6">
            <div className="flex h-[98px] flex-col justify-between rounded-lg bg-custom-purple2 p-3 font-dmsans lg:w-[130px] xl:h-[110px] xl:w-[200px] 2xl:w-[210px]">
              <div>
                <h5 className="mb-3 text-left text-[9px] leading-none text-white lg:font-bold xl:text-[16px] xl:font-semibold 2xl:text-[16px]">
                  Marketplace Currency
                </h5>
                <p className="mb-2 pr-4 text-center text-[8px] leading-none text-white lg:text-left lg:text-[9px] xl:pr-8 xl:text-[12px] 2xl:pr-8 2xl:text-[12px]">
                  Spend $[TokenName] on exclusive assets, NFTs, and services.
                </p>
              </div>
            </div>

            <div className="flex h-[98px] flex-col justify-between rounded-lg bg-custom-purple2 p-3 font-dmsans lg:w-[130px] xl:h-[110px] xl:w-[200px] 2xl:w-[210px]">
              <div>
                <h5 className="mb-3 text-center text-[9px] leading-none text-white lg:text-left lg:font-bold xl:text-[16px] xl:font-semibold 2xl:text-[16px]">
                  Loyalty Incentives
                </h5>
                <p className="mb-2 pr-3 text-center text-[8px] leading-none text-white lg:text-left lg:text-[9px] xl:pr-5 xl:text-[12px] 2xl:text-[12px]">
                  Earn rewards through referrals, usage, and events.
                </p>
              </div>
            </div>

            <div className="flex h-[98px] flex-col justify-between rounded-lg bg-custom-purple2 p-3 font-dmsans lg:w-[130px] xl:h-[110px] xl:w-[200px] 2xl:w-[210px]">
              <div>
                <h5 className="mb-3 text-center text-[9px] leading-none text-white lg:text-left lg:font-bold xl:text-[16px] xl:font-semibold 2xl:text-[16px]">
                  Burn Mechanism
                </h5>
                <p className="mb-2 pr-3 text-center font-worksans text-[8px] leading-none text-white lg:text-left lg:text-[9px] xl:pr-5 xl:text-[12px] 2xl:text-[12px]">
                  X% of fees burned to maintain scarcity
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="flex justify-center text-center leading-none lg:hidden">
        <span className="font-darkgrotesque text-[40px] font-bold text-white md:text-[55px]">
          Real Utility,Real <br />{" "}
          <span className="inline-block bg-gradient-to-t from-custom-purple1 to-custom-white1 bg-clip-text text-transparent">
            {" "}
            Value
          </span>{" "}
        </span>
      </div>
      <div className="grid grid-cols-2 gap-4 px-5 pt-5 lg:hidden">
        <div className="rounded-xl bg-custom-purple2 p-2 md:p-8">
          <div>
            <h5 className="mb-3 text-left text-[13px] font-bold text-white md:text-[16px]">
              Access Pass
            </h5>
            <p className="mb-2 text-left text-[10px] leading-none text-white md:text-[12px]">
              Unlock premium features or gated platforms.
            </p>
          </div>
        </div>

        <div className="rounded-xl bg-custom-purple2 p-2 md:p-8">
          <div>
            <h5 className="mb-3 text-left text-[13px] font-bold text-white md:text-[16px]">
              Marketplace Currency
            </h5>
            <p className="mb-2 text-left text-[10px] leading-none text-white md:text-[12px]">
              Spend $[TokenName] on exclusive assets, NFTs
            </p>
          </div>
        </div>
        <div className="rounded-xl bg-custom-purple2 p-2 md:p-8">
          <div>
            <h5 className="mb-3 text-left text-[13px] font-bold text-white md:text-[16px]">
              Staking Rewards
            </h5>
            <p className="mb-2 text-left text-[10px] leading-none text-white md:text-[12px]">
              Earn passive income through DeFi staking.
            </p>
          </div>
        </div>
        <div className="rounded-xl bg-custom-purple2 p-2 md:p-8">
          <div>
            <h5 className="mb-3 text-left text-[13px] font-bold text-white md:text-[16px]">
              Loyalty Incentives
            </h5>
            <p className="mb-2 text-left text-[10px] leading-none text-white md:text-[12px]">
              Earn rewards through referrals, usage, and events.
            </p>
          </div>
        </div>
        <div className="rounded-xl bg-custom-purple2 p-2 md:p-8">
          <div>
            <h5 className="mb-3 text-left text-[13px] font-bold text-white md:text-[16px]">
              Governance
            </h5>
            <p className="mb-2 text-left text-[10px] leading-none text-white md:text-[12px]">
              Vote on proposals that shape the project.
            </p>
          </div>
        </div>
        <div className="rounded-xl bg-custom-purple2 p-2 md:p-8">
          <div>
            <h5 className="mb-3 text-left text-[13px] font-bold text-white md:text-[16px]">
              Burn Mechanism
            </h5>
            <p className="mb-2 text-left text-[10px] leading-none text-white md:text-[12px]">
              X% of fees burned to maintain scarcity
            </p>
          </div>
        </div>
      </div>
      <div className="block w-full lg:hidden">
        <img src={Utilitypurplemobile} alt="bgmobile" className="h-full w-full object-cover p-8" />
      </div>
    </div>
  );
};

export default UtilityBox;
