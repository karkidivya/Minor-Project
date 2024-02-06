import type { NextPage } from "next";
import {
  TextField,
  Button,
} from "@mui/material";

const FooterMainFrame: NextPage = () => {

  return (
    <div className="flex-1 rounded bg-primary shadow-[0px_1px_13px_rgba(0,_0,_0,_0.05)] overflow-hidden flex flex-col items-center justify-start py-10 px-[31px] box-border gap-[32px] min-w-[445px] max-w-full text-left text-base text-gray-400 font-roboto mq450:pt-[26px] mq450:pb-[26px] mq450:box-border mq700:gap-[32px] mq700:min-w-full">
      <div className="self-stretch flex flex-row items-start justify-center py-0 pr-0.5 pl-0 gap-[15px] mq700:flex-wrap">
        <TextField
          className="[border:none] bg-[transparent] h-[50px] flex-1 relative font-roboto text-base min-w-[148px]"
          placeholder="Your Name *"
          variant="outlined"
          sx={{
            "& fieldset": { border: "none" },
            "& .MuiInputBase-root": {
              height: "50px",
              backgroundColor: "#f5f5f5",
              borderRadius: "0px 0px 0px 0px",
            },
          }}
        />
        <TextField
          className="[border:none] bg-[transparent] h-[50px] flex-1 font-roboto text-base min-w-[148px]"
          placeholder="Your Email *"
          variant="outlined"
          sx={{
            "& fieldset": { border: "none" },
            "& .MuiInputBase-root": {
              height: "50px",
              backgroundColor: "#f5f5f5",
              borderRadius: "0px 0px 0px 0px",
            },
          }}
        />
        <TextField
          className="[border:none] bg-[transparent] h-[50px] flex-1 relative font-roboto text-base min-w-[148px]"
          placeholder="Your Phone *"
          variant="outlined"
          sx={{
            "& fieldset": { border: "none" },
            "& .MuiInputBase-root": {
              height: "50px",
              backgroundColor: "#f5f5f5",
              borderRadius: "0px 0px 0px 0px",
            },
          }}
        />
      </div>
      <div className="self-stretch h-[207px] flex flex-col items-start justify-start py-[13px] px-4 box-border relative">
        <TextField
          className="[border:none] bg-[transparent] h-[50px] flex-1 relative font-roboto text-base min-w-[148px]"
          placeholder="Your Message*"
          variant="outlined"
          fullWidth
          
          sx={{
            "& fieldset": { border: "none"},
            "& .MuiInputBase-root": {
              // width: '100%',
              alignItems: 'start',
              height: "100%",
              backgroundColor: "#f5f5f5",
              borderRadius: "0px 0px 0px 0px",
            },
          }}
        />
        {/* <div className="relative leading-[24px] z-[1]">Your Massage</div> */}
      </div>
      <div className="self-stretch flex flex-row items-start justify-end">
        <Button
          className="h-14 w-[202px]"
          disableElevation={true}
          variant="contained"
          sx={{
            textTransform: "none",
            color: "#fafafa",
            fontSize: "16",
            background: "#4278f0",
            borderRadius: "4px",
            "&:hover": { background: "#4278f0" },
            width: 202,
            height: 56,
          }}
        >
          Send Massage
        </Button>
      </div>
    </div>
  );
};

export default FooterMainFrame;