import type { NextPage } from "next";

const BottomTxt: NextPage = () => {
  return (
    <div className="self-stretch bg-primary-blue overflow-hidden flex flex-col items-center justify-center py-[23px] px-5 box-border max-w-full text-left text-base text-primary font-roboto">
      <div className="w-[941.3px] flex flex-row items-center justify-between gap-[20px] max-w-full mq700:flex-wrap">
        <div className="flex flex-row items-center justify-start gap-[26px]">
          <a href="">
            <img
              className="h-6 w-[24.4px] relative overflow-hidden shrink-0 min-h-[24px]"
              loading="eager"
              alt=""
              src="/mdiinstagram.svg"
            />

          </a>
          <a href="">
            <img
              className="h-6 w-[24.4px] relative overflow-hidden shrink-0 min-h-[24px]"
              loading="eager"
              alt=""
              src="/icsharpfacebook.svg"
            />
          </a>
          <a href="">
            <img
              className="h-[17px] w-[21.4px] relative"
              loading="eager"
              alt=""
              src="/vector.svg"
            />
          </a>
          <a href="">
            <img
              className="h-[18px] w-[18px] relative"
              alt=""
              src="/vector-1.svg"
            />
          </a>
        </div>
        <div className="relative tracking-[0.03em] font-medium inline-block max-w-full">
          © 2023 KaamSewa Technologies- All rights reserved
        </div>
      </div>
    </div>
  );
};

export default BottomTxt;