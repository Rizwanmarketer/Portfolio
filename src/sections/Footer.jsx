import SocialLinks from "../components/SocialLinks";

function Footer() {
return ( <footer className="py-10 border-t border-white/10">


  <div className="container-custom">

    <div className="flex flex-col items-center gap-6 text-center">

      <div>

        <h2 className="text-3xl font-bold">
          Rizwan Ullah<span className="text-blue-500"></span>
        </h2>

        <p className="text-gray-400 mt-3">
          Digital Marketer | Social Media Marketer |
          Paid Advertising Expert
        </p>

      </div>

      <SocialLinks />

      

      <div className="text-gray-500 text-sm">
        Designed & Developed by
        <span className="text-blue-500 font-medium">
          {" "}Rizwan Ullah
        </span>
      </div>
      <div className="text-gray-400 text-sm">
        © {new Date().getFullYear()} All Rights Reserved.
      </div>

    </div>

  </div>

</footer>
);
}

export default Footer;
