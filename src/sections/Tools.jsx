import SectionTitle from "../components/SectionTitle";

function Tools() {

  const marketingTools = [
    "Meta Business Suite",
    "Facebook Ads Manager",
    "Google Ads",
    "Google Analytics",
    "Google Search Console",
    "Google Tag Manager",
    "TikTok Ads Manager",
  ];

  const contentTools = [
    "Canva",
    "CapCut",
    "InShot",
    "Adobe Express",
    "PhotoRoom",
  ];

  const communicationTools = [
    "Zoom",
    "Google Meet",
  ];

  return (
    <section id="tools" className="py-32">

      <div className="container-custom">

        <SectionTitle title="Tools I Use" />

        <div className="grid lg:grid-cols-3 gap-14">

          {/* Marketing */}
          <div data-aos="fade-right">

            <h3 className="text-xl md:text-2xl font-bold text-center mb-8 bg-gradient-to-r from-blue-500 to-violet-500 bg-clip-text text-transparent">
              Marketing Tools
            </h3>

            <div className="grid grid-cols-2 gap-5">

              {marketingTools.map((tool, index) => (

                <div
                  key={tool}
                  data-aos="zoom-in"
                  data-aos-delay={index * 100}
                  className="
                    rounded-2xl
                    py-6
                    px-3
                    text-center
                    bg-[#0b1630]
                    border
                    border-blue-500/10
                    shadow-[0_0_15px_rgba(37,99,235,.08)]
                    transition-all
                    duration-500
                    hover:-translate-y-2
                    hover:bg-[#102040]
                    hover:border-blue-500/30
                    hover:shadow-[0_0_25px_rgba(37,99,235,.25)]
                  "
                >
                  <h4 className="text-sm md:text-base font-semibold text-white leading-snug">
                    {tool}
                  </h4>
                </div>

              ))}

            </div>

          </div>

          {/* Content */}
          <div data-aos="fade-up">

            <h3 className="text-xl md:text-2xl font-bold text-center mb-8 bg-gradient-to-r from-blue-500 to-violet-500 bg-clip-text text-transparent">
              Content Tools
            </h3>

            <div className="grid grid-cols-2 gap-5">

              {contentTools.map((tool, index) => (

                <div
                  key={tool}
                  data-aos="zoom-in"
                  data-aos-delay={index * 100}
                  className="
                    rounded-2xl
                    py-6
                    px-3
                    text-center
                    bg-[#0b1630]
                    border
                    border-blue-500/10
                    shadow-[0_0_15px_rgba(37,99,235,.08)]
                    transition-all
                    duration-500
                    hover:-translate-y-2
                    hover:bg-[#102040]
                    hover:border-blue-500/30
                    hover:shadow-[0_0_25px_rgba(37,99,235,.25)]
                  "
                >
                  <h4 className="text-sm md:text-base font-semibold text-white leading-snug">
                    {tool}
                  </h4>
                </div>

              ))}

            </div>

          </div>

          {/* Communication */}
          <div data-aos="fade-left">

            <h3 className="text-xl md:text-2xl font-bold text-center mb-8 bg-gradient-to-r from-blue-500 to-violet-500 bg-clip-text text-transparent">
              Communication
            </h3>

            <div className="grid grid-cols-2 gap-5">

              {communicationTools.map((tool, index) => (

                <div
                  key={tool}
                  data-aos="zoom-in"
                  data-aos-delay={index * 100}
                  className="
                    rounded-2xl
                    py-6
                    px-3
                    text-center
                    bg-[#0b1630]
                    border
                    border-blue-500/10
                    shadow-[0_0_15px_rgba(37,99,235,.08)]
                    transition-all
                    duration-500
                    hover:-translate-y-2
                    hover:bg-[#102040]
                    hover:border-blue-500/30
                    hover:shadow-[0_0_25px_rgba(37,99,235,.25)]
                  "
                >
                  <h4 className="text-sm md:text-base font-semibold text-white leading-snug">
                    {tool}
                  </h4>
                </div>

              ))}

            </div>

          </div>

        </div>

      </div>

    </section>
  );
}

export default Tools;
