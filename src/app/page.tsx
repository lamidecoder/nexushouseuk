import { Hero } from "@/components/Hero";
import { Marquee } from "@/components/Marquee";
import { WhoWeAre } from "@/components/WhoWeAre";
import { ClientLogos } from "@/components/ClientLogos";
import { Work } from "@/components/Work";
import { Services } from "@/components/Services";
import { Studio } from "@/components/Studio";
import { InsightsTeaser } from "@/components/InsightsTeaser";
import { SharingTheLove } from "@/components/SharingTheLove";
import { Process } from "@/components/Process";
import { Contact } from "@/components/Contact";

export default function HomePage() {
  return (
    <>
      <Hero />
      <Marquee />
      <WhoWeAre />
      <ClientLogos />
      <Work />
      <Services />
      <Studio />
      <InsightsTeaser />
      <SharingTheLove />
      <Process sectionIndex="07" />
      <Contact />
    </>
  );
}
