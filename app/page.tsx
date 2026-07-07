import { Navigation } from "@/components/Navigation";
import { Hero } from "@/components/Hero";
import { Specialties } from "@/components/Specialties";
import { Experience } from "@/components/Experience";
import { Projects } from "@/components/Projects";
import { Skills } from "@/components/Skills";
import { Contact } from "@/components/Contact";
import { Footer } from "@/components/Footer";

export default function Page() {
  return (
    <>
      <Navigation />
      <main>
        <Hero />
        <Specialties />
        <Experience />
        <Projects />
        <Skills />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
