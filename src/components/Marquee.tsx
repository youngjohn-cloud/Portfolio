import { Icon } from "@iconify/react/dist/iconify.js";

const marqueeList = [
  "frontend design",
  "Backend design",
  "dashboard",
  "database",
  "API",
];
export default function Marquee() {
  return (
    <section className="marquee bg-greenAccent py-4 overflow-hidden">
      <div className="flex items-center gap-10">
        {marqueeList.map((items, i) => (
          <div key={i} className="flex items-center gap-10 flex-shrink-0">
            <h3 className="text-xl font-semibold capitalize concert-one-regular">
              {items}
            </h3>
            <Icon icon="octicon:north-star-16" width="30" height="30" />
          </div>
        ))}
      </div>
    </section>
  );
}
