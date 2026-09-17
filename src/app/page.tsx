import { Hero } from "@/components/Hero";
import { WhoWeAre } from "@/components/WhoWeAre";
import { Work } from "@/components/Work";
import { Services } from "@/components/Services";
import { Studio } from "@/components/Studio";
import { SharingTheLove } from "@/components/SharingTheLove";
import { Process } from "@/components/Process";
import { Contact } from "@/components/Contact";

export default function HomePage() {
  return (
    <>
      <Hero />
      <WhoWeAre />
      <Work />
      <Services />
      <Studio />
      <SharingTheLove />
      <Process sectionIndex="06" />
      <Contact />
    </>
  );
}
