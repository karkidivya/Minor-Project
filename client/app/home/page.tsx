'use client'
import type { NextPage } from "next";
import { useCallback } from "react";
import { Button } from "@mui/material";
import CompareProviders from "../components/CompareProviders";
import CallToActionFrame from "../components/CallToActionFrame";
import FooterMainFrame from "../components/FooterMainFrame";
import FooterMain from "../components/FooterMain";
import BottomTxt from "../components/BottomTxt";

const LandingPage: NextPage = () => {
  const onButtonViewAllProductsClick = useCallback(() => {
    // Please sync "HomePage" to the project
  }, []);

  const onGetStartedTextClick = useCallback(() => {
    // Please sync "HomePage" to the project
  }, []);

  return (
    <div className="w-full relative bg-primary overflow-hidden flex flex-col items-center justify-start tracking-[normal] text-left text-base text-primary font-inter">
      <div className="self-stretch flex flex-row items-start justify-start pt-0 px-0 pb-[39px] box-border max-w-full">
        <div className="flex-1 [background:linear-gradient(rgba(0,_0,_0,_0.1),_rgba(0,_0,_0,_0.1)),_#f53838] overflow-hidden flex flex-col items-center justify-start py-2 px-5 box-border max-w-full">
          <div className="w-[677px] flex flex-row items-center justify-between gap-[20px] max-w-full mq700:flex-wrap">
            <div className="relative tracking-[0.03em] uppercase font-medium whitespace-pre-wrap">
              🎉Become Pro and Get Hired🥳
            </div>
            <div className="rounded-tl-none rounded-tr-8xs rounded-br-8xs rounded-bl-none bg-primary overflow-hidden flex flex-col items-center justify-center py-0.5 px-3.5 whitespace-nowrap text-text2">
              <div className="relative tracking-[0.03em] font-medium">
                Coming Soon
              </div>
            </div>
          </div>
        </div>
      </div>
      <header className="w-[994px] h-[99px] flex flex-row items-start justify-start py-0 pr-[26px] pl-5 box-border max-w-full text-left text-base text-gray-200 font-roboto">
        <div className="flex-1 flex flex-row items-center justify-between gap-[20px] max-w-full">
          <img
            className="h-[60px] w-[60px] relative rounded-[50%] object-cover cursor-pointer"
            loading="eager"
            alt=""
            src="/ellipse-1@2x.png"
            onClick={onButtonViewAllProductsClick}
          />
          <div className="h-11 flex flex-row items-center justify-start gap-[28px] max-w-full mq700:hidden">
            <div className="flex flex-row items-center justify-center pt-0 pb-0.5 pr-0.5 pl-0">
              <div className="relative tracking-[0.03em] font-extrabold">
                Home
              </div>
            </div>
            <div className="flex flex-row items-center justify-center pt-0 pb-0.5 pr-px pl-0">
              <div className="relative tracking-[0.03em] font-extrabold whitespace-nowrap">
                Customer Service
              </div>
            </div>
            <div className="flex flex-row items-center justify-center pt-0 pb-0.5 pr-px pl-0">
              <div className="relative tracking-[0.03em] font-extrabold">
                About
              </div>
            </div>
            <Button
              className="self-stretch w-[116.5px]"
              disableElevation={true}
              variant="contained"
              sx={{
                textTransform: "none",
                color: "#fbfffe",
                fontSize: "16",
                background: "#4278f0",
                borderRadius: "0px 0px 0px 0px",
                "&:hover": { background: "#4278f0" },
                width: 117,
              }}
            >
              Register
            </Button>
          </div>
        </div>
      </header>
      <section style={{background: "url('/360-f-323151985-olkiwe9gf7p9qnvhu9v1dldoz3ofqrr4-1@2x.png')"}} className="self-stretch relative flex flex-col items-start justify-start pt-[190px] px-[74px] pb-[154px] box-border gap-[24px] bg-[url('/hero-section-1@3x.png')] bg-no-repeat bg-[top] max-w-full text-left text-[36px] text-gray-100 font-roboto mq450:pt-[110px] mq450:pb-[55px] mq450:box-border mq925:pl-[37px] mq925:pr-[37px] mq925:box-border bg-cover">
        <h1 className="m-0 h-[84px] relative text-inherit tracking-[0.07em] font-bold font-inherit inline-block max-w-full z-[1] mq450:text-[22px] mq925:text-[29px]">
          <p className="m-0">Your Ideal Lifestyle, Our Expertise</p>
          <p className="m-0">Elevate Your Everyday</p>
        </h1>
        <div className="w-[612px] flex flex-row items-start justify-center max-w-full">
          <div
            className="w-[180px] flex flex-row items-center justify-center p-2.5 box-border cursor-pointer z-[1]"
            onClick={onGetStartedTextClick}
          >
            <Button
              className="h-[43px] flex-1"
              disableElevation={true}
              variant="contained"
              sx={{
                textTransform: "none",
                color: "#fbfffe",
                fontSize: "16",
                background: "#4278f0",
                borderRadius: "16px",
                "&:hover": { background: "#4278f0" },
                height: 43,
              }}
            >
              Get Started
            </Button>
          </div>
        </div>
      </section>
      <CompareProviders />
      <section className="self-stretch flex flex-row items-start justify-start pt-0 px-0 pb-[11px] box-border max-w-full text-center text-13xl text-gray-300 font-roboto">
        <div className="flex-1 bg-primary flex flex-row items-center justify-center p-2.5 box-border max-w-full">
          <div className="w-[987px] flex flex-col items-start justify-start py-[34px] px-5 box-border gap-[21px] max-w-full mq700:pt-[22px] mq700:pb-[22px] mq700:box-border">
            <h1 className="m-0 self-stretch relative text-inherit tracking-[0.03em] font-normal font-inherit mq450:text-lgi mq925:text-7xl">
              <span>About</span>
              <span className="text-primary-blue">{` `}</span>
              <span>Us</span>
            </h1>
            <div className="self-stretch flex flex-row items-center justify-center gap-[17px] max-w-full text-mid text-text2 mq925:flex-wrap">
              <img
                className="h-[395px] flex-1 relative rounded-[111px] max-w-full overflow-hidden object-cover min-w-[317px]"
                loading="eager"
                alt=""
                src="/aboutusimg@2x.png"
              />
              <div className="h-[289px] w-[443px] relative tracking-[0.04em] leading-[31px] font-medium inline-block shrink-0 min-w-[443px] max-w-full mq700:min-w-full mq925:flex-1">
                <p className="[margin-block-start:0] [margin-block-end:5px]">
                  <span className="text-text2">{`Welcome to `}</span>
                  <span className="text-primary-blue">KaamSewa</span>
                  <span>
                    , your trusted partner in simplifying your home services
                    needs.
                  </span>
                </p>
                <p className="[margin-block-start:0] [margin-block-end:5px]">
                  &nbsp;
                </p>
                <p className="m-0">
                  <span>{`At `}</span>
                  <span className="text-primary-blue">KaamSewa</span>
                  <span>
                    , we understand that managing your home services can be a
                    daunting task. Whether you need a plumber, electrician,
                    cleaner, or any other home service provider, finding the
                    right professional for the job should be convenient and
                    stress-free. That's where we come in.
                  </span>
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="self-stretch flex flex-row items-start justify-start pt-0 px-0 pb-[35px] box-border max-w-full text-center text-13xl text-gray-300 font-roboto">
        <div className="flex-1 bg-whitesmoke flex flex-row items-center justify-center p-2.5 box-border max-w-full">
          <div className="w-[1004px] flex flex-col items-start justify-start py-[33px] px-5 box-border gap-[49px] max-w-full mq700:gap-[49px] mq700:pt-[21px] mq700:pb-[21px] mq700:box-border">
            <h1 className="m-0 self-stretch h-[38px] relative text-inherit tracking-[0.03em] font-normal font-inherit inline-block mq450:text-lgi mq925:text-7xl">
              <span>Our</span>
              <span className="text-tomato">{` `}</span>
              <span className="text-text2">Mission</span>
            </h1>
            <div className="self-stretch flex flex-row items-start justify-between gap-[20px] max-w-full text-mid text-text2 mq925:flex-wrap mq925:justify-center">
              <div className="h-[295px] w-[386px] relative tracking-[0.04em] leading-[31px] font-medium inline-block shrink-0 min-w-[386px] max-w-full mq700:min-w-full mq925:flex-1">
                Our mission is to connect homeowners with reliable and skilled
                service providers in the most effortless and efficient way
                possible. We aim to transform the way you approach home
                maintenance and improvement by offering a comprehensive,
                user-friendly platform that caters to all your service
                requirements.
              </div>
              <img
                className="w-[470px] relative rounded-[123px] max-h-full object-cover max-w-full mq925:flex-1"
                loading="eager"
                alt=""
                src="/mission-1@2x.png"
              />
            </div>
          </div>
        </div>
      </section>
      <div className="self-stretch flex flex-row items-start justify-start pt-0 px-0 pb-[23px] box-border max-w-full text-center text-13xl text-gray-300 font-roboto">
        <h1 className="m-0 h-[38px] flex-1 relative text-inherit tracking-[0.03em] font-normal font-inherit inline-block max-w-full mq450:text-lgi mq925:text-7xl">
          <span>Contact</span>
          <span className="text-primary-blue">{` `}</span>
          <span>Us</span>
        </h1>
      </div>
      <section className="w-[1094px] flex flex-row items-start justify-center py-0 px-5 box-border gap-[30px] min-h-[492px] max-w-full mq925:flex-wrap">
        <div className="h-[457px] w-[340px] rounded bg-primary shadow-[0px_1px_13px_rgba(0,_0,_0,_0.05)] overflow-hidden shrink-0 flex flex-row items-start justify-center py-10 px-[35px] box-border min-w-[340px] max-w-full mq450:pt-[26px] mq450:pb-[26px] mq450:box-border mq450:min-w-full mq925:flex-1">
          <CallToActionFrame />
        </div>
        <FooterMainFrame />
      </section>
      <footer className="self-stretch flex flex-col items-start justify-start max-w-full">
        <FooterMain />
        <BottomTxt />
      </footer>
    </div>
  );
};

export default LandingPage;