import Image from "next/image";
import { useTranslations } from "next-intl";
import React from "react";
import first from "@/public/imagery/optimized/company/first.webp";
import second from "@/public/imagery/optimized/company/second.webp";
import third from "@/public/imagery/optimized/company/third.webp";
import fourth from "@/public/imagery/optimized/company/fourth.webp";
import gaspard from "@/public/imagery/optimized/company/Gaspard.webp";

const Story = () => {
  const t = useTranslations("company.story");
  return (
    <section className={"h-full w-full overflow-hidden bg-rock-100"}>
      <h1 className={"py-[5vw] pl-[10vw]"}>
        {t.rich("header.title", {
          classic: (chunks) => (
            <span className={"font-classic font-normal uppercase"}>
              {chunks}
            </span>
          ),
        })}
      </h1>
      <ul className="timeline timeline-snap-icon max-md:timeline-compact timeline-vertical pb-[8vw]">
        <li className={""}>
          <div className="timeline-start md:text-end mb-10 md:w-[25vw] w-[90vw] text-justify text-rock-500 px-[1vw]">
            <time className="font-normal text-5xl text-black">1975</time>
            <div className="text-lg font-normal text-black">
              {t("content.first.title")}
            </div>
            {t("content.first.text")}
          </div>
          <Image
            src={first}
            alt={"Cannes nautic office"}
            className={"timeline-end md:w-[35vw] w-[90vw] px-[1vw]"}
          />
          <hr className={"bg-rock-300"} />
        </li>
        <li>
          <div className="timeline-end mb-10 md:w-[25vw] w-[90vw] text-justify text-rock-500 px-[1vw]">
            <time className="font-normal text-5xl text-black">1981</time>
            <div className="text-lg font-normal text-black">
              {t("content.second.title")}
            </div>
            {t("content.second.text")}
          </div>
          <hr className={"bg-rock-300"} />
          <Image
            src={second}
            alt={"Cannes nautic office"}
            className={"timeline-start md:w-[35vw] w-[90vw] px-[1vw]"}
          />
          <hr className={"bg-rock-300"} />
        </li>
        <li>
          <hr className={"bg-rock-300"} />
          <div className="timeline-start md:text-end mb-10 md:w-[25vw] w-[90vw] text-justify text-rock-500 px-[1vw]">
            <time className="font-normal text-5xl text-black">1999</time>
            <div className="text-lg font-normal text-black">
              {t("content.third.title")}
            </div>
            {t("content.third.text")}
          </div>
          <Image
            src={third}
            alt={"Cannes nautic office"}
            className={"timeline-end md:w-[35vw] w-[90vw] px-[1vw]"}
          />
          <hr className={"bg-rock-300"} />
        </li>
        <li>
          <hr className={"bg-rock-300"} />
          <div className="timeline-end mb-10 md:w-[25vw] w-[90vw] text-justify text-rock-500 px-[1vw]">
            <time className="font-normal text-5xl text-black">2016</time>
            <div className="text-lg font-normal text-black">
              {t("content.fourth.title")}
            </div>
            {t("content.fourth.text")}
          </div>
          <Image
            src={fourth}
            alt={"G-Yachts office"}
            className={"timeline-start md:w-[35vw] w-[90vw] px-[1vw]"}
          />
          <hr className={"bg-rock-300"} />
        </li>
      </ul>
      <div className={"flex flex-col"}>
        <p
          className={
            "font-slick font-light md:text-4xl text-xl px-[10vw] text-justify"
          }
        >
          {t("content.citation")}
        </p>
        <div className={"flex pt-10 px-[10vw] justify-start items-center"}>
          <Image
            src={gaspard}
            alt={"Gaspard MILAZZO, CEO of G-Yachts"}
            className={"md:w-[5vw] w-[20vw] rounded-full"}
          />
          <div className={"ml-[1vw]"}>
            <h2 className={"md:text-2xl text-xl font-medium"}>
              Gaspard MILAZZO
            </h2>
            <h2 className={"md:text-2xl text-xl"}>{t("content.signature")}</h2>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Story;