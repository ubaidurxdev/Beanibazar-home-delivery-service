import AboutUs from "@/components/layouts/AboutUs";
import FAQ from "@/components/layouts/Faq";
import Footer from "@/components/layouts/Footer";
import Hero from "@/components/layouts/Hero";
import Navbar from "@/components/layouts/Navbar";
import Services from "@/components/layouts/Services";
import Testimonials from "@/components/layouts/Testimonials";
import DeveloperBadge from "@/components/layouts/Toast";

export default function Home() {
  return (
    <>
    <Navbar/>
    <Hero/>
    <AboutUs/>
    <Services/>
    <Testimonials/>
    <FAQ/>
    <DeveloperBadge/>
    <Footer/>
    </>
  );
}
