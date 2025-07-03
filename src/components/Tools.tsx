import { Icon } from "@iconify/react/dist/iconify.js";
import SubTitle from "./SubTitle";

const designTools = [
  {
    title: "Figma",
    progressCount: 75,
    icon: "logos:figma",
  },
  {
    title: "vs-code",
    progressCount: 90,
    icon: "devicon:vscode",
  },
  {
    title: "pycharm",
    progressCount: 90,
    icon: "logos:pycharm",
  },
  {
    title: "Sketch",
    progressCount: 60,
    icon: "devicon:sketch",
  },
  {
    title: "Photoshop",
    progressCount: 75,
    icon: "skill-icons:photoshop",
  },
  {
    title: "Chrome",
    progressCount: 95,
    icon: "logos:chrome",
  },
];
export default function Tools() {
  return (
    <section className="big-container py-11">
      <div className="flex flex-col items-center justify-center">
        <SubTitle title="My Favourite Tools" />
        <div className="tools-title mainTitle mt-3 max-sm:text-center">
          <h2 className="leading-tight">
            <span className="text-greenAccent">Exploring the Tools</span> <br />
            Behind my Designs
          </h2>
        </div>
      </div>
      <div className="grid sm:grid-cols-3 max-sm:grid-cols-2 max-[516px]:grid-cols-1 items-center gap-6 mt-8">
        {designTools.map((items, i) => (
          <div
            key={i}
            className="card-design relative ring-[0.7px] ring-lightGray bg-gray-100 shadow-sm rounded-2xl px-5"
          >
            <div className="flex items-center gap-3 py-5">
              <div className="icon w-14 h-14 d-flex rounded-full bg-white mb-3">
                <Icon icon={items.icon} width="24" height="24" />
              </div>
              <span className="lg:text-xl text-sm font-medium">
                {items.title}
              </span>
            </div>
            <div className="absolute top-2 right-2 progress-count w-max px-2.5 py-1.5 font-medium rounded-full text-xs bg-greenAccent">
              {items.progressCount}%
            </div>
            <div className="progress-bar bg-white w-full h-[3px] rounded-t-lg">
              <div
                className="h-full bg-greenAccent rounded-t-lg"
                style={{ width: `${items.progressCount}%` }}
              />
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
