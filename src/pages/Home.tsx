import About from "../components/About";
import Academic from "../components/Academic";
import Blog from "../components/Blog";
import Contact from "../components/Contact";
import Faq from "../components/Faq";
import Footer from "../components/Footer";
import Hero from "../components/Hero";
import Marquee from "../components/Marquee";
import Navbar from "../components/Navbar";
import Pricing from "../components/Pricing";
import Project from "../components/Project";
import Services from "../components/Services";
import Testimonials from "../components/Testimonials";
import Tools from "../components/Tools";

export default function Home() {
  return (
    <div>
      <Navbar />
      <Hero />
      <Marquee />
      <Services />
      <About />
      <Tools />
      <Marquee />
      <Project />
      <Marquee />
      <Academic />
      <Pricing />
      <Contact />
      <Marquee />
      <Testimonials />
      <Blog />
      <Faq />
      <Marquee />
      <Footer />
    </div>
  );
}
