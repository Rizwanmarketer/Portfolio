import SectionTitle from "../components/SectionTitle";

function AITools() {
  return (
    <section id="ai-tools" className="py-32">

      <div className="container-custom">

        <SectionTitle
          
          title="AI & Automation"
        />

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">

          <div
  className="
  glass rounded-3xl p-8 text-center
  transition-all duration-300
  hover:-translate-y-2
  hover:shadow-[0_0_30px_rgba(37,99,235,.4)]
  "
  data-aos="zoom-in"
  data-aos-delay="0"
>
            
            <h3 className="text-2xl font-bold mb-3">
              ChatGPT
            </h3>

            <p className="text-gray-400">
              ★★★★½
            </p>
          </div>

          <div
  className="
  glass rounded-3xl p-8 text-center
  transition-all duration-300
  hover:-translate-y-2
  hover:shadow-[0_0_30px_rgba(37,99,235,.4)]
  "
  data-aos="zoom-in"
  data-aos-delay="100"
>
            <h3 className="text-2xl font-bold mb-3">
              Claude
            </h3>

            <p className="text-gray-400">
              ★★★★½
            </p>
          </div>

          <div
  className="
  glass rounded-3xl p-8 text-center
  transition-all duration-300
  hover:-translate-y-2
  hover:shadow-[0_0_30px_rgba(37,99,235,.4)]
  "
  data-aos="zoom-in"
  data-aos-delay="100"
>
            <h3 className="text-2xl font-bold mb-3">
              Higgsfield
            </h3>

            <p className="text-gray-400">
              Intermediate
            </p>
          </div>

          <div
  className="
  glass rounded-3xl p-8 text-center
  transition-all duration-300
  hover:-translate-y-2
  hover:shadow-[0_0_30px_rgba(37,99,235,.4)]
  "
  data-aos="zoom-in"
  data-aos-delay="200"
>
  <h3 className="text-2xl font-bold mb-3">
              n8n
            </h3>

            <p className="text-gray-400">
              Intermediate
            </p>
          </div>

          <div
  className="
  glass rounded-3xl p-8 text-center
  transition-all duration-300
  hover:-translate-y-2
  hover:shadow-[0_0_30px_rgba(37,99,235,.4)]
  "
  data-aos="zoom-in"
  data-aos-delay="200"
  >
            <h3 className="text-2xl font-bold mb-3">
              Google Flow
            </h3>

            <p className="text-gray-400">
              ★★★★½
            </p>
          </div>

        </div>

      </div>

    </section>
  );
}

export default AITools;