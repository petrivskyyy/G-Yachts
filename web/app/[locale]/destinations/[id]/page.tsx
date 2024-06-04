import dynamic from "next/dynamic";
import Bar from "@/components/nav/bar";
import Hero from "@/components/destination/hero";
import { DestinationProvider } from "@/context/destination";
import { fetchDestination } from "@/actions/destinations";
import Details from "@/components/destination/details";
import { IDestination } from "@/types/destination";

const View = dynamic(() => import("@/components/view"));
const Newsletter = dynamic(() => import("@/components/newsletter"));
const Footer = dynamic(() => import("@/components/footer"));
const ChartersInDestination = dynamic(() => import("@/components/destination/featured/section"));

const Destinations = async ({
  params,
}: {
  params: {
    id: string;
  };
}) => {
  const destination: IDestination = await fetchDestination(params.id);
  return (
    <DestinationProvider destination={destination}>
      <main className="w-full flex flex-col justify-start items-center">
        <Bar dynamicColor={100} />
        <View />
        <Hero />
        <Details />
        <ChartersInDestination destination={destination} />
        <Newsletter />
        <Footer />
      </main>
    </DestinationProvider>
  );
};

export default Destinations;