import Bar from "@/components/nav/bar";
import dynamic from "next/dynamic";
import Hero from "@/components/recruitment/hero";

const View = dynamic(() => import("@/components/view"));
const Footer = dynamic(() => import("@/components/footer"));
const Newsletter = dynamic(() => import("@/components/newsletter"));

const Recruitment = () => {
  return (
    <main className="w-full flex flex-col justify-start items-center">
      <Bar dynamicColor={100} />
      <View />
      <Hero />
      <Newsletter />
      <Footer />
    </main>
  );
};

export default Recruitment;
