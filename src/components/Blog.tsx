import Line from "./Line";
import SubTitle from "./SubTitle";

const data = [
  {
    blogImage:
      "https://i.pinimg.com/736x/5f/67/f6/5f67f6d14f82142300b967af7e7d8484.jpg",
    blogTitle:
      "Creating Seamless User Experiences: Web Design Lorem ipsum dolor sit.",
    blogTag: " UI/UX Design",
    blogDate: "20 November 2024",
    blogContent:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas rem sapiente et ducimus iusto, officiis aperiam! Vitae ullam est quidem!",
  },
  {
    blogImage:
      "https://i.pinimg.com/736x/5f/67/f6/5f67f6d14f82142300b967af7e7d8484.jpg",
    blogTitle:
      "Creating Seamless User Experiences: Web Design Lorem ipsum dolor sit.",
    blogTag: " UI/UX Design",
    blogDate: "20 November 2024",
    blogContent:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas rem sapiente et ducimus iusto, officiis aperiam! Vitae ullam est quidem!",
  },
  {
    blogImage:
      "https://i.pinimg.com/736x/5f/67/f6/5f67f6d14f82142300b967af7e7d8484.jpg",
    blogTitle:
      "Creating Seamless User Experiences: Web Design Lorem ipsum dolor sit.",
    blogTag: " UI/UX Design",
    blogDate: "20 November 2024",
    blogContent:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas rem sapiente et ducimus iusto, officiis aperiam! Vitae ullam est quidem!",
  },
];
export default function Blog() {
  return (
    <section className="big-container" id="blog">
      <div className="py-14">
        <div className="mb-8">
          <SubTitle title="News & Blogs" />
          <div className="mainTitle max-sm:text-center mt-2.5">
            <h1 className="leading-tight">
              Insights from {""}
              <span className="text-greenAccent">My Blogs</span>
            </h1>
          </div>
        </div>
        <div className="blog-container grid xl:grid-cols-3 sm:grid-cols-2 gap-6">
          {data.map((item, i) => (
            <div
              key={i}
              className="blog-card relative ring-[0.7px] ring-lightGray bg-gray-100 shadow-sm rounded-2xl p-3"
            >
              <div className="blog-image relative overflow-hidden w-full h-40 rounded-xl">
                <img
                  src={item.blogImage}
                  alt=""
                  className="w-full h-full rounded-xl"
                />
                <div className="background-cover w-full h-full opacity-20 bg-black absolute top-0 left-0 right-0" />
              </div>
              <div className="blog-tags text-[14px] font-medium my-3.5 flex items-center">
                <p className="px-3 py-2 bg-greenAccent rounded-3xl">
                  <span className="webkit-line-clamp1 ellipsis">
                    {item.blogTag}
                  </span>
                </p>
                <p className="px-3 py-2 bg-greenAccent rounded-3xl text-nowrap">
                  <span className="webkit-line-clamp1 ellipsis">
                    {item.blogDate}
                  </span>
                </p>
              </div>
              <div className="title">
                <h2 className="ellipsis font-semibold text-[21px] leading-tight">
                  {item.blogTitle}
                </h2>
              </div>
              <div className="blog-details text-gray-500 text-xs mt-3">
                <p className="ellipsis">{item.blogContent}</p>
              </div>
              <div className="line w-1.5 h-8 bg-greenAccent absolute bottom-1/3 left-0 -translate-x-full rounded-s-2xl" />
            </div>
          ))}
        </div>
      </div>
      <Line />
    </section>
  );
}
