import SectionTitle from "../components/SectionTitle";

import {
  FaBullhorn,
  FaShareAlt,
  FaChartLine,
  FaPenNib,
  FaRobot,
  FaChartPie,
} from "react-icons/fa";

import socialMediaManagementBg from "../assets/services/social-media-management.webp";
import paidAdvertisingStrategyBg from "../assets/services/paid-advertising-strategy.webp";
import contentAiBg from "../assets/services/content-ai.webp";
import brandAwarenessBg from "../assets/services/brand-awareness.webp";
import conversionOptimizationBg from "../assets/services/conversion-optimization.webp";
import funnelRetargetingBg from "../assets/services/funnel-retargeting.webp";
import analyticsGa4Bg from "../assets/services/analytics-ga4.webp";

function Services() {

const services = [

{
icon:<FaShareAlt size={40}/>,
bg:socialMediaManagementBg,
title:"Social Media Marketing & Management",
description:
"Growing brands through strategic social media marketing and audience engagement."
},

{
icon:<FaChartLine size={40}/>,
bg:paidAdvertisingStrategyBg,
title:"Paid Advertising & Campaign Strategy",
description:
"Running Meta, Google and TikTok campaigns with optimized strategies."
},

{
icon:<FaRobot size={40}/>,
bg:contentAiBg,
title:"Content Creation & AI Integration",
description:
"Creating engaging content with AI tools and automation."
},

{
icon:<FaBullhorn size={40}/>,
bg:brandAwarenessBg,
title:"Brand Positioning & Awareness",
description:
"Building strong brand identity and increasing visibility."
},

{
icon:<FaPenNib size={40}/>,
bg:conversionOptimizationBg,
title:"Conversion Optimization & A/B Testing",
description:
"Improving campaigns and landing pages through testing."
},

{
icon:<FaChartPie size={40}/>,
bg:funnelRetargetingBg,
title:" Marketing Funnel Strategy & Retargeting",
description:
"Building funnels and retargeting audiences to maximize conversions."
},

{
icon:<FaChartPie size={40}/>,
bg:analyticsGa4Bg,
title:"Data Analytics, GA4 & Pixel Tracking",
description:
"Tracking user behavior and optimizing marketing performance."
},

];
return (
  <section id="services" className="py-32">

    <div className="container-custom">

      <SectionTitle title="Services" />

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">

        {services.map((service, index) => (

          <div
  key={index}
  className="
  glass
  rounded-3xl
  overflow-hidden
  hover:-translate-y-3
  duration-500
  group
  "
  data-aos="fade-up"
  data-aos-delay={index * 150}
>

  <div className="relative h-56 overflow-hidden">

    <img
      src={service.bg}
      alt={service.title}
      className="
      w-full
      h-full
      object-cover
      group-hover:scale-110
      duration-700
      "
    />

    <div className="absolute inset-0 bg-black/40"></div>

    <div
      className="
      absolute top-5 left-5
      text-blue-500
      bg-black/40
      backdrop-blur-md
      p-3
      rounded-2xl
      z-10
      "
    >
      {service.icon}
    </div>

  </div>

  <div className="p-7 text-center">

    <h3
      className="
      text-xl
      font-bold
      leading-8
      bg-gradient-to-r
      from-blue-400
      to-fuchsia-500
      bg-clip-text
      text-transparent
      "
    >
      {service.title}
    </h3>

  </div>

</div>

        ))}

      </div>

    </div>

  </section>
);

}

export default Services;