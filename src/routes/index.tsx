import { createFileRoute } from "@tanstack/react-router";
import { Toaster } from "@/components/ui/sonner";
import { Nav } from "@/components/Nav";
import { Hero } from "@/components/Hero";
import { Projects } from "@/components/Projects";
import { Certificates } from "@/components/Certificates";
import { About, Experience, Skills, Education, Achievements, Contact, Footer } from "@/components/Sections";

const title = "Muzammil Hussain — AI Engineer & LLM Developer Portfolio";
const description =
  "AI Engineer building production LLM, RAG and computer-vision systems. Explore projects, certifications, research and experience.";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <main className="relative min-h-screen overflow-x-hidden">
      <Nav />
      <Hero />
      <About />
      <Experience />
      <Projects />
      <Skills />
      <Certificates />
      <Education />
      <Achievements />
      <Contact />
      <Footer />
      <Toaster position="bottom-center" />
    </main>
  );
}
