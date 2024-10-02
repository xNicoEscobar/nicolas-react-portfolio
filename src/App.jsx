import React from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Technologies from "./components/Technologies";
import Experience from "./components/Experience";
import ContactForm from "./components/ContactForm";
import Education from "./components/Education";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="scroll-smooth overflow-x-hidden text-neutral-300 antialiased selection:bg-neutral-700 selection:text-white">
      <div className="fixed top-0 -z-10 h-full w-full">
        <div className="absolute top-0 z-[-2] h-screen w-screen bg-neutral-950 bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(120,119,198,0.3),rgba(255,255,255,0))]"></div>
      </div>
      <div className="container mx-auto px-8 pt-20">
        <Navbar />
        <section id="hero" className="scroll-mt-20">
          <Hero />
        </section>
        <section id="about" className="scroll-mt-40">
          <About />
        </section>
        <section id="technologies" className="scroll-mt-40">
          <Technologies />
        </section>
        <section id="experience" className="scroll-mt-40">
          <Experience />
        </section>
        <section id="education" className="scroll-mt-40">
          <Education />
        </section>
        <section id="contact">
          <ContactForm />
        </section>
      </div>
      <Footer />
    </div>
  );
}

export default App;
