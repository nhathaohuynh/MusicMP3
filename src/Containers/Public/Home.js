import React from "react";
import {
  Slider,
  Section,
  ChartSection,
  NewRelease,
  Artist,
} from "../../components";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { v4 as uuiv4 } from "uuid";

export default function Home() {
  const {
    friday,
    autoTheme2,
    xnone,
    top100,
    nhacmoi,
    weekChart,
    favouriteSinger,
    artistSpotlight,
  } = useSelector((state) => state.app);
  console.log(artistSpotlight);
  // console.log(weekChart);

  // console.log(friday, autoTheme2);
  return (
    <div className="h-full w-full z-10">
      <Slider></Slider>
      <Section data={friday}></Section>
      <Section data={favouriteSinger}></Section>
      <ChartSection></ChartSection>
      <div className=" grid grid-cols-3 px-[46px] mt-12">
        {weekChart?.map((item) => (
          <Link
            to={item?.link.split(".")[0]}
            key={item?.link}
            className="flex-1 px-4"
          >
            <img
              src={item?.cover}
              alt="cover"
              className="w-full object-fill rounded-md"
            />
          </Link>
        ))}
      </div>
      <div className="grid grid-cols-5 overflow-x-auto overscroll-contain gap-3 px-[48px] mt-[48px]">
        {artistSpotlight?.length &&
          artistSpotlight?.map((artist, index) => {
            if (index > 4) return;

            return <Artist artist={artist} key={uuiv4()}></Artist>;
          })}
      </div>
      <Section data={autoTheme2}></Section>
      <Section data={top100}></Section>
      <NewRelease></NewRelease>
      <Section data={xnone}></Section>
      <Section data={nhacmoi}></Section>
      {/* <div className="w-full h-[500px]"></div> */}
    </div>
  );
}
