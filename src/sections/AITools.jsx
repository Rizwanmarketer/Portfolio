
import SectionTitle from "../components/SectionTitle";

function AITools() {

  const aiTools = [
    { name: "ChatGPT", level: "★★★★½" },
    { name: "Claude", level: "★★★★½" },
    { name: "Higgsfield", level: "Intermediate" },
    { name: "n8n", level: "Intermediate" },
    { name: "Google Flow", level: "★★★★½" },
  ];

  return (
    <section id="ai-tools" className="py-32">

      <div className="container-custom">

        <SectionTitle title="AI & Automation" />

        <div className="grid grid-cols-2 lg:grid-cols-2 gap-5">

          {aiTools.map((tool, index) => (

            <div
              key={tool.name}
              data-aos="zoom-in"
              data-aos-delay={index * 100}
              className="
                rounded-2xl
                py-8
                px-5
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

              <h3 className="text-xl md:text-2xl font-bold text-white mb-3">
                {tool.name}
              </h3>

              <p className="text-gray-400 text-sm md:text-base">
                {tool.level}
              </p>

            </div>

          ))}

        </div>

      </div>

    </section>
  );
}

export default AITools;
