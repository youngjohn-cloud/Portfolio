import { Icon } from "@iconify/react/dist/iconify.js";
import SubTitle from "./SubTitle";
import { useState } from "react";
import ButtonLink from "./ButtonLink";

export default function Faq() {
  const [faqInfo, setFaqInfo] = useState([
    {
      question: "What services do you offer as a web developer?",
      answer:
        " Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae totam minima dolorem expedita adipisci porro non repudiandae eligendi molestiae consequuntur!",
      open: false,
    },
    {
      question: "What industries do you specialize in?",
      answer:
        " Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae totam minima dolorem expedita adipisci porro non repudiandae eligendi molestiae consequuntur!",
      open: true,
    },
    {
      question: "Are you available for freelance work?",
      answer:
        " Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae totam minima dolorem expedita adipisci porro non repudiandae eligendi molestiae consequuntur!",
      open: false,
    },
    {
      question: "What tools do you use for your development work?",
      answer:
        " Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae totam minima dolorem expedita adipisci porro non repudiandae eligendi molestiae consequuntur!",
      open: false,
    },
    {
      question: "How do i navigate through your portfolio projects?",
      answer:
        " Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae totam minima dolorem expedita adipisci porro non repudiandae eligendi molestiae consequuntur!",
      open: false,
    },
    {
      question: "Can i download your resume/CV for information",
      answer:
        " Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae totam minima dolorem expedita adipisci porro non repudiandae eligendi molestiae consequuntur!",
      open: false,
    },
  ]);
  const handleFaqToggle = (index: number) => {
    setFaqInfo(
      faqInfo.map((faq, i) => {
        if (i === index) {
          faq.open = !faq.open;
        } else {
          faq.open = false;
        }
        return faq;
      })
    );
  };
  return (
    <section className="big-container">
      <div className="py-14">
        <div className="text-center mb-5">
          <SubTitle title="FAQs" />
          <div className="mainTitle mt-2.5">
            <h1 className="leading-tight">
              Questions? <span className="text-greenAccent">Look here</span>
            </h1>
          </div>
        </div>
        <div className="grid lg:grid-cols-[2fr_1fr] gap-7">
          <div className="flex flex-col gap-3">
            {faqInfo.map((items, i) => (
              <div
                key={i}
                className={`faq-card relative ring-[0.7px] ${
                  items.open
                    ? "ring-greenAccent bg-greenAccent"
                    : "ring-lightGray bg-gray-100"
                }  shadow-sm rounded-2xl py-3.5 px-5`}
              >
                <button
                  onClick={() => handleFaqToggle(i)}
                  className="w-full Question flex justify-between items-center"
                >
                  <div className="text-[20px] font-medium pr-2">
                    <h2>{items.question}</h2>
                  </div>
                  <div className="icon d-flex">
                    <Icon
                      icon="uil:plus"
                      width="28"
                      height="28"
                      className={`${
                        items.open ? "rotate-45" : "rotate-0"
                      } transition-faq`}
                    />
                  </div>
                </button>
                <div
                  className={`Answers  text-[16px] transition-faq ${
                    items.open
                      ? "mt-3  max-h-full"
                      : "max-h-0 overflow-hidden invisible"
                  }`}
                >
                  <p className={` ${items.open ? "block" : "hidden"}`}>
                    {items.answer}
                  </p>
                </div>
              </div>
            ))}
          </div>
          <div className="overflow-hidden contact-card h-max relative ring-[0.7px] ring-lightGray bg-gray-100 text-center rounded-2xl">
            <div className="contact-info py-7 flex flex-col items-center justify-center">
              <div className="contact-icon mb-6">
                <img
                  src="data:image/png;base64,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"
                  alt=""
                  className="max-w-11"
                />
              </div>
              <div className="text-base font-semibold">
                <h3>
                  You have different <br /> questions? Ask Away!{" "}
                </h3>
              </div>
              <div className="text-xs text-gray-500 mt-2.5">
                <p>
                  Your Questions, My Answer. Quick <br /> Responses Guaranteed.
                </p>
              </div>
              <div className="mt-6">
                <ButtonLink path="#" title="Contact Us" />
              </div>
            </div>
            <div className="h-14 w-full bg-greenAccent" />
          </div>
        </div>
      </div>
    </section>
  );
}
