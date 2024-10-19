import { scrollToSection } from "@/lib/utils";
import { Landing, About, Experience, Projects } from "@/sections";
import { createLazyFileRoute } from "@tanstack/react-router";
import React from "react";

export const Route = createLazyFileRoute("/")({
  component: Index,
});

const sections = [
  { key: "F1", value: "landing" },
  { key: "F2", value: "about" },
  { key: "F3", value: "experience" },
  { key: "F4", value: "projects" },
];

function Index() {
  React.useEffect(() => {
    const down = (e: KeyboardEvent) => {
      sections.forEach((section) => {
        if (e.key === section.key) {
          e.preventDefault();
          scrollToSection(section.value);
        }
      });
    };

    document.addEventListener("keydown", down);
    return () => document.removeEventListener("keydown", down);
  }, []);

  return (
    <main>
      <Landing />
      <About />
      <Experience />
      <Projects />
    </main>
  );
}
