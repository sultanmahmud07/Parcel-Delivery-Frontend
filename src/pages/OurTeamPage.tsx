import TeamInfo from "@/components/modules/OurTeam/TeamInfo"
import CommonBanner from "./CommonBanner"
import OurTeamSlider from "@/components/modules/OurTeam/OurTeamSlider";

const OurTeamPage = () => {
  return (
    <div>
      <CommonBanner title="Meet Our Team"></CommonBanner>
      <TeamInfo></TeamInfo>
      <OurTeamSlider></OurTeamSlider>
    </div>
  )
}

export default OurTeamPage;