import { Domains } from "@/components/experience/Domains";
import { ExperienceContact } from "@/components/experience/ExperienceContact";
import { ExperienceFooter } from "@/components/experience/ExperienceFooter";
import { ExperienceHero } from "@/components/experience/ExperienceHero";
import { ExperienceNav } from "@/components/experience/ExperienceNav";
import { InMotion } from "@/components/experience/InMotion";
import { Principles } from "@/components/experience/Principles";
import { Process } from "@/components/experience/Process";

export default function Home() {
  return (
    <>
      <ExperienceNav />
      <main id="main">
        <ExperienceHero />
        <InMotion />
        <Domains />
        <Process />
        <Principles />
        <ExperienceContact />
      </main>
      <ExperienceFooter />
    </>
  );
}
