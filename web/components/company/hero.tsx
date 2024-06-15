import React from "react";
import { useTranslations } from "next-intl";
import herox from "@/public/imagery/optimized/index/herox.webp";
import Image from "next/image";

const Hero = () => {
  const t = useTranslations("company.hero");
  return (
    <div className="h-full md:h-screen w-full overflow-hidden">
      <div className="grid md:grid-cols-2">
        <div className={"bg-rock-100"}>
          <div className={"py-[18vw] px-[10vw]"}>
            <h4 className={"text-black font-classic"}>{t("subtitle")}</h4>
            <h1>
              {t.rich("title", {
                classic: (chunks) => (
                    <span className={"font-classic font-normal uppercase"}>
                    <br className={"hidden lg:block"}/>
                      {chunks}
                  </span>
                ),
              })}
            </h1>
            <p
                className={
                  "md:w-[30vw] w-[80vw] md:py-[2vw] font-classic font-light text-justify"
                }
            >
              {t("description")}
            </p>
          </div>
        </div>
        <Image src={herox} alt={"Yacht"} className={"object-cover md:h-screen"}/>
      </div>
    </div>
  );
};

export default Hero;
