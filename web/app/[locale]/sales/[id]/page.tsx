import Bar from "@/components/nav/bar";
import dynamic from "next/dynamic";
import { fetchSale, fetchSimilarSales } from "@/actions/yachts";
import { YachtProvider } from "@/context/yacht";
import Hero from "@/components/yachts/yacht/hero";
import Details from "@/components/yachts/yacht/details";
import { getLocale, getTranslations } from "next-intl/server";
import { Metadata } from "next";
import { fetchMetadata } from "@/actions/actions";

const View = dynamic(() => import("@/components/view")),
  Carousel = dynamic(() => import("@/components/yachts/carousel")),
  Newsletter = dynamic(() => import("@/components/newsletter")),
  Footer = dynamic(() => import("@/components/footer"));

export const generateMetadata = async ({
  params,
}: {
  params: { id: string };
}): Promise<Metadata> => {
  const id = params.id,
    locale = (await getLocale()) as "en" | "fr";

  return await fetchMetadata({ id, type: "sale", locale });
};

const Sale = async ({ params }: { params: { id: string } }) => {
  const yacht = await fetchSale(params.id, (await getLocale()) as "en" | "fr");

  return (
    <YachtProvider data={yacht} type={"sale"}>
      <main className="w-full flex flex-col justify-start items-center">
        <Bar dynamicColor={100} />
        <View />
        <Hero />
        <Details />
        <Carousel
          title={(await getTranslations("sales")).rich("similar", {
            classic: (chunks) => (
              <span className={"font-classic uppercase"}>{chunks}</span>
            ),
          })}
          type={"sales"}
          data={await fetchSimilarSales(yacht.length)}
        />
        <Newsletter />
        <Footer />
      </main>
    </YachtProvider>
  );
};

export default Sale;
