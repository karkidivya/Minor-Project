import type { NextPage } from "next";
import Search from "./Search";

const CompareProviders: NextPage = () => {
  return (
    <section className="self-stretch flex flex-row items-start justify-start pt-0 pb-[11px] pr-px pl-0 box-border max-w-full text-left text-6xl text-primary font-georgia">
      <div className="flex-1 bg-darkslateblue flex flex-col items-center justify-start py-[39px] pr-[21px] pl-5 box-border gap-[17px] max-w-full">
        <h3 className="m-0 relative text-inherit tracking-[0.03em] font-bold font-inherit mq450:text-xl">
          How It Works
        </h3>
        <div className="w-[1200px] flex flex-row items-start justify-between py-0 pr-[3px] pl-0 box-border gap-[20px] max-w-full text-justify text-mid font-roboto mq925:flex-wrap">
          <Search
            ellipse2="/ellipse-2@2x.png"
            search="Search"
            tellUsWhatServiceYouNeedA="Tell us what service you need, and we'll show you a list of qualified professionals in your area"
          />
          <Search
            ellipse2="/ellipse-3@2x.png"
            search="Compare"
            tellUsWhatServiceYouNeedA="Compare service providers based on ratings, reviews, and pricing to make an informed decision"
          />
          <Search
            ellipse2="/ellipse-4@2x.png"
            search="Book"
            tellUsWhatServiceYouNeedA="Book your chosen professional right through our platform and set the appointment at your convenience"
          />
          <Search
            ellipse2="/ellipse-5@2x.png"
            search="Enjoy"
            tellUsWhatServiceYouNeedA="Sit back, relax, and let the expert take care of your home service needs"
          />
        </div>
      </div>
    </section>
  );
};

export default CompareProviders;