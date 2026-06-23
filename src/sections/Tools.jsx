import SectionTitle from "../components/SectionTitle";

function Tools() {
  return (
    <section id="tools" className="py-32">
      <div className="container-custom">

        <SectionTitle title="Tools I Use" />

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">

          {/* Marketing Tools */}
          <div
            className="glass rounded-3xl p-8 transition-all duration-500 hover:-translate-y-2 hover:shadow-[0_0_30px_rgba(37,99,235,.3)]"
            data-aos="fade-right"
          >
            <h3 className="text-2xl font-bold mb-8 text-center">
              Marketing Tools
            </h3>

            <ul className="space-y-6 text-center font-sans">
  <li className="text-lg md:text-xl font-semibold text-gray-200 tracking-wide">
    Meta Business Suite
  </li>
  <li className="text-lg md:text-xl font-semibold text-gray-200 tracking-wide">
    Facebook Ads Manager
  </li>
  <li className="text-lg md:text-xl font-semibold text-gray-200 tracking-wide">
    Google Ads
  </li>
  <li className="text-lg md:text-xl font-semibold text-gray-200 tracking-wide">
    Google Analytics
  </li>
  <li className="text-lg md:text-xl font-semibold text-gray-200 tracking-wide">
    Google Search Console
  </li>
  <li className="text-lg md:text-xl font-semibold text-gray-200 tracking-wide">
    Google Tag Manager
  </li>
  <li className="text-lg md:text-xl font-semibold text-gray-200 tracking-wide">
    TikTok Ads Manager
  </li>
</ul>
          </div>

          {/* Content Tools */}
          <div
            className="glass rounded-3xl p-8 transition-all duration-500 hover:-translate-y-2 hover:shadow-[0_0_30px_rgba(37,99,235,.3)]"
            data-aos="fade-left"
          >
            <h3 className="text-2xl font-bold mb-8 text-center">
              Content Tools
            </h3>

            <ul  className="space-y-6 text-center font-sans">
              <li>Canva</li>
              <li>CapCut</li>
              <li>InShot</li>
              <li>Adobe Express</li>
              <li>PhotoRoom</li>
            </ul>
          </div>

          {/* Communication */}
          <div
            className="glass rounded-3xl p-8 transition-all duration-500 hover:-translate-y-2 hover:shadow-[0_0_30px_rgba(37,99,235,.3)]"
            data-aos="fade-right"
          >
            <h3 className="text-2xl font-bold mb-8 text-center">
              Communication
            </h3>

            <ul className="space-y-6 text-center font-sans">
              <li>Zoom</li>
              <li>Google Meet</li>
            </ul>
          </div>

        </div>

      </div>
    </section>
  );
}

export default Tools;