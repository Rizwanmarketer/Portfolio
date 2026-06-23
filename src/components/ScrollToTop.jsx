import { useState, useEffect } from "react";
import { ChevronUp } from "lucide-react";

function ScrollToTop() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setVisible(window.scrollY > 10900);
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <button
      onClick={scrollTop}
      className={`
      fixed
left-1/2
-translate-x-1/2
bottom-8
md:bottom-10
w-12
h-12

      rounded-full
      bg-blue-600
      text-white
      flex
      items-center
      justify-center
      shadow-[0_0_30px_rgba(37,99,235,.7)]
      hover:scale-110
      transition-all
      duration-500
      ${
        visible
          ? "opacity-100"
          : "opacity-0 pointer-events-none"
      }
      `}
    >
      <ChevronUp size={28} />
    </button>
  );
}

export default ScrollToTop;