import { Icon } from "@iconify/react/dist/iconify.js";
import Line from "./Line";
import SubTitle from "./SubTitle";

const data = [
  {
    title: "Education",
    icon: "tdesign:education-filled",
    list: [
      {
        name: "New Horizon",
        certificate: "Full-Stack Web Development",
        duration: "2024 - 2025",
      },
      {
        name: "Mainland",
        certificate: "Senior High School",
        duration: "2017 - 2020",
      },
      {
        name: "Jibowu",
        certificate: "Junior High School",
        duration: "2014 - 2017",
      },
    ],
  },
  {
    title: "Work Experience",
    icon: "basil:bag-solid",
    list: [
      {
        name: "Tutorial-Center",
        certificate: "Front End Developer",
        duration: "2024 - 2025",
      },
      {
        name: "Ty-Casual",
        certificate: "Full Stack Developer",
        duration: "2024 - 2025",
      },
      {
        name: "Social Media App",
        certificate: "Full Stack Developer",
        duration: "2024 - 2025",
      },
    ],
  },
];

export default function Academic() {
  return (
    <section className="big-container">
      <div className="py-14">
        <div className="text-center">
          <SubTitle title="Education & Works" />
          <div className="mainTitle mt-1.5">
            <h1 className="leading-snug">
              My{" "}
              <span className="text-greenAccent">
                Academic & <br /> Professional
              </span>{" "}
              Journey
            </h1>
          </div>
        </div>
        <div className="grid sm:grid-cols-2 gap-5 mt-8">
          {data.map((items, i) => (
            <div
              key={i}
              className="card-design relative ring-[0.7px] ring-lightGray bg-gray-100 shadow-sm rounded-2xl p-5"
            >
              <div className="card-title flex items-center gap-3 mb-3">
                <div className="icon w-11 h-11 d-flex rounded-full bg-greenAccent ">
                  <Icon icon={items.icon} width="28" height="28" />
                </div>
                <h3 className="text-xl font-medium">{items.title}</h3>
              </div>
              <Line />
              <div className="mt-4 flex flex-col gap-4">
                {items.list.map((data, i) => (
                  <div
                    key={i}
                    className="list flex flex-col-reverse lg:flex-row lg:items-center  justify-between"
                  >
                    <div className="title">
                      <h4 className="text-lg font-medium">{data.name}</h4>
                      <span className="lg:text-sm text-xs text-gray-400">
                        {data.certificate}
                      </span>
                    </div>
                    <div className="mb-2.5 lg:mb-0 w-max lg:text-sm text-xs font-medium px-3 py-2 rounded-full bg-greenAccent">
                      {data.duration}
                    </div>
                  </div>
                ))}
              </div>
              <div className="line w-1 h-11 bg-greenAccent absolute top-6 left-0 -translate-x-full rounded-s-2xl" />
            </div>
          ))}
        </div>
      </div>
      <Line />
    </section>
  );
}
