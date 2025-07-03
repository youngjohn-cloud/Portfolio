import { Icon } from "@iconify/react";
import { useState } from "react";
import ButtonLink from "./ButtonLink";

export const navLinks = [
  {
    name: "Home",
    path: "#",
    icon: "mynaui:home-solid",
  },
  {
    name: "Services",
    path: "#services",
    icon: "fluent-mdl2:c-r-m-services",
  },
  {
    name: "Projects",
    path: "#projects",
    icon: "fa-solid:project-diagram",
  },
  {
    name: "Blogs",
    path: "#blog",
    icon: "streamline-ultimate:blogger-logo-bold",
  },
  {
    name: "About Me",
    path: "#about",
    icon: "gravity-ui:person-fill",
  },
  {
    name: "Testimonials",
    path: "#testimonials",
    icon: "icomoon-free:quotes-left",
  },
];
export default function Navbar() {
  const [showSideBar, setShowSideBar] = useState(false);

  return (
    <>
      <section className="big-container py-5">
        <div className="flex justify-between items-center text-black">
          <div className="name text-lg font-medium  d-flex gap-2">
            <div className="w-9 h-9 bg-greenAccent font-semibold text-xl rounded-full d-flex">
              A
            </div>
            <span className="dark:text-lightGray">Adeosun</span>
          </div>
          <nav className="nav-links hidden lg:block">
            <ul className="flex items-center gap-4 ">
              {navLinks.map((items, i) => (
                <li
                  key={i}
                  className="lg:text-xs text-[12px]   dark:text-lightGray  capitalize font-medium"
                >
                  <a href={items.path}>{items.name}</a>
                </li>
              ))}
            </ul>
          </nav>
          <div className="flex gap-2 items-center">
            <ToggleTheme />
            <div className="hidden lg:block">
              <ButtonLink title="Let's Talk" path="#contact" />
            </div>
            <button
              onClick={() => setShowSideBar(!showSideBar)}
              className="block lg:hidden d-flex w-7 h-7 bg-greenAccent rounded-md"
            >
              <Icon icon="charm:menu-hamburger" width="24" height="24" />
            </button>
          </div>
        </div>
      </section>
      <MobileScreenSideBar
        showSideBar={showSideBar}
        setShowSideBar={setShowSideBar}
      />
    </>
  );
}
const ToggleTheme = () => {
  const [darkTheme, setDarkTheme] = useState(false);
  const handleDarkTheme = () => {
    document.documentElement.classList.toggle("dark");
    setDarkTheme(!darkTheme);
  };
  return (
    <button
      onClick={handleDarkTheme}
      className="Theme relative w-[40px] h-[22px] rounded-xl  hover:ring-[#026c9c] dark:ring-[#dfdfd6] ring-[#d7d7d7] ring-[1px] transition-ease bg-[#8e96aa24]"
    >
      <span
        className={`${
          darkTheme && "translate-x-full"
        } transition-ease absolute top-[2px] left-[1px] w-[18px] h-[18px] rounded-full bg-white box-shadow pointer-events-auto`}
      >
        <span className="relative top-[1px] left-[1px] w-[18px] h-[18px] rounded-full overflow-hidden block">
          <Icon
            icon="solar:sun-outline"
            className={`${
              darkTheme ? "opacity-0" : "opacity-100"
            } w-[12px] h-[12px] absolute top-[2px] left-[2px] text-[#67676c] transition-ease`}
          />
          <Icon
            icon="ri:moon-line"
            className={`${
              darkTheme ? "opacity-100" : "opacity-0"
            } dark:text-[#dfdfd6] w-[12px] h-[12px] absolute top-[2px] left-[2px] text-[#67676c] transition-ease`}
          />
        </span>
      </span>
    </button>
  );
};

const MobileScreenSideBar = ({
  showSideBar,
  setShowSideBar,
}: {
  showSideBar: boolean;
  setShowSideBar: React.Dispatch<React.SetStateAction<boolean>>;
}) => {
  return (
    <div
      onClick={() => setShowSideBar(false)}
      className={`${
        showSideBar
          ? "visible opacity-100"
          : "invisible opacity-0 transition-all ease-in duration-1000"
      } w-full h-full fixed top-0 left-0 bg-black bg-opacity-50 z-50 flex flex-col items-end justify-end p-4`}
    >
      <div
        className={`${
          showSideBar ? "translate-x-0" : "translate-x-full"
        } transition-faq w-56 h-full relative rounded-xl bg-white flex flex-col items-end justify-between p-6`}
      >
        <button
          onClick={() => setShowSideBar(false)}
          className="absolute transition-all top-0 left-0 -translate-y-1/4 -translate-x-1/2 close-modal-button d-flex w-[40px] h-[40px] rounded-full shadow-[0_4px_10px_#0000002b] bg-white text-[#563725] z-50"
        >
          <Icon
            icon="uil:plus"
            width="35"
            height="35"
            className={`rotate-45`}
          />
        </button>
        <div className="name flex flex-col items-end">
          <div className="name text-lg font-medium  flex items-center gap-2">
            <div className="w-9 h-9 bg-greenAccent font-semibold text-xl rounded-full d-flex">
              A
            </div>
            <span className="dark:text-lightGray">Adeosun</span>
          </div>
          <div className="flex flex-col gap-3 items-end">
            {navLinks.map((items, i) => (
              <a
                key={i}
                href={items.path}
                className="mt-8 flex items-center gap-3"
              >
                <Icon icon={items.icon} width="24" height="24" />
                <span className="text-sm font-medium dark:text-lightGray">
                  {items.name}
                </span>
              </a>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
