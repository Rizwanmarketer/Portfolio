import React, { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("hero");

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);

      const sections = ["hero", "about", "services", "skills", "contact"];

      sections.forEach((section) => {
        const element = document.getElementById(section);

        if (element) {
          const top = element.offsetTop - 150;
          const height = element.offsetHeight;

          if (
            window.scrollY >= top &&
            window.scrollY < top + height
          ) {
            setActiveSection(section);
          }
        }
      });
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const navLink = (id, label) => (
    <li>
      <a
  href={`#${id}`}
  onClick={(e) => {
    e.preventDefault();

    document.getElementById(id)?.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });

    setTimeout(() => {
      setMenuOpen(false);
    }, 150);
  }}
        className={`transition-all duration-300 hover:text-blue-500 hover:scale-105 ${
          activeSection === id
? "text-blue-500 font-semibold bg-blue-500/10 px-4 py-2 rounded-xl"
: "text-gray-300"

        }`}
      >
        {label}
      </a>
    </li>
  );

  return (
    <header className="fixed top-0 left-0 w-full z-50">
      <nav className="container-custom">
        <div
          className={`
          mt-5
          rounded-3xl
          border border-white/10
          backdrop-blur-xl
          px-8
          py-5
          flex
          justify-between
          items-center
          transition-all duration-300
          ${
            scrolled
              ? "bg-slate-900/90 shadow-lg"
              : "bg-white/5"
          }
        `}
        >
          <div className="flex items-center gap-3">
  

  <h1 className="text-2xl font-bold">
    RizwanU<span className="text-blue-500">.DM</span>
  </h1>
</div>


          <ul className="hidden lg:flex gap-8">
            {navLink("hero", "Home")}
            {navLink("about", "About")}
            {navLink("services", "Services")}
            {navLink("skills", "Skills")}
            {navLink("contact", "Contact")}
          </ul>

          <button
            className="lg:hidden text-white"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            {menuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>

          {menuOpen && (
            <div className="absolute top-24 left-0 w-full rounded-3xl border border-white/10 bg-slate-900/95 backdrop-blur-xl p-6 lg:hidden">
              <ul className="flex flex-col gap-6">
                {navLink("hero", "Home")}
                {navLink("about", "About")}
                {navLink("services", "Services")}
                {navLink("skills", "Skills")}
                {navLink("contact", "Contact")}
              </ul>
            </div>
          )}
        </div>
      </nav>
    </header>
  );
}

export default Navbar;