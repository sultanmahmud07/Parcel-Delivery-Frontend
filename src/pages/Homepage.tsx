import About from "@/components/modules/HomePage/About/About";
import Banner from "@/components/modules/HomePage/Banner";
import FAQ from "@/components/modules/HomePage/FAQ/FAQ";
import OurAchievement from "@/components/modules/HomePage/OurAchivment/OurAchivment";

export default function Homepage() {
  return (
    <div>
      <Banner></Banner>
      <About></About>
      <OurAchievement></OurAchievement>
      <FAQ></FAQ>
    </div>
  );
}
