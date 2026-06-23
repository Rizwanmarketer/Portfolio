import SectionTitle from "../components/SectionTitle";
import introMarketing from "../assets/certificates/introduction-to-marketing.webp";
import uetMarketing from "../assets/certificates/uet-digital-marketing.webp";
import digiSkillsMarketing from "../assets/certificates/digiskills-digital-marketing.webp";

function Certificates() {

const certificates = [

{
title: "Introduction to Marketing",
organization: "The Wharton School, University of Pennsylvania",
image: introMarketing,
verifyLink:
"https://www.coursera.org/account/accomplishments/verify/JZ2XXF6JTPWI"
},

{
title: "Digital Marketing Physical Training Program",
organization: "UET Peshawar",
image: uetMarketing,
verifyLink:
"https://script.google.com/macros/s/AKfycbxJgd5LPIypDubyNmAH9s3rA3JcoTmmzkYCi6WqHW0Y7KtIGC40p9LJE8V66PWjiptZnA/exec?cnic=1540257240223"
},

{
title: "Digital Marketing Course",
organization: "DigiSkills.pk",
image: digiSkillsMarketing,
verifyLink:
"https://digiskills.pk/verify/"
}

];


return (


<section id="certificates" className="py-32">

  <div className="container-custom">

    <SectionTitle title="My Certifications" />

    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">

      {certificates.map((certificate, index) => (

        <div
          key={index}
          className="glass rounded-3xl overflow-hidden hover:-translate-y-2 duration-500 hover:shadow-[0_0_40px_rgba(37,99,235,.3)]"
          data-aos="fade-up"
          data-aos-delay={index * 150}
        >

          <img
            src={certificate.image}
            alt={certificate.title}
            className="w-full h-56 object-cover"
          />

          <div className="p-8">

            <h3 className="text-2xl font-bold leading-8 mb-3">
              {certificate.title}
            </h3>

            <p className="text-gray-400 mb-8">
              {certificate.organization}
            </p>

            <div className="space-y-4">

              <button
                onClick={() => window.open(certificate.image, "_blank")}
                className="
                w-full
                py-4
                rounded-2xl
                bg-blue-600
                hover:bg-blue-700
                duration-300
                font-semibold
                "
              >
                View Certificate
              </button>

              <button
                onClick={() => window.open(certificate.verifyLink, "_blank")}
                className="
                w-full
                py-4
                rounded-2xl
                border border-white/10
                bg-white/5
                hover:border-blue-500
                hover:bg-blue-500/10
                duration-300
                font-semibold
                "
              >
                Verify Credential
              </button>

            </div>

          </div>

        </div>

      ))}

    </div>

  </div>

</section>


);

}

export default Certificates;
