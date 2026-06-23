import { FaWhatsapp } from "react-icons/fa";
import { useEffect, useState } from "react";

function WhatsAppButton() {
const [opacity, setOpacity] = useState(0);

useEffect(() => {
const handleScroll = () => {
const toolsSection = document.getElementById("tools");

  if (!toolsSection) return;

  const rect = toolsSection.getBoundingClientRect();

  // Fade area: screen ke 80% se 20% tak
  let value = (window.innerHeight * 0.8 - rect.top) / (window.innerHeight * 0.6);

  value = Math.max(0, Math.min(1, value));

  setOpacity(value);
};

window.addEventListener("scroll", handleScroll);
handleScroll();

return () => window.removeEventListener("scroll", handleScroll);

}, []);

return (
<a
href="https://wa.me/923123353027"
target="_blank"
rel="noopener noreferrer"
style={{
opacity,
pointerEvents: opacity === 0 ? "none" : "auto",
}}
className="
whatsapp-float
fixed
bottom-10
right-4
md:bottom-12
md:right-5
z-50
w-16
h-16
md:w-[68px]
md:h-[68px]
rounded-full
scroll-wave
bg-green-500
flex
items-center
justify-center
text-white
text-4xl
shadow-[0_0_35px_rgba(34,197,94,.8)]
hover:scale-110
transition-all
duration-300
"
> <FaWhatsapp /> </a>
);
}

export default WhatsAppButton;