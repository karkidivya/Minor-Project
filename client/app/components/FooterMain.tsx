import type { NextPage } from "next";

const FooterMain: NextPage = () => {
  return (
    <div className="self-stretch bg-whitesmoke overflow-hidden flex flex-col items-center justify-center py-[41px] px-5 box-border min-h-[296px] max-w-full text-left text-sm text-text2 font-roboto">
      <div className="w-[929px] flex flex-row items-start justify-between gap-[20px] max-w-full mq700:flex-wrap">
        <div className="w-[135.02px] flex flex-col items-start justify-start gap-[16px]">
          <h1 className="m-0 self-stretch h-[38px] relative text-13xl tracking-[0.03em] font-bold font-roboto-condensed text-primary-blue inline-block mq450:text-lgi mq925:text-7xl">
            About Us
          </h1>
          <div className="whitespace-pre-wrap">
            <a href="" className = "no-underline text-black">
              About KaamSewa
            </a>
          </div>
          <div>
            <a href="" className = "no-underline text-black">Our Team</a> 
          </div>
          <div>
            <a href="" className = "no-underline text-black">
              Partners
            </a>
          </div>
        </div>
        <div className="flex flex-col items-start justify-start gap-[16px]">
          <h1 className="m-0 relative text-13xl tracking-[0.03em] font-bold font-roboto-condensed text-primary-blue mq450:text-lgi mq925:text-7xl">
            Support
          </h1>
          <div className="whitespace-pre-wrap">
            <a href="" className = "no-underline text-black">
              About KaamSewa
            </a>
          </div>
          <div>
            <a href="" className = "no-underline text-black">Our Team</a> 
          </div>
          <div>
            <a href="" className = "no-underline text-black">
              Partners
            </a>
          </div>
        </div>
        <div className="flex flex-col items-center justify-start gap-[16px]">
          <h1 className="m-0 h-[38px] relative text-13xl tracking-[0.03em] font-bold font-roboto-condensed text-primary-blue inline-block mq450:text-lgi mq925:text-7xl">
            Contact
          </h1>
          <div className="relative whitespace-nowrap">support@kaamsewa.com</div>
          <div className="relative whitespace-nowrap">+977 9812345678</div>
          <div className="w-[54px] relative hidden">Partners</div>
        </div>
        <div className="h-[183px] w-44 flex flex-col items-center justify-start gap-[16px]">
          <h1 className="m-0 w-[169px] relative text-13xl tracking-[0.03em] font-bold font-roboto-condensed text-primary-blue inline-block mq450:text-lgi mq925:text-7xl">
            Get the App
          </h1>
          <div className="w-[115px] relative whitespace-pre-wrap hidden">
            About KaamSewa
          </div>
          <div className="w-[61px] relative hidden">Our Team</div>
          <img
            className="self-stretch flex-1 relative max-w-full overflow-hidden max-h-full object-cover"
            loading="eager"
            alt=""
            src="/screenshot-20231029-at-1048-2@2x.png"
          />
        </div>
      </div>
    </div>
  );
};

export default FooterMain;