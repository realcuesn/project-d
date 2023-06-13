import Contact from "./components/Contact";
import GreatStory from "./components/GreatStory";
import Hero from "./components/Hero";
import Instagram from "./components/Instagram";
import SiteFooter from "./components/SiteFooter";
import SiteHeader from "./components/SiteHeader";
import SitePhone from "./components/SitePhone";
import SmallTip from "./components/SmallTip";
import ToolsWeUse from "./components/ToolsWeUse";
import WeStand from "./components/WeStand";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Experience from "./components/Experience";
import About from "./components/About";
import Team from "./components/Team";
gsap.registerPlugin(ScrollTrigger);
const App = () => {
  return (
    <div className="w-screen relative overflow-x-clip">
      <SiteHeader></SiteHeader>
      <Hero></Hero>
      <SitePhone></SitePhone>
      <WeStand></WeStand>
      <GreatStory></GreatStory>
      <Instagram></Instagram>
      <SmallTip></SmallTip>
      <ToolsWeUse></ToolsWeUse>
      <Experience></Experience>
      <Team></Team>
      <About></About>
      <Contact></Contact>
      <SiteFooter></SiteFooter>
    </div>
  );
};

export default App;
