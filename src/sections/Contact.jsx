import { useState, useRef } from "react";
import emailjs from "@emailjs/browser";
import SectionTitle from "../components/SectionTitle";

function Contact() {
  const formRef = useRef();
  const contactSectionRef = useRef();
  const [isSending, setIsSending] = useState(false);
  const [isSent, setIsSent] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSending(true);

    // Click event ko direct handle karne ka bilkul standard modern package method
    emailjs.sendForm(
      'service_7ozz1o9', 
      'template_rcrlwjy', 
      formRef.current, 
      { publicKey: 'fhSIdsSwsz_UG65te' } // React npm package ka correct format
    )
    .then(() => {
      setIsSending(false);
      setIsSent(true);
      
      // Auto-scroll logic
      setTimeout(() => {
        contactSectionRef.current?.scrollIntoView({ behavior: "smooth", block: "center" });
      }, 100);
    })
    .catch((error) => {
      console.error("EmailJS Error:", error);
      alert("Failed to send message: " + (error.text || "Check configuration"));
      setIsSending(false);
    });
  };

  return (
    <section ref={contactSectionRef} id="contact" className="py-32">
      <div className="container-custom">
        <SectionTitle
          title="Let's Work Together"
        />

        <div className="grid lg:grid-cols-2 gap-10">
          
          {/* Quick Message Form */}
          <div
            className="glass rounded-3xl p-10 transition-all duration-300 hover:-translate-y-2 hover:shadow-[0_0_30px_rgba(37,99,235,.3)]"
            data-aos="fade-right"
          >
            <h3 className="text-3xl font-bold mb-8">Quick Message</h3>

            {!isSent ? (
              <form ref={formRef} onSubmit={handleSubmit} className="space-y-5">
                <input
                  type="text"
                  name="name" 
                  placeholder="Your Name"
                  required
                  className="w-full p-4 rounded-2xl bg-white/5 border border-white/10 outline-none focus:border-blue-500 duration-300 text-white"
                />

                <input
                  type="email"
                  name="email" 
                  placeholder="Your Email"
                  required
                  className="w-full p-4 rounded-2xl bg-white/5 border border-white/10 outline-none focus:border-blue-500 duration-300 text-white"
                />

                <textarea
                  rows="5"
                  name="message" 
                  placeholder="Message"
                  required
                  className="w-full p-4 rounded-2xl bg-white/5 border border-white/10 outline-none focus:border-blue-500 duration-300 text-white"
                ></textarea>

                <button
                  type="submit"
                  disabled={isSending}
                  className="px-8 py-4 rounded-2xl bg-blue-600 hover:bg-blue-700 hover:-translate-y-1 hover:shadow-[0_0_30px_rgba(37,99,235,.7)] duration-300 text-white cursor-pointer relative z-20"
                >
                  {isSending ? "Sending..." : "Send Message"}
                </button>
              </form>
            ) : (
              <div className="flex flex-col items-center justify-center py-10 text-center space-y-4 animate-fade-in">
                <div className="w-20 h-20 bg-green-500/10 border border-green-500/30 text-green-500 rounded-full flex items-center justify-center text-4xl shadow-[0_0_20px_rgba(34,197,94,0.2)]">
                  ✔️
                </div>
                <h4 className="text-2xl font-bold text-white">Message Sent!</h4>
                <p className="text-gray-400 max-w-xs">
                  Thank you for reaching out. I have received your message and will get back to you soon.
                </p>
              </div>
            )}
          </div>

          {/* Availability Card */}
          <div
            className="glass rounded-3xl p-6 sm:p-10 flex flex-col transition-all duration-300 hover:-translate-y-2 hover:shadow-[0_0_30px_rgba(37,99,235,.3)]"
            data-aos="fade-left"
          >
            <h3 className="text-2xl sm:text-3xl font-bold mb-8 text-white text-center w-full tracking-wide">
              Availability
            </h3>

            <div className="space-y-6 text-gray-300 text-lg sm:text-xl font-medium w-full flex flex-col items-start pl-2 sm:pl-4">
              <div className="flex items-center text-left whitespace-nowrap">
                <span className="text-xl sm:text-2xl mr-2">🚀</span>
                <span>Freelance: <span className="text-gray-400 font-normal">Available</span></span>
              </div>

              <div className="flex items-center text-left whitespace-nowrap">
                <span className="text-xl sm:text-2xl mr-2">💼</span>
                <span>On-Site: <span className="text-gray-400 font-normal">Available</span></span>
              </div>

              <div className="flex items-center text-left w-full whitespace-nowrap">
                <span className="text-xl sm:text-2xl mr-2">📍</span>
                <span>Batkhela, Malakand, KPk, Pakistan</span>
              </div>

              <div className="pt-6 border-t border-white/5 w-full text-left">
                <h4 className="text-xs font-semibold tracking-wider uppercase opacity-60 text-white mb-3 flex items-center">
                  <span className="mr-2 text-sm">🗣️</span> Languages
                </h4>
                <div className="flex flex-row flex-nowrap justify-between sm:justify-start gap-1.5 sm:gap-3 w-full overflow-x-auto no-scrollbar">
                  <div className="bg-white/5 border border-white/10 px-2 sm:px-3 py-1 rounded-xl flex flex-col items-start flex-1 sm:flex-initial min-w-[78px] sm:min-w-[90px]">
                    <span className="text-white text-xs sm:text-sm font-semibold leading-tight">English</span>
                    <span className="text-gray-400 text-[9px] mt-0.5 font-normal lowercase">intermediate</span>
                  </div>
                  <div className="bg-white/5 border border-white/10 px-2 sm:px-3 py-1 rounded-xl flex flex-col items-start flex-1 sm:flex-initial min-w-[78px] sm:min-w-[90px]">
                    <span className="text-white text-xs sm:text-sm font-semibold leading-tight">Urdu</span>
                    <span className="text-gray-400 text-[9px] mt-0.5 font-normal lowercase">fluent</span>
                  </div>
                  <div className="bg-white/5 border border-white/10 px-2 sm:px-3 py-1 rounded-xl flex flex-col items-start flex-1 sm:flex-initial min-w-[78px] sm:min-w-[90px]">
                    <span className="text-white text-xs sm:text-sm font-semibold leading-tight">Pashto</span>
                    <span className="text-gray-400 text-[9px] mt-0.5 font-normal lowercase">fluent</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}

export default Contact;
