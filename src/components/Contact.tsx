import { Icon } from "@iconify/react/dist/iconify.js";
import ButtonLink from "./ButtonLink";
import SubTitle from "./SubTitle";

export default function Contact() {
  return (
    <section className="big-container" id="contact">
      <div className="py-14">
        <div className="text-center mb-3.5">
          <SubTitle title="Contact Me" />
          <div className="mainTitle mt-2.5">
            <h1 className="leading-tight">
              Let's Talk for{" "}
              <span className="text-greenAccent">
                Your <br /> Next Projects
              </span>
            </h1>
          </div>
        </div>
        <div className="grid md:grid-cols-[1.4fr_1fr] gap-6">
          <ContactForm />
          <ContactCard />
        </div>
      </div>
    </section>
  );
}

const ContactForm = () => {
  return (
    <form method="#" className="form contactForm">
      <div className="grid min-[470px]:grid-cols-2 items-center gap-3 form">
        <label htmlFor="name">
          Your Name *
          <input type="text" placeholder="Ex. John Doe" />
        </label>
        <label htmlFor="email">
          Email *
          <input type="email" placeholder="Ex. John Doe" />
        </label>
        <label htmlFor="phone">
          Phone *
          <input type="text" placeholder="Ex. John Doe" />
        </label>
        <label htmlFor="name">
          I'm Interested in *
          <select>
            <option selected disabled>
              select
            </option>
          </select>
        </label>
        <label htmlFor="name">
          Budget Range (USD) *
          <select>
            <option selected disabled>
              Select Range
            </option>
          </select>
        </label>
        <label htmlFor="name">
          Country *
          <select>
            <option selected disabled>
              Select Country
            </option>
          </select>
        </label>
      </div>
      <label htmlFor="name" className="mt-2">
        Your Message *
        <textarea rows={4} name="message" id="message" placeholder="message" />
      </label>
      <button className="mt-8">
        <ButtonLink title="Send Message" path="#" />
      </button>
    </form>
  );
};
export const socialIcons = [
  "ri:facebook-fill",
  "line-md:twitter-x",
  "jam:pinterest",
  "uil:instagram",
  "uil:youtube",
];
const ContactCard = () => {
  return (
    <div className="pring-card relative ring-[0.7px] ring-lightGray bg-gray-100 shadow-sm rounded-2xl overflow-hidden">
      <div className="text-xs leading-relaxed flex flex-col gap-8 px-5 pt-5">
        <div className="address">
          <h4 className="text-lg font-semibold text-greenAccent mb-3">
            Address
          </h4>
          <p>
            48, oduduwa street, <br /> Kilo bustop, Surulere.
          </p>
        </div>
        <div className="address">
          <h4 className="text-lg font-semibold text-greenAccent mb-3">
            Contact
          </h4>
          <p>
            Phone: +2349014960362 <br /> Email: adeosunadeyanju10@gmail.com
          </p>
        </div>
        <div className="address">
          <h4 className="text-lg font-semibold text-greenAccent mb-3">Time</h4>
          <p>
            Monday - Friday :10:00 - 20:00 <br /> Saturday - Sunday :11:00 -
            18:00
          </p>
        </div>
      </div>
      <div className="mt-4 p-5 bg-greenAccent rounded-b-2xl">
        <h3 className="text-base mb-2 font-medium">Stay Connected</h3>
        <div className="flex items-center justify-between">
          {socialIcons.map((icon, i) => (
            <div
              key={i}
              className="icon d-flex rounded-full w-10 h-10 bg-black"
            >
              <div className="icon d-flex rounded-full w-5 h-5 bg-greenAccent">
                <Icon icon={icon} width="18" height="18" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
