import SectionTitle from "../components/SectionTitle";

function Education() {
  return (
    <section id="education" className="py-32">

      <div className="container-custom">

        <SectionTitle
          title="Academic Journey"
        />

        <div
          className="glass rounded-3xl p-10"
          data-aos="zoom-in"
          data-aos-duration="1000"
        >

          <div className="flex flex-col gap-6 text-center">

            <div>

              <h3 className="text-3xl font-bold">
                (Intermediate)
              </h3>

              <p className="text-blue-500 mt-3 text-lg font-medium">
                GOVT Shaheed Abdul Majid Degree College Batkhela
              </p>

              <p className="text-gray-400 mt-5 leading-8 max-w-3xl mx-auto">
                Focused on computer studies and continuously improving digital marketing,
                AI integration, and business skills.
              </p>

            </div>

          </div>

        </div>

      </div>

    </section>
  );
}

export default Education;