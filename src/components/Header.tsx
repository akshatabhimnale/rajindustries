import { useState } from "react";
import { Globe, Languages, Menu, Search, X } from "lucide-react";
import { Link, NavLink } from "react-router-dom";

const Header = () => {
  const [open, setOpen] = useState<boolean>(false);
  const navItems = [
    { to: "/", label: "Home" },
    { to: "/products", label: "Products" },
    { to: "/about", label: "About Us" },
    { to: "/services", label: "Services" },
    { to: "/contact", label: "Contact" },
  ];

  const closeMenu = () => setOpen(false);

  return (
    <header className="sticky top-0 z-50 bg-white shadow-[0_5px_15px_rgba(26,26,26,0.08)]">
      <div className="h-[50px] bg-[#ededed]">
        <div className="mx-auto flex h-full w-full max-w-[1600px] items-center justify-between px-6">
          <strong className="flex items-center text-[11px] font-bold uppercase tracking-[0.15em] text-[#7f7f7f] sm:text-[13px]">
            Raj Industries
            <span className="ml-4 hidden h-px w-4 bg-[#adadad] sm:inline-block" />
            <span className="ml-3">Global</span>
          </strong>

          <div className="hidden items-center lg:flex">
            <button className="flex h-[50px] w-[50px] items-center justify-center text-[#7f7f7f] transition-colors hover:text-[#d60f3c]">
              <Globe size={20} />
            </button>
            <button className="flex h-[50px] w-[70px] items-center justify-center gap-2 text-[13px] font-bold uppercase tracking-[0.15em] text-[#7f7f7f] transition-colors hover:text-[#d60f3c]">
              <Languages size={18} />
              EN
            </button>
            <button className="flex h-[50px] w-[50px] items-center justify-center text-[#7f7f7f] transition-colors hover:text-[#d60f3c]">
              <Search size={20} />
            </button>
          </div>
        </div>
      </div>

      <div className="relative border-b border-[#e6e6e6]">
        <div className="mx-auto flex h-[60px] w-full max-w-[1600px] items-center justify-between px-6">
          <Link to="/" className="block" onClick={closeMenu} aria-label="Raj Industries">
            <span className="text-2xl tracking-wide text-black">
              <span className="font-semibold text-[#d60f3c]">Raj</span> Industries
            </span>
          </Link>

          <nav className="hidden h-full items-end lg:flex">
            <ul className="mb-[9px] flex items-center gap-[1px]">
              {navItems.map((item) => (
                <li key={item.to}>
                  <NavLink
                    to={item.to}
                    className={({ isActive }) =>
                      [
                        "block px-[17px] py-[11px] text-[13px] font-bold uppercase tracking-[0.15em] transition-colors",
                        isActive
                          ? "bg-[#e6e6e6] text-[#4d4d4d]"
                          : "text-[#4d4d4d] hover:bg-[#d60f3c] hover:text-white",
                      ].join(" ")
                    }
                  >
                    {item.label}
                  </NavLink>
                </li>
              ))}
            </ul>
          </nav>

          <button
            className="absolute right-0 top-0 flex h-[60px] w-[90px] items-center justify-center bg-[#d60f3c] text-white lg:hidden"
            onClick={() => setOpen(!open)}
            aria-label="Toggle Menu"
            aria-expanded={open}
          >
            {open ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {open && (
        <div className="lg:hidden">
          <div className="bg-[#666666] px-6 py-4 shadow-[0_2px_5px_rgba(0,0,0,0.15)]">
            <nav>
              <ul className="space-y-1">
                {navItems.map((item) => (
                  <li key={item.to}>
                    <NavLink
                      to={item.to}
                      onClick={closeMenu}
                      className={({ isActive }) =>
                        [
                          "block px-3 py-3 text-[13px] font-bold uppercase tracking-[0.15em] transition-colors",
                          isActive ? "bg-[#d60f3c] text-white" : "text-white hover:bg-[#d60f3c]",
                        ].join(" ")
                      }
                    >
                      {item.label}
                    </NavLink>
                  </li>
                ))}
              </ul>
            </nav>
          </div>
          <div className="flex h-[50px] items-center justify-around bg-[#ededed] px-4">
            <button className="flex h-[50px] w-[50px] items-center justify-center text-[#7f7f7f]">
              <Globe size={20} />
            </button>
            <button className="flex h-[50px] w-[70px] items-center justify-center gap-2 text-[13px] font-bold uppercase tracking-[0.15em] text-[#7f7f7f]">
              <Languages size={18} />
              EN
            </button>
            <button className="flex h-[50px] w-[50px] items-center justify-center text-[#7f7f7f]">
              <Search size={20} />
            </button>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
