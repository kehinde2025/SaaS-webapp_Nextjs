import CTA from "./components/CTA";
import Features from "./components/Features";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import ProductCards from "./components/Productcards";
import Testimonials from "./components/Testimonials";

export default function Home() {
  return (
    <>
      <Hero />
      <Features />
      <ProductCards />
      <Testimonials />
      <CTA />
      <Footer />
    </>
  );
}
