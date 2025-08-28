import React from "react";

import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
  TooltipProvider,
} from "@/components/ui/tooltip";
import { CertificatesBar } from "@/components/CertificatesBar";
import { ContinueIndicator } from "@/components/ContinueIndicator";
import { Link } from "@/components/Link";
import { analyticsEvents, captureEvent } from "@/lib/analytics";

type Image = {
  src: string;
  alt: string;
  tooltip: string;
};

const images: Image[] = [
  {
    src: "/me.webp",
    alt: "A professional picture of Jarrod Servilla, standing in front of a large window with the Toronto cityscape in the background",
    tooltip: "Click me to see a cute cat!",
  },
  {
    src: "/us.webp",
    alt: "A very cute picture of Jarrod and his wife Fatz",
    tooltip: "Once more..",
  },
  {
    src: "/yumi.webp",
    alt: "A cute, white cat, sitting in a small box on the floor next to some plushies",
    tooltip: "If I fits, I sits",
  },
];

export const About: React.FC = () => {
  const [currImage, setCurrImage] = React.useState(0);
  const [isTooltipOpen, setIsTooltipOpen] = React.useState(false);
  const handleClick = () => {
    captureEvent(analyticsEvents.CLICK_IMAGE, {
      target: `about-pic-${currImage}`,
    });
    setCurrImage((currImage + 1) % images.length);
  };

  return (
    <section
      id="about"
      className="flex justify-center items-center px-4 h-[60vh] min-h-screen page-section"
    >
      <div className="w-full max-w-4xl">
        <h1 className="mb-20 font-semibold text-main text-4xl text-center dark:text-alt">
          About Me
        </h1>
        <div className="flex md:flex-row flex-col-reverse items-center md:items-start gap-8">
          <div className="flex flex-col justify-center items-center w-full md:w-1/2">
            <p className="mt-4">
              Howdy! 🤠 I studied computer science at the University of Toronto,
              and I&apos;m currently working at{" "}
              <Link href="https://www.getdbt.com/">dbt Labs</Link> as a{" "}
              <strong className="text-main dark:text-alt">
                Senior Software Engineer
              </strong>
              , working on{" "}
              <Link href="https://www.getdbt.com/product/dbt-explorer">
                dbt Catalog
              </Link>
              . Prior to that, I&apos;ve worked at{" "}
              <Link href="https://www.sailpoint.com/">SailPoint</Link>,{" "}
              <Link href="https://www.citigroup.com/">Citigroup</Link>, and{" "}
              <Link href="https://citylitics.com/">Citylitics</Link>.
            </p>
            <br />
            <p>
              I enjoy creating scalable & elegant systems that have a real world
              impact. I&apos;m always learning new technologies, either through
              attending events or self-study (check out the certs below!).
            </p>
            <br />
            <CertificatesBar />
          </div>
          <div className="flex justify-center md:justify-end w-full md:w-1/2">
            <TooltipProvider>
              <Tooltip open={isTooltipOpen}>
                <TooltipTrigger
                  // shadcn has a button under the hood so this has to be duplicated zonk
                  onClick={handleClick}
                  onMouseEnter={() => setIsTooltipOpen(true)}
                  onFocus={() => setIsTooltipOpen(true)}
                >
                  <input
                    type="image"
                    src={images[currImage].src}
                    alt={images[currImage].alt}
                    className="shadow-lg rounded-lg w-[300px] h-[300px] object-cover standout-image"
                    onClick={handleClick}
                  />
                </TooltipTrigger>
                <TooltipContent>{images[currImage].tooltip}</TooltipContent>
              </Tooltip>
            </TooltipProvider>
          </div>
        </div>
        <ContinueIndicator
          currSection="about"
          nextSection="experience"
          className="flex justify-center pt-8"
        />
      </div>
    </section>
  );
};
