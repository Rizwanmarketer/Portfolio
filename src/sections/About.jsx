import SectionTitle from "../components/SectionTitle";

function About() {
  return (
    <section
      id="about"
      className="py-20"
    >
      <div className="container-custom">

        <SectionTitle title="About Me" />

        <div className="max-w-5xl mx-auto">

          <div
            className="
            relative
            overflow-hidden
            rounded-[32px]
            border border-white/10
            bg-white/[0.03]
            backdrop-blur-xl
            p-8 md:p-12
            shadow-[0_0_40px_rgba(37,99,235,.15)]
            hover:-translate-y-1
            hover:shadow-[0_0_50px_rgba(37,99,235,.25)]
            duration-500
            "
          >

            <div className="absolute -top-20 -right-20 w-52 h-52 bg-blue-600/10 rounded-full blur-[100px]"></div>

            <div className="space-y-10 relative z-10">

              {/* First Card */}
              <div
                data-aos="fade-up"
                className="
                border-l-4
                border-blue-500
                pl-6
                py-2
                "
              >
                <p className="text-gray-300 text-lg leading-10">
                  I am a passionate
                  <span className="text-blue-400 font-semibold">
                    {" "}Digital Marketer
                  </span>
                  {" "}with a strong interest in Social Media Marketing,
                  Social Media Management, Paid Advertising, and AI-powered
                  workflows. I focus on helping businesses and brands grow
                  through creative strategies and data-driven marketing
                  solutions.
                </p>
              </div>

              {/* Second Card */}
              <div
                data-aos="fade-up"
                data-aos-delay="150"
                className="
                border-l-4
                border-purple-500
                pl-6
                py-2
                "
              >
                <p className="text-gray-300 text-lg leading-10">
                  I continuously improve my skills by learning modern tools,
                  automation, and emerging technologies. With a
                  detail-oriented mindset and a passion for creativity,
                  I aim to deliver professional and effective marketing
                  solutions.
                </p>
              </div>

              {/* Skills */}
              <div
                data-aos="fade-up"
                data-aos-delay="300"
                className="
                flex
                flex-wrap
                gap-4
                pt-2
                "
              >
                
              </div>

            </div>

          </div>

        </div>

      </div>
    </section>
  );
}

export default About;