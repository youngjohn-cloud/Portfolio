import LayoutCard from "./LayoutCard";
import SubTitle from "./SubTitle";

export default function Project() {
  return (
    <section className="big-container py-11" id="projects">
      <SubTitle title="My Portfolio" />
      <div className="flex items-center justify-between my-3 max-sm:text-center">
        <div className="title mainTitle">
          <h2 className="leading-tight">
            Let's Have a Look <br /> at{" "}
            <span className="text-greenAccent">My Portfolio</span>
          </h2>
        </div>
      </div>
      <div className="layout flex flex-col gap-6 mt-8">
        <LayoutCard
          content={{
            image:
              "https://i.pinimg.com/736x/c2/d6/00/c2d600f254fdba3bcd161747d8f40333.jpg",
            projectTitle: "Plant Shop - Plant Shop",
            projectLabel: "Website Solution",
            projectDesc:
              "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Delectus ex placeat voluptatibus modi?",
          }}
        >
          <LayoutCard.Image />
          <LayoutCard.Content />
        </LayoutCard>
        <LayoutCard
          content={{
            image:
              "https://i.pinimg.com/736x/0d/f3/02/0df302ff237b7f28f3cd268f188b7e44.jpg",
            projectTitle: "Clothy Shop - Clothy Shop",
            projectLabel: "Website Solution",
            projectDesc:
              "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Delectus ex placeat voluptatibus modi?",
          }}
        >
          <LayoutCard.Content />
          <LayoutCard.Image />
        </LayoutCard>
      </div>
    </section>
  );
}
