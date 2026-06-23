import {
  FaFacebookF,
  FaLinkedinIn,
  FaEnvelope, 
} from "react-icons/fa";

function SocialLinks() {
  return (
    /* relative z-50 taake overlay ka masla na ho */
    <div className="flex items-center gap-4 relative z-50">

      {/* 1. Facebook Button */}
      <a
        href="https://www.facebook.com/rizwanullah.Digitalmarketer"
        target="_blank"
        rel="noopener noreferrer"
        className="
        h-12 w-12
        rounded-full
        border border-white/10
        bg-white/5
        flex items-center justify-center
        transition-all duration-300
        hover:bg-blue-600
        hover:-translate-y-2
        hover:scale-110
        hover:shadow-[0_0_25px_rgba(37,99,235,.7)]
        "
      >
        <FaFacebookF />
      </a>

      {/* 2. LinkedIn Button */}
      <a
        href="https://linkedin.com"
        target="_blank"
        rel="noopener noreferrer"
        className="
        h-12 w-12
        rounded-full
        border border-white/10
        bg-white/5
        flex items-center justify-center
        transition-all duration-300
        hover:bg-blue-600
        hover:-translate-y-2
        hover:scale-110
        hover:shadow-[0_0_25px_rgba(37,99,235,.7)]
        "
      >
        <FaLinkedinIn />
      </a>

      {/* 3. Real Gmail mailto Link (Bina target="_blank" ke) */}
      <a
        href="mailto:rizwanullah.marketer@gmail.com"
        className="
        h-12 w-12
        rounded-full
        border border-white/10
        bg-white/5
        flex items-center justify-center
        transition-all duration-300
        hover:bg-blue-600
        hover:-translate-y-2
        hover:scale-110
        hover:shadow-[0_0_25px_rgba(37,99,235,.7)]
        "
      >
        <FaEnvelope />
      </a>

    </div>
  );
}

export default SocialLinks;
