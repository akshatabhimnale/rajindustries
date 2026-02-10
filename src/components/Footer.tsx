import {
  FaLinkedin,
  FaFacebookF,
  FaYoutube,
  FaXing,
} from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="w-full">
      {/* Main Footer */}
      <div className="bg-gray-700 text-white px-6 sm:px-10 lg:px-16 py-12 sm:py-14 lg:py-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-14">

        {/* Column 1 - RAJ INDUSTRIES */}
        <div>
          <h4 className="
            text-sm uppercase tracking-wide mb-4 
            inline-block relative group
          ">
            RAJ INDUSTRIES
            <span className="
              absolute left-0 bottom-0 w-0 h-[2px] bg-[#d60f3c]
              group-hover:w-full transition-all duration-300
            "></span>
          </h4>

          <p className="text-[#d60f3c] mb-2 font-semibold tracking-wide">
            Connect to Future
          </p>

          <p className="text-sm opacity-80 leading-relaxed">
            Your reliable partner for automotive and industrial wiring
            solutions worldwide, delivering innovation, precision, and trust.
          </p>
        </div>

        {/* Column 2 - PRODUCTS */}
        <div>
          <h4 className="
            text-sm uppercase tracking-wide mb-4 
            inline-block relative group
          ">
            Products
            <span className="
              absolute left-0 bottom-0 w-0 h-[2px] bg-[#d60f3c]
              group-hover:w-full transition-all duration-300
            "></span>
          </h4>

          <ul className="space-y-3 text-sm opacity-80">
            {[
              "Automotive Harnesses",
              "Industrial Solutions",
              "Custom Assemblies",
              "High-Voltage Systems",
            ].map((item) => (
              <li
                key={item}
                className="
                  cursor-pointer
                  hover:text-[#d60f3c]
                  transition-colors duration-200
                "
              >
                — {item}
              </li>
            ))}
          </ul>
        </div>

        {/* Column 3 - COMPANY + SOCIAL */}
        <div>
          <h4 className="
            text-sm uppercase tracking-wide mb-4 
            inline-block relative group
          ">
            Company
            <span className="
              absolute left-0 bottom-0 w-0 h-[2px] bg-[#d60f3c]
              group-hover:w-full transition-all duration-300
            "></span>
          </h4>

          <ul className="space-y-3 text-sm opacity-80 mb-6">
            {["About Us", "Services", "Contact", "Careers"].map((item) => (
              <li
                key={item}
                className="
                  cursor-pointer
                  hover:text-[#d60f3c]
                  transition-colors duration-200
                "
              >
                → {item}
              </li>
            ))}
          </ul>

        
        </div>

        {/* Column 4 - CONTACT */}
        <div>
          <h4 className="
            text-sm uppercase tracking-wide mb-4 
            inline-block relative group
          ">
            Contact
            <span className="
              absolute left-0 bottom-0 w-0 h-[2px] bg-[#d60f3c]
              group-hover:w-full transition-all duration-300
            "></span>
          </h4>

          <p className="text-sm opacity-80 leading-relaxed mb-3">
            Industrial Area, Phase 2 <br />
            Manufacturing Hub, India
          </p>

          <p className="text-sm opacity-80 mb-1">
            Email:{" "}
            <a
              href="mailto:info@rajindustries.com"
              className="underline hover:text-[#d60f3c] transition-colors"
            >
              info@rajindustries.com
            </a>
          </p>

          <p className="text-sm opacity-80">
            Phone: +91 XXX XXX XXXX
          </p>
              <div className="mt-6"></div>

            <h4 className="
            text-sm uppercase tracking-wide mb-4 
            inline-block relative group
          ">
            Follow Us
            <span className="
              absolute left-0 bottom-0 w-0 h-[2px] bg-[#d60f3c]
              group-hover:w-full transition-all duration-300
            "></span>
          </h4>

          <div className="flex items-center gap-5 text-lg">
            <FaLinkedin className="cursor-pointer hover:text-[#d60f3c] transition-transform transform hover:scale-110" />
            <FaFacebookF className="cursor-pointer hover:text-[#d60f3c] transition-transform transform hover:scale-110" />
            <FaYoutube className="cursor-pointer hover:text-[#d60f3c] transition-transform transform hover:scale-110" />
            <FaXing className="cursor-pointer hover:text-[#d60f3c] transition-transform transform hover:scale-110" />
          </div>
        </div>
         
      </div>

      {/* Bottom Bar */}
      <div className="bg-black text-gray-300 text-sm px-6 sm:px-10 lg:px-16 py-4 text-center tracking-wide">
        © 2026 Raj Industries. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
