import { useState } from "react";
import { Link, NavLink } from "react-router-dom";

const Header = () => {
  const [open, setOpen] = useState<boolean>(false);

  return (
    <header className="w-full border-b bg-white">
      <div className="max-w-7xl mx-auto px-6 py-5 flex items-center justify-between">

        {/* LOGO */}
        <Link to="/" className="text-2xl tracking-wider font-light cursor-pointer">
          <span className="font-semibold" style={{ color: "#d60f3c" }}>Raj</span>
          <span className="text-black">Industries</span>
        </Link>

        {/* Desktop Menu */}
        <nav className="hidden md:flex items-center gap-2 text-sm tracking-wider">
          <NavLink
            to="/"
            className={({ isActive }) =>
              [
                "px-4 py-2 transition-colors duration-200",
                isActive
                  ? "bg-[#d60f3c] text-white"
                  : "bg-white text-gray-700 hover:bg-[#d60f3c] hover:text-white",
              ].join(" ")
            }
          >
            HOME
          </NavLink>
          <NavLink
            to="/products"
            className={({ isActive }) =>
              [
                "px-4 py-2 transition-colors duration-200",
                isActive
                  ? "bg-[#d60f3c] text-white"
                  : "bg-white text-black hover:bg-[#d60f3c] hover:text-white",
              ].join(" ")
            }
          >
            PRODUCTS
          </NavLink>

          <NavLink
            to="/about"
            className={({ isActive }) =>
              [
                "px-4 py-2 transition-colors duration-200",
                isActive
                  ? "bg-[#d60f3c] text-white"
                  : "bg-white text-gray-700 hover:bg-[#d60f3c] hover:text-white",
              ].join(" ")
            }
          >
            ABOUT US
          </NavLink>

          <NavLink
            to="/services"
            className={({ isActive }) =>
              [
                "px-4 py-2 transition-colors duration-200",
                isActive
                  ? "bg-[#d60f3c] text-white"
                  : "bg-white text-gray-700 hover:bg-[#d60f3c] hover:text-white",
              ].join(" ")
            }
          >
            SERVICES
          </NavLink>

          <NavLink
            to="/contact"
            className={({ isActive }) =>
              [
                "px-4 py-2 transition-colors duration-200",
                isActive
                  ? "bg-[#d60f3c] text-white"
                  : "bg-white text-gray-700 hover:bg-[#d60f3c] hover:text-white",
              ].join(" ")
            }
          >
            CONTACT US
          </NavLink>
        </nav>

        {/* Mobile Hamburger */}
        <button
          className="md:hidden text-2xl"
          onClick={() => setOpen(!open)}
          aria-label="Toggle Menu"
        >
          ☰
        </button>
      </div>

      {/* Mobile Menu */}
      {open && (
        <div className="md:hidden bg-white border-t">
          <div className="flex flex-col items-start px-6 py-4 gap-4 text-sm">
            <NavLink
              to="/"
              className={({ isActive }) =>
                [
                  "px-4 py-2 w-full transition-colors",
                  isActive
                    ? "bg-[#d60f3c] text-white"
                    : "hover:bg-[#d60f3c] hover:text-white",
                ].join(" ")
              }
            >
              HOME
            </NavLink>
            <NavLink
              to="/products"
              className={({ isActive }) =>
                [
                  "px-4 py-2 w-full transition-colors",
                  isActive
                    ? "bg-[#d60f3c] text-white"
                    : "hover:bg-[#d60f3c] hover:text-white",
                ].join(" ")
              }
            >
              PRODUCTS
            </NavLink>
            <NavLink
              to="/about"
              className={({ isActive }) =>
                [
                  "px-4 py-2 w-full transition-colors",
                  isActive
                    ? "bg-[#d60f3c] text-white"
                    : "hover:bg-[#d60f3c] hover:text-white",
                ].join(" ")
              }
            >
              ABOUT US
            </NavLink>
            <NavLink
              to="/services"
              className={({ isActive }) =>
                [
                  "px-4 py-2 w-full transition-colors",
                  isActive
                    ? "bg-[#d60f3c] text-white"
                    : "hover:bg-[#d60f3c] hover:text-white",
                ].join(" ")
              }
            >
              SERVICES
            </NavLink>
            <NavLink
              to="/contact"
              className={({ isActive }) =>
                [
                  "px-4 py-2 w-full transition-colors",
                  isActive
                    ? "bg-[#d60f3c] text-white"
                    : "hover:bg-[#d60f3c] hover:text-white",
                ].join(" ")
              }
            >
              CONTACT US
            </NavLink>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
