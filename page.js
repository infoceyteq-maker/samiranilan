import Hero from "@/components/Hero";
import TrustBar from "@/components/TrustBar";
import About from "@/components/About";
import Services from "@/components/Services";
import WorksGallery from "@/components/WorksGallery";
import CreativeLab from "@/components/CreativeLab";
import Profiles from "@/components/Profiles";
import ProcessSkills from "@/components/ProcessSkills";
import Contact from "@/components/Contact";

export default function HomePage() {
  return (
    <>
      <Hero />
      <TrustBar />
      <About />
      <Services />
      <WorksGallery />
      <CreativeLab />
      <Profiles />
      <ProcessSkills />
      <Contact />
    </>
  );
}
