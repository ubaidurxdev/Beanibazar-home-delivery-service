import AboutUs from "@/components/layouts/AboutUs";
import Footer from "@/components/layouts/Footer";
import Hero from "@/components/layouts/Hero";
import Navbar from "@/components/layouts/Navbar";
import Services from "@/components/layouts/Services";
import Testimonials from "@/components/layouts/Testimonials";

export default function Home() {
  return (
    <>
    <Navbar/>
    <Hero/>
    <AboutUs/>
    <Services/>
    <Testimonials/>
    <Footer/>
    </>
  );
}
