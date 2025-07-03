import Line from "./Line";
import { socialIcons } from "./Contact";
import { Icon } from "@iconify/react/dist/iconify.js";
import { navLinks } from "./Navbar";
const contacts = [
  "+2349014960362",
  "adeosunadeyanju10@gmail.com",
  "48, oduduwa street,  Kilo bustop, Surulere.",
];
export default function Footer() {
  return (
    <>
      <section className="big-container">
        <footer className="py-14">
          <div className="max-sm:text-center">
            <div className="mainTitle mt-1.5">
              <h1 className="leading-snug">
                Let's <span className="text-greenAccent">Connect</span> there
              </h1>
            </div>
          </div>
          <div className="my-6">
            <Line />
          </div>
          <div className="grid lg:grid-cols-[3fr_1fr_1fr_3fr] md:grid-cols-[3fr_1fr_1fr] sm:grid-cols-[2fr_1fr] gap-8  lg:gap-14">
            <div className="name-social-links">
              <div className="flex items-center gap-2">
                <div className="w-9 h-9 bg-greenAccent font-semibold text-xl rounded-full d-flex">
                  A
                </div>
                <h4 className="text-base font-semibold">
                  Adeosun<span className="text-greenAccent">.</span>
                </h4>
              </div>
              <div className="description text-xs text-gray-500 my-4">
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi
                  corporis voluptatibus velit nostrum molestiae voluptatum
                </p>
              </div>
              <div className="social-links flex gap-2">
                {socialIcons.map((icon, i) => (
                  <div
                    key={i}
                    className="icon d-flex rounded-full w-9 h-9 bg-greenAccent"
                  >
                    <div className="icon d-flex rounded-full w-5 h-5 bg-black text-greenAccent">
                      <Icon icon={icon} width="16" height="16" />
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="navigation">
              <h2 className="text-base font-semibold text-greenAccent">
                Navigation
              </h2>
              <div className="mt-6 flex flex-col gap-2.5">
                {navLinks.map((items, i) => (
                  <a
                    className="block text-gray-500 text-xs"
                    key={i}
                    href={items.path}
                  >
                    {items.name}
                  </a>
                ))}
              </div>
            </div>
            <div className="contact">
              <h2 className="text-base font-semibold text-greenAccent">
                Contact
              </h2>
              <div className="mt-6 flex flex-col gap-2.5">
                {contacts.map((items, i) => (
                  <p className="block text-gray-500 text-xs" key={i}>
                    {items}
                  </p>
                ))}
              </div>
            </div>
            <div className="information w-full">
              <h2 className="text-base font-semibold text-greenAccent">
                Get the latest information
              </h2>
              <form>
                <div className="w-full h-9 bg-gray-100 rounded-lg mt-6 relative overflow-hidden">
                  <input
                    type="text"
                    name="search"
                    placeholder="Email address"
                    className="w-full h-full bg-gray-100 px-3 py-2 text-xs"
                  />
                  <div className="d-flex w-8 h-full absolute top-0 right-0 text-black bg-greenAccent">
                    <Icon
                      icon="streamline-plump:mail-send-email-message-solid"
                      width="16"
                      height="16"
                    />
                  </div>
                </div>
              </form>
            </div>
          </div>
        </footer>
      </section>
    </>
  );
}
