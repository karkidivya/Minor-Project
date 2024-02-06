import type { NextPage } from "next";

const CallToActionFrame: NextPage = () => {
  return (
    <div className="flex-1 flex flex-col items-start justify-start gap-[32px] text-left text-base text-text2 font-title-16px-medium mq450:gap-[32px]">
      <div className="w-[262px] flex flex-col items-start justify-start gap-[24px]">
        <div className="flex flex-row items-center justify-start gap-[16px]">
          <img
            className="w-10 relative rounded-12xl h-10 overflow-hidden shrink-0"
            alt=""
            src="/iconsphone.svg"
          />
          <div className="relative leading-[24px] font-medium">Call To Us</div>
        </div>
        <div className="self-stretch flex flex-col items-start justify-start gap-[16px] text-sm font-roboto">
          <div className="self-stretch relative leading-[21px]">
            We are available 24/7, 7 days a week.
          </div>
          <div className="relative leading-[21px]">Phone: +977-9812397390</div>
        </div>
      </div>
      <img
        className="self-stretch h-px relative max-w-full overflow-hidden shrink-0"
        loading="eager"
        alt=""
        src="/underline.svg"
      />
      <div className="w-[250px] flex flex-col items-start justify-start gap-[24px]">
        <div className="flex flex-row items-center justify-start gap-[16px]">
          <img
            className="h-10 w-10 relative rounded-24xl overflow-hidden shrink-0"
            loading="eager"
            alt=""
            src="/iconsmail.svg"
          />
          <div className="relative leading-[24px] font-medium">Write To US</div>
        </div>
        <div className="self-stretch flex flex-col items-start justify-start gap-[16px] text-sm font-roboto">
          <div className="self-stretch h-[42px] relative leading-[21px] inline-block">
            Fill out our form and we will contact you within 24 hours.
          </div>
          <div className="relative leading-[21px]">
            Emails: customer@kaamsewa.com
          </div>
          <div className="relative leading-[21px]">
            Emails: support@kaamsewa.com
          </div>
        </div>
      </div>
    </div>
  );
};

export default CallToActionFrame