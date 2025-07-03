import ButtonLink from "./ButtonLink";
import Line from "./Line";
import SubTitle from "./SubTitle";

export default function About() {
  return (
    <section className="big-container" id="about">
      <div className=" py-11">
        <div className="grid md:grid-cols-2 items-center gap-10">
          <div className="profile-img max-md:hidden">profile img</div>
          <div className="profile-content flex flex-col gap-3">
            <SubTitle title="About Me" />
            <div className="profile-name mainTitle max-sm:text-center">
              <h1>
                Who is{" "}
                <span className="capitalize text-greenAccent">
                  Adeosun John?
                </span>
              </h1>
            </div>
            <div className="profile-decription text-xs leading-normal text-gray-400">
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Perspiciatis saepe labore ipsa, accusantium accusamus eos?
              </p>
            </div>
            <div className="project grid lg:grid-cols-3 grid-cols-2 max-[363px]:grid-cols-1 items-center gap-3">
              <div className="completion">
                <h3 className="text-xl text-greenAccent concert-one-regular font-semibold">
                  600+
                </h3>
                <span className="text-xs text-gray-400">
                  Projects Completed
                </span>
              </div>
              <div className="industry">
                <h3 className="text-xl text-greenAccent concert-one-regular font-semibold">
                  10+
                </h3>
                <span className="text-xs text-gray-400">Industry Covered</span>
              </div>
              <div className="completion">
                <h3 className="text-xl text-greenAccent concert-one-regular font-semibold">
                  2+
                </h3>
                <span className="text-xs text-gray-400">
                  Years of Experience
                </span>
              </div>
              <div className="mt-4 w-max">
                <ButtonLink title="Download CV" />
              </div>
            </div>
          </div>
        </div>
      </div>
      <Line />
    </section>
  );
}
