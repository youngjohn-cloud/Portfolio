import { Icon } from "@iconify/react/dist/iconify.js";
import { createContext, useContext, type PropsWithChildren } from "react";

type Content = {
  image: string;
  projectTitle: string;
  projectLabel: string;
  projectDesc: string;
};
type ContentProps = PropsWithChildren & {
  content: Content;
};
type LayoutContext = {
  content: Content;
};
const LayoutContext = createContext<LayoutContext | undefined>(undefined);
const useLayoutContext = () => {
  const context = useContext(LayoutContext);
  if (!context)
    throw new Error("useLayoutContext must be used within a LayoutCard");
  return context;
};
export default function LayoutCard({ children, content }: ContentProps) {
  return (
    <LayoutContext.Provider value={{ content }}>
      <div className="grid lg:grid-cols-2 items-center gap-8 p-4 ring-[0.7px] ring-lightGray bg-gray-100 shadow-sm rounded-2xl">
        {children}
      </div>
    </LayoutContext.Provider>
  );
}
LayoutCard.Image = function LayoutCardImage() {
  const { content } = useLayoutContext();
  return (
    <div className="card-image">
      <img src={content.image} alt="" className="max-h-96 rounded-xl" />
    </div>
  );
};
LayoutCard.Content = function LayoutCardContent() {
  const { content } = useLayoutContext();
  return (
    <div className="layout-content">
      <div className="flex items-center flex-wrap gap-1.5">
        <span className="px-3 font-semibold py-2 bg-greenAccent text-[13px] rounded-2xl">
          Front-End Dev
        </span>
        <span className="px-3 font-semibold py-2 bg-greenAccent text-[13px] rounded-2xl">
          Back-End Dev
        </span>
        <span className="px-3 font-semibold py-2 bg-greenAccent text-[13px] rounded-2xl">
          UI/UX Design
        </span>
      </div>
      <div className="layout-title my-3">
        <h2 className="text-xl font-medium leading-tight">
          {content.projectTitle}
          <br /> {content.projectLabel}
        </h2>
      </div>
      <div className="layout-description text-sm leading-normal text-gray-400 max-w-96 mb-4">
        <p>{content.projectDesc}</p>
      </div>
      <div className="icon-link w-8 h-8 d-flex rounded-full ring-[0.9px] ring-lightGray">
        <Icon
          className="-rotate-45"
          icon="guidance:left-arrow"
          width="20"
          height="20"
          strokeWidth={2}
        />
      </div>
    </div>
  );
};
