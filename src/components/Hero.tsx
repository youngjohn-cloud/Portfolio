import ButtonLink from "./ButtonLink";
import SubTitle from "./SubTitle";

export default function Hero() {
  return (
    <section className="Hero section big-container py-5">
      <div className="grid sm:grid-cols-2 max-sm:text-center items-center gap-3">
        <div className="hero-content">
          <div className="my-4">
            <SubTitle title="Hello There!" />
          </div>
          <div className="hero-name">
            <h1 className="text-4xl font-semibold concert-one-regular dark:text-lightGray leading-[1.10]">
              <span className="text-greenAccent">i'm Adeosun John,</span> <br />
              Web Developer <br />
              based in Nigeria.
            </h1>
          </div>
          <div className="hero-description text-sm text-gray-400 my-6">
            <p>
              I'm an experienced Web Developer with 2+years in the field,
              collaborating with various companies and startups.
            </p>
          </div>
          <div className="hero-btn sm:flex items-center max-sm:justify-center gap-3 max-sm:space-y-5">
            <ButtonLink title="View my Work" path="#projects" />
            <ButtonLink title="Download CV" transparent />
          </div>
        </div>
      </div>
    </section>
  );
}
