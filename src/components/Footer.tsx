import { useEffect, useState } from "react";
import { GitFork, Star } from "lucide-react";

import { analyticsEvents, captureEvent } from "@/lib/analytics";
import { scrollToSection } from "@/lib/utils";

export const Footer: React.FC = () => {
  const [forks, setForks] = useState<number>(0);
  const [stars, setStars] = useState<number>(0);

  useEffect(() => {
    fetch("https://api.github.com/repos/jcserv/portfolio")
      .then((response) => response.json())
      .then((data) => {
        setForks(data.forks);
        setStars(data.stargazers_count);
      })
      .catch((error) => console.error(error));
  }, []);

  return (
    <footer>
      <div className="flex justify-center items-center">
        <a
          href="https://github.com/jcserv/portfolio"
          className="m-2 hover:underline"
          onClick={() =>
            captureEvent(analyticsEvents.CLICK_LINK, {
              origin: "footer",
              target: "https://github.com/jcserv/portfolio",
            })
          }
        >
          Made with 💙 (and React) by Jarrod Servilla
        </a>
      </div>
      <div className="flex justify-center items-center">
        <GitFork className="mx-2 w-4" /> {forks} <Star className="mx-2 w-4" />{" "}
        {stars}
      </div>
      <div className="flex justify-center items-center pb-8">
        <p
          onClick={() => {
            captureEvent(analyticsEvents.SCROLL_NEXT, {
              origin: "footer",
              target: "landing",
            });
            scrollToSection("landing");
          }}
        >
          🚀 Click me to scroll to the top! 🚀
        </p>
      </div>
    </footer>
  );
};
