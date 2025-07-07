import { Icon } from "@iconify/react/dist/iconify.js";
import Line from "./Line";
import SubTitle from "./SubTitle";

const data = [
  {
    time: "Hourly",
    duration: "Hour",
    price: "30",
    list: [
      "Prompt Bug Fixes & Patches",
      "Technical Consultation & Guidance",
      "Minor Feature Implementations",
      "Code Review & Optimization",
      "Post-Launch Tweaks & Adjustments",
      "Ad-Hoc Development Tasks",
      "Direct Communication & Transparency",
      "No Long-Term Commitment",
    ],
  },
  {
    time: "Monthly",
    duration: "month",
    price: "1500",
    list: [
      "Priority Development Queue",
      "Continuous Feature Development",
      "Ongoing Website Maintenance & Updates",
      "Dedicated Monthly Development Hours",
      "Proactive Bug Monitoring & Resolution",
      "Full-stack Backend & API Development",
      "Intuitive Frontend User Interface (UI)",
      "Regular Progress & Status Reports",
    ],
  },
  {
    time: "Quarterly",
    duration: "Qtr",
    price: "15,000",
    list: [
      "Comprehensive Project Lifecycle Management",
      "Dedicated Full-Stack Development Team/Lead",
      "Advanced Web Application Architecture",
      "Proactive Performance Optimization",
      "Strategic Technical Partnership",
      "Integrated SEO Best Practices",
      "Comprehensive Testing & Quality Assurance",
      "Detailed Analytics & Reporting Setup",
    ],
  },
];
export default function Pricing() {
  return (
    <section className="big-container">
      <div className="py-14">
        <div className="title">
          <SubTitle title="Pricing Table" />
          <div className="my-5 max-sm:text-center dark:text-gray-100">
            <h2 className="mainTitle">
              My <span className="text-greenAccent">Pricing Model</span>
            </h2>
          </div>
        </div>
        <div className="grid lg:grid-cols-3 sm:grid-cols-2 items-center gap-6">
          {data.map((items, i) => (
            <div
              key={i}
              className="pring-card mt-3 relative ring-[0.7px] ring-lightGray dark:ring-gray-500 dark:bg-darkGray bg-gray-100 shadow-sm rounded-2xl p-3.5"
            >
              <div className="price px-3 py-4 bg-greenAccent rounded-xl">
                <div className="flex items-center justify-between">
                  <h5 className="text-[18px] font-semibold">{items.time}</h5>
                  <div className="icon-link w-9 h-9 d-flex rounded-full ring-[0.9px] ring-black bg-black text-greenAccent">
                    <Icon
                      className="-rotate-45"
                      icon="guidance:left-arrow"
                      width="20"
                      height="20"
                      strokeWidth={2}
                    />
                  </div>
                </div>
                <div className="price flex items-center gap-2">
                  <h2 className="text-2xl concert-one-regular font-semibold">
                    ${items.price}
                  </h2>
                  <span className="text-xs font-semibold">
                    / {items.duration}
                  </span>
                </div>
              </div>
              <div className="mt-4 flex flex-col gap-3">
                {items.list.map((lists, i) => (
                  <div key={i} className="flex items-center gap-2">
                    <div className="d-flex w-4 h-4 bg-greenAccent rounded-full">
                      <Icon
                        icon="fluent:checkmark-16-filled"
                        width="14"
                        height="14"
                      />
                    </div>
                    <span
                      key={i}
                      className="text-[14px] text-gray-500 dark:text-gray-300 webkit-line-clamp1 ellipsis"
                    >
                      {lists}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
      <Line />
    </section>
  );
}
