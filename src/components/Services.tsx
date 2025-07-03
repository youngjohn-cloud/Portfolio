import { Icon } from "@iconify/react/dist/iconify.js";
import SubTitle from "./SubTitle";
import Line from "./Line";

const allServices = [
  {
    name: "Front-End Development",
    description: `Creating user interfaces and client-side functionality using technologies like HTML, CSS, JavaScript, and frameworks like React, Angular, or Vue.js...`,
    path: "#",
    icon: "material-icon-theme:react",
  },
  {
    name: "Back-End Development",
    description: `Building server-side logic, databases, and APIs to handle data processing, storage, and application functionality. This involves using languages like Node.js, Python, Ruby, or Java, frameworks like Express or Django, and databases like MySQL, MongoDB, or PostgreSQL to ensure robust and scalable server operations.`,
    path: "#",
    icon: "cib:php",
  },
  {
    name: "DevOps",
    description: `Managing the deployment, hosting, and maintenance of web applications. This includes setting up cloud infrastructure (e.g., AWS, Azure), configuring CI/CD pipelines, ensuring scalability, and handling server maintenance, security, and performance optimization`,
    path: "#",
    icon: "carbon:ibm-devops-control",
  },
];
export default function Services() {
  return (
    <section className="big-container" id="services">
      <div className="py-11">
        <SubTitle title="My Specialization" />
        <div className="flex items-center justify-between my-4">
          <div className="mainTitle capitalize">
            <span className="text-greenAccent">services</span> i provide
          </div>
        </div>
        <div className="grid lg:grid-cols-3 sm:grid-cols-2 items-center sm:gap-7 gap-5">
          {allServices.map((items, i) => (
            <div
              key={i}
              className="card-design relative ring-[0.7px] ring-lightGray bg-gray-100 shadow-sm rounded-2xl p-5"
            >
              <div className="icon w-12 h-12 d-flex rounded-full bg-white text-greenAccent mb-3">
                <Icon icon={items.icon} fill="#00ff00" width="30" height="30" />
              </div>
              <div className="card-title">
                <h3 className="text-xl concert-one-regular capitalize">
                  {items.name}
                </h3>
              </div>
              <div className="card-content text-xs text-gray-500 my-2 leading-normal ellipsis">
                <p>{items.description}</p>
              </div>
              <div className="card-link">
                <a
                  href={items.path}
                  className="flex items-center gap-2 text-xs font-medium"
                >
                  Learn more
                  <Icon
                    className="text-greenAccent font-extrabold"
                    icon="guidance:left-arrow"
                    width="20"
                    height="20"
                    strokeWidth={2}
                  />
                </a>
              </div>
              <div className="line w-1.5 h-16 bg-greenAccent absolute top-6 left-0 -translate-x-full rounded-s-2xl" />
            </div>
          ))}
        </div>
      </div>
      <Line />
    </section>
  );
}
