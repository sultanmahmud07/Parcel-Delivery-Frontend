import About from "@/components/modules/HomePage/About/About";
import CommonBanner from "./CommonBanner";
import AboutUs from "@/components/modules/About/AboutUs/AboutUs";

export default function AboutPage() {
  return (
    <>
      <div className="">
        <CommonBanner title={"About Us"}></CommonBanner>
        <About></About>
        <AboutUs></AboutUs>
      </div>
    </>
  );
}
