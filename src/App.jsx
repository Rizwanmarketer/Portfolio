import Loader from "./components/Loader";
import { useEffect, useState } from "react";

import Navbar from "./components/Navbar";
import ScrollProgress from "./components/ScrollProgress";
import WhatsAppButton from "./components/WhatsAppButton";
import ScrollToTop from "./components/ScrollToTop";

import Hero from "./sections/Hero";
import About from "./sections/About";
import Services from "./sections/Services";
import Skills from "./sections/Skills";
import Tools from "./sections/Tools";
import AITools from "./sections/AITools";
import Certificates from "./sections/Certificates";
import Education from "./sections/Education";
import Contact from "./sections/Contact";
import Footer from "./sections/Footer";

function App() {
  const [loading, setLoading] = useState(true);

useEffect(() => {
  const timer = setTimeout(() => {
    setLoading(false);
  }, 2500);

  return () => clearTimeout(timer);
}, []);
if (loading) {
  return <Loader />;
}
return ( <div className="overflow-x-hidden"> <ScrollProgress /> <Navbar />

  <Hero />
  <About />
  <Services />
  <Skills />
  <Tools />
  <AITools />
  <Certificates />
  <Education />
  <Contact />
  <Footer />

  <ScrollToTop />
  <WhatsAppButton />
</div>

);
}

export default App;
