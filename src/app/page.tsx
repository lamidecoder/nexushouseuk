import { Hero } from "@/components/Hero";
import { Intro } from "@/components/Intro";
import { Work } from "@/components/Work";
import { Services } from "@/components/Services";
import { Studio } from "@/components/Studio";
import { Process } from "@/components/Process";
import { Contact } from "@/components/Contact";

export default function HomePage() {
  return (
    <>
      <Hero />
      <Intro />
      <Work />
      <Services />
      <Studio />
      <Process />
      <Contact />
    </>
  );
}
