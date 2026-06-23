import SocialLinks from "../components/SocialLinks";
import profileImage from "../assets/profile/rizwan-ullah-profile.webp";
import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import gsap from "gsap";

function Hero() {

  const professions = [
    "Digital Marketer",
    "Social Media Marketer",
    "Paid Advertising Specialist",
    "Social Media Manager"
  ];

  const [professionIndex, setProfessionIndex] = useState(0);

  const heroTextRef = useRef(null);
  const heroImageRef = useRef(null);

  useEffect(() => {

    const interval = setInterval(() => {

      setProfessionIndex((prev) =>
        (prev + 1) % professions.length
      );

    }, 6000);

    return () => clearInterval(interval);

  }, []);

  return (
    <section
      id="hero"
      className="min-h-screen flex items-center relative overflow-hidden pt-24 sm:pt-28 md:pt-32"
    >

      {/* Glow */}
      <div className="absolute top-20 left-20 h-72 w-72 bg-blue-600/20 rounded-full blur-[120px]"></div>

      <div className="absolute right-20 bottom-20 h-72 w-72 bg-purple-600/20 rounded-full blur-[120px]"></div>

      <div className="container-custom min-h-screen flex items-center">

        <div className="grid lg:grid-cols-2 items-center gap-12 md:gap-16 lg:gap-20 w-full">

          {/* Left */}
          <div className="space-y-8">

            <p className="text-blue-500 text-2xl sm:text-3xl md:text-4xl font-bold mb-2 text-center">
              Hello, I'm
            </p>

            <h1 className="text-5xl sm:text-6xl md:text-7xl font-bold leading-tight mb-12 md:mb-16 text-center">
              Rizwan
              <span className="text-blue-500"> Ullah</span>
            </h1>

            <div className="relative flex justify-center items-center">

              <div className="absolute w-[450px] h-[450px] bg-blue-600/20 rounded-full blur-[120px] pointer-events-none"></div>

              <div className="relative flex justify-center">

                <div className="profile-wrapper relative flex justify-center items-center">

                  <div
                    className="
                    rotate-ring
                    absolute
                    w-[250px] h-[250px]
                    md:w-[400px] md:h-[400px]
                    rounded-full
                    border-2
                    border-blue-500/40
                    border-t-blue-500
                    border-b-purple-500
                    pointer-events-none
                    "
                  ></div>

                  <img
                    src={profileImage}
                    alt=""
                    className="
                    relative
                    h-[220px] w-[220px]
                    md:h-[360px] md:w-[360px]
                    rounded-full
                    object-cover
                    border-4
                    border-blue-500
                    shadow-[0_0_70px_rgba(37,99,235,.5)]
                    "
                  />

                </div>

              </div>

            </div>

            <h2
              className="
              text-3xl md:text-4xl
              font-semibold
              text-white
              text-center
              min-h-[60px]
              flex justify-center items-center
              "
            >

              <AnimatePresence mode="wait">

                <motion.div
                  key={professionIndex}
                  initial={{
                    opacity: 0,
                    scale: 0.8
                  }}
                  animate={{
                    opacity: 1,
                    scale: 1
                  }}
                  exit={{
                    opacity: 0,
                    scale: 0.6
                  }}
                  transition={{
                    duration: 0.8
                  }}
                >

                  {professions[professionIndex]}

                </motion.div>

              </AnimatePresence>

            </h2>

            <p className="text-gray-400 leading-9 max-w-2xl text-center mx-auto">
              Passionate Digital Marketer focusing in Social Media Marketing,
              Social Media Management, Paid Advertising, and AI Integration to deliver impactful results that grow businesses.
            </p>

           <div className="flex flex-wrap justify-center gap-4 relative z-30">

  {/* Contact Button */}
  <a
    href="#contact"
    className="
    px-8 py-4
    rounded-2xl
    bg-blue-600
    hover:bg-blue-700
    hover:shadow-[0_0_30px_rgba(37,99,235,.7)]
    duration-300
    hover:-translate-y-1
    inline-flex items-center justify-center
    "
  >
    Contact Me
  </a>

  {/* Download CV Button */}
  <a
    href="/Rizwan-Ullah-CV.pdf"
    download
    className="
    px-8 py-4
    rounded-2xl
    border border-white/10
    bg-white/5
    hover:border-blue-500
    hover:bg-blue-500/10
    hover:shadow-[0_0_20px_rgba(37,99,235,.3)]
    duration-300
    hover:-translate-y-1
    inline-flex items-center justify-center
    "
  >
    Download CV
  </a>
  

            </div>

            <div className="flex justify-center">
  <SocialLinks />
</div>

          </div>

          {/* Right */}

          

        </div>

      </div>

    </section>
  );
}

export default Hero;