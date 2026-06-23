import SectionTitle from "../components/SectionTitle";

function Skills() {
  return (
    <section
      id="skills"
      className="py-32"
    >
      <div className="container-custom">

        <SectionTitle
          title="My Skills"
        />

        <div className="grid lg:grid-cols-2 gap-8">

          {/* Marketing Skills */}
          <div
            className="glass rounded-3xl p-8"
            data-aos="zoom-in"
            data-aos-delay="0"
          >
            <h3 className="text-2xl font-bold mb-8">
              Marketing Skills
            </h3>

            <div className="space-y-6">

              <div>
                <p className="mb-2">Social Media Marketing</p>
                <div className="h-3 bg-white/10 rounded-full overflow-hidden">
                  <div
                    className="h-3 bg-blue-600 rounded-full w-[90%] transition-all duration-[1800ms]"
                    data-aos="fade-right"
                  ></div>
                </div>
              </div>

              <div>
                <p className="mb-2">Paid Advertising</p>
                <div className="h-3 bg-white/10 rounded-full overflow-hidden">
                  <div
                    className="h-3 bg-blue-600 rounded-full w-[85%] transition-all duration-[1800ms]"
                    data-aos="fade-right"
                    data-aos-delay="200"
                  ></div>
                </div>
              </div>

              <div>
                <p className="mb-2">Content Creation</p>
                <div className="h-3 bg-white/10 rounded-full overflow-hidden">
                  <div
                    className="h-3 bg-blue-600 rounded-full w-[75%] transition-all duration-[1800ms]"
                    data-aos="fade-right"
                    data-aos-delay="400"
                  ></div>
                </div>
              </div>

              <div>
                <p className="mb-2">AI Integration</p>
                <div className="h-3 bg-white/10 rounded-full overflow-hidden">
                  <div
                    className="h-3 bg-blue-600 rounded-full w-[85%] transition-all duration-[1800ms]"
                    data-aos="fade-right"
                    data-aos-delay="600"
                  ></div>
                </div>
              </div>

            </div>

          </div>

          {/* Soft Skills */}
          <div
            className="glass rounded-3xl p-8"
            data-aos="zoom-in"
            data-aos-delay="200"
          >
            <h3 className="text-2xl font-bold mb-8">
              Soft Skills
            </h3>

            <div className="space-y-6">

              <div>
                <p className="mb-2">Communication</p>
                <div className="h-3 bg-white/10 rounded-full overflow-hidden">
                  <div
                    className="h-3 bg-purple-600 rounded-full w-[92%] transition-all duration-[1800ms]"
                    data-aos="fade-right"
                  ></div>
                </div>
              </div>

              <div>
                <p className="mb-2">Creative Thinking</p>
                <div className="h-3 bg-white/10 rounded-full overflow-hidden">
                  <div
                    className="h-3 bg-purple-600 rounded-full w-[85%] transition-all duration-[1800ms]"
                    data-aos="fade-right"
                    data-aos-delay="200"
                  ></div>
                </div>
              </div>

              <div>
                <p className="mb-2">Attention To Detail</p>
                <div className="h-3 bg-white/10 rounded-full overflow-hidden">
                  <div
                    className="h-3 bg-purple-600 rounded-full w-[92%] transition-all duration-[1800ms]"
                    data-aos="fade-right"
                    data-aos-delay="400"
                  ></div>
                </div>
              </div>

            </div>

          </div>

        </div>

      </div>
    </section>
  );
}

export default Skills;