import type { NextPage } from "next";

type SearchType = {
  ellipse2?: string;
  search?: string;
  tellUsWhatServiceYouNeedA?: string;
};

const Search: NextPage<SearchType> = ({
  ellipse2,
  search,
  tellUsWhatServiceYouNeedA,
}) => {
  return (
    <div className="w-[300px] flex flex-col items-center justify-start text-justify text-mid text-primary font-roboto">
      <img
        className="w-32 h-[113px] relative rounded-[50%] object-cover"
        loading="eager"
        alt=""
        src={ellipse2}
      />
      <b className="leading-[31px] text-5xl">{search}</b>
      <div className="self-stretch relative text-md leading-[20px] text-center">
        {tellUsWhatServiceYouNeedA}
      </div>
    </div>
  );
};

export default Search;