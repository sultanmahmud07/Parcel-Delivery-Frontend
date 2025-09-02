import About from "@/components/modules/HomePage/About/About";
import Banner from "@/components/modules/HomePage/Banner";
import FAQ from "@/components/modules/HomePage/FAQ/FAQ";
import OurAchievement from "@/components/modules/HomePage/OurAchivment/OurAchivment";
import OurPrice from "@/components/modules/HomePage/OurPirce";
import OurTeamSlider from "@/components/modules/OurTeam/OurTeamSlider";

export default function Homepage() {
  return (
    <div>
      <Banner></Banner>
      <About></About>
      <OurPrice></OurPrice>
      <OurAchievement></OurAchievement>
      <OurTeamSlider></OurTeamSlider>
      <FAQ></FAQ>
    </div>
  );
}
