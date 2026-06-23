import SectionTitle from "../components/SectionTitle";
import {
  FaBullhorn,
  FaShareAlt,
  FaChartLine,
  FaPenNib,
  FaRobot,
  FaChartPie,
} from "react-icons/fa";

function Services() {
  const services = [
    {
      icon: <FaBullhorn size={40} />,
      title: "Digital Marketing",
      description:
        "Strategic marketing solutions to grow businesses and brands.",
    },

    {
      icon: <FaShareAlt size={40} />,
      title: "Social Media Marketing",
      description:
        "Building engagement and visibility through social platforms.",
    },

    {
      icon: <FaChartLine size={40} />,
      title: "Paid Advertising",
      description:
        "Running Meta, Google and TikTok ad campaigns effectively.",
    },

    {
      icon: <FaPenNib size={40} />,
      title: "Content Creation",
      description:
        "Creating engaging and professional marketing content.",
    },

    {
      icon: <FaRobot size={40} />,
      title: "AI Integration",
      description:
        "Using AI and automation to improve productivity and workflow.",
    },

    {
      icon: <FaChartPie size={40} />,
      title: "Analytics & Reporting",
      description:
        "Measuring performance and optimizing campaigns.",
    },
  ];

  return (
    <section id="services" className="py-32">

      <div className="container-custom">

        <SectionTitle
          title="Services"
        />

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">

          {services.map((service, index) => (

            <div
              key={index}
              className="
              glass
              rounded-3xl
              p-10
              hover:-translate-y-3
              duration-500
              "
              data-aos="fade-up" 
              data-aos-delay={index * 50}
              data-aos-delay={index * 150}
            >

              <div className="text-blue-500 mb-8">
                {service.icon}
              </div>

              <h3 className="text-2xl font-bold mb-5">
                {service.title}
              </h3>

              <p className="text-gray-400 leading-8">
                {service.description}
              </p>

            </div>

          ))}

        </div>

      </div>

    </section>
  );
}

export default Services;