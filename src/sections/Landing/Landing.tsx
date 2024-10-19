import { ContinueIndicator } from "@/components/ContinueIndicator";
import { SocialsBar } from "@/components/SocialsBar";

export const Landing: React.FC = () => {
  return (
    <section id="landing">
      <div className="h-[79vh] flex flex-col items-center justify-center space-y-8">
        <div className="text-center">
          <h1 className="scroll-m-20 text-4xl">
            Hi, I&apos;m Jarrod Servilla!
          </h1>
          <br />
          <h1 className="scroll-m-20 text-4xl">
            I&apos;m a{" "}
            <strong className="text-[#1ca7d0] dark:text-[#90cdf4]">
              full stack developer.
            </strong>
          </h1>
        </div>
        <SocialsBar />
        <ContinueIndicator nextSection="about" />
      </div>
    </section>
  );
};
