import { Icon } from "@iconify/react/dist/iconify.js";
import SubTitle from "./SubTitle";
import Line from "./Line";

export default function Testimonials() {
  return (
    <section className="big-container" id="testimonials">
      <div className="py-11">
        <div className="text-center mb-5 dark:text-gray-100">
          <SubTitle title="Clients Testimonials" />
          <div className="mainTitle mt-2.5">
            <h1 className="leading-tight">
              Testimonials that <br />
              <span className="text-greenAccent">Speak to My Results</span>
            </h1>
          </div>
        </div>
        <TestimonialsCarousel />
      </div>
      <Line />
    </section>
  );
}

const TestimonialsCarousel = () => {
  const data = [
    {
      name: "Sarah Chen",
      company: "CEO, Chic Threads Boutique",
      comment:
        "His expertise in creating a seamless and visually stunning e-commerce platform significantly improved our customer experience. From the responsive design to the robust backend, everything just works, and our sales have never been better. Highly recommend for any e-commerce business looking to elevate their online presence!",
      img: "https://images.unsplash.com/photo-1512361436605-a484bdb34b5f?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxjb2xsZWN0aW9uLXBhZ2V8MXwxQnZiNUlhMmRFb3x8ZW58MHx8fHx8",
    },
    {
      name: "David Green,",
      company: "CEO, Verdant Living Plants",
      comment:
        "We needed a custom solution to manage inventory, track plant health, and connect with our customers online, and he delivered perfectly. His full-stack development skills ensured our website is not only beautiful but also incredibly functional and easy to manage.",
      img: "https://images.unsplash.com/photo-1504257432389-52343af06ae3?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxjb2xsZWN0aW9uLXBhZ2V8MjJ8MUJ2YjVJYTJkRW98fGVufDB8fHx8fA%3D%3D",
    },
  ];
  const stars = [
    "material-symbols:star-rounded",
    "material-symbols:star-rounded",
    "material-symbols:star-rounded",
    "material-symbols:star-rounded",
    "material-symbols:star-rounded",
  ];
  return (
    <div className="grid lg:grid-cols-2 gap-7">
      {data.map((items, i) => (
        <div
          key={i}
          className="testimonial-card relative ring-[0.7px] ring-lightGray bg-gray-100  dark:bg-darkGray shadow-sm rounded-2xl p-5"
        >
          <div className="client lg:flex items-center justify-between dark:text-lightGray">
            <div className="info flex items-center gap-3">
              <div className="client-img w-24 h-24 max-[470px]:w-20 max-[470px]:h-20 rounded-full bg-white p-[4px]">
                <img
                  src={items.img}
                  alt=""
                  className="w-full h-full rounded-full"
                />
              </div>
              <div className="client-info">
                <h4 className="text-base font-medium dark:text-gray-100">
                  {items.name}
                </h4>
                <p className="text-xs my-1.5 text-gray-500 dark:text-lightGray">
                  {items.company}
                </p>
                <div className="flex items-center gap-1 text-greenAccent">
                  {stars.map((items, i) => (
                    <Icon key={i} icon={items} width="26" height="26" />
                  ))}
                  <span className="text-black  font-medium text-sm dark:text-gray-100">
                    5.0
                  </span>
                </div>
              </div>
            </div>
            <div className="!hidden lg:!flex d-flex rounded-full w-12 h-12 bg-white dark:bg-gray-500 text-greenAccent ">
              <Icon icon="gridicons:quote" width="34" height="34" />
            </div>
          </div>
          <div className="comments mt-4">
            <p className="webkit-line-clamp3 ellipsis text-sm text-gray-500 dark:text-lightGray leading-relaxed">
              {items.comment}
            </p>
          </div>
          <div className="line w-1.5 h-24 bg-greenAccent absolute top-6 left-0 -translate-x-full rounded-s-2xl" />
        </div>
      ))}
    </div>
  );
};
