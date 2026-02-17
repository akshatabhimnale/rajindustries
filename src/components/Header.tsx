import { useEffect, useRef, useState } from "react";
import { Globe, Languages, Menu, Search, X } from "lucide-react";
import { Link, NavLink, useLocation } from "react-router-dom";

const Header = () => {
  const [open, setOpen] = useState<boolean>(false);
  const [isSticky, setIsSticky] = useState<boolean>(false);
  const [isHidden, setIsHidden] = useState<boolean>(false);
  const lastScrollYRef = useRef<number>(0);
  const hideStartYRef = useRef<number>(0);
  const location = useLocation();

  const navItems = [
    { to: "/", label: "Home" },
    { to: "/products", label: "Products" },
    { to: "/about", label: "About Us" },
    { to: "/services", label: "Services" },
    { to: "/contact", label: "Contact" },
  ];

  const closeMenu = () => setOpen(false);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  useEffect(() => {
    const updateHideStart = () => {
      const hero = document.querySelector<HTMLElement>("[data-hero-section]");
      if (!hero) {
        hideStartYRef.current = 750;
        return;
      }
      hideStartYRef.current = hero.offsetTop + hero.offsetHeight;
    };

    const onScroll = () => {
      const currentY = window.scrollY;
      const hideStart = hideStartYRef.current;
      const scrollingDown = currentY > lastScrollYRef.current + 2;
      const scrollingUp = currentY < lastScrollYRef.current - 2;

      setIsSticky(currentY > 1);

      if (currentY <= hideStart) {
        setIsHidden(false);
      } else if (scrollingDown) {
        setIsHidden(true);
      } else if (scrollingUp) {
        setIsHidden(false);
      }

      lastScrollYRef.current = currentY;
    };

    updateHideStart();
    onScroll();

    window.addEventListener("resize", updateHideStart);
    window.addEventListener("scroll", onScroll, { passive: true });

    return () => {
      window.removeEventListener("resize", updateHideStart);
      window.removeEventListener("scroll", onScroll);
    };
  }, [location.pathname]);

  return (
    <header
      className={[
        "sticky top-0 z-50 bg-white [font-family:'Helvetica_Neue',Arial,Verdana,sans-serif]",
        "transition-transform duration-300",
        isHidden ? "-translate-y-full" : "translate-y-0",
        isSticky ? "shadow-[0_5px_15px_rgba(26,26,26,0.2)]" : "",
      ].join(" ")}
    >
      {/* Upper navbar preserved */}
      <div className="hidden h-[50px] border-b border-[#d0d0d0] bg-[#d9d9d9] lg:block">
        <div className="mx-auto flex h-full w-full max-w-[1600px] items-center justify-between px-8">
          <strong className="flex items-center text-[13px] font-bold uppercase tracking-[0.15em] text-[#7f7f7f]">
            Raj Industries
            <span className="ml-4 h-px w-4 bg-[#adadad]" />
            <span className="ml-3">Global</span>
          </strong>

          <div className="flex items-center" aria-label="Header controls">
            <button
              type="button"
              className="flex h-[50px] w-[50px] items-center justify-center text-[#7f7f7f] transition-colors hover:text-[#d60f3c]"
              aria-label="Select brand and country"
            >
              <Globe size={20} />
            </button>
            <button
              type="button"
              className="flex h-[50px] w-[70px] items-center justify-center gap-2 text-[13px] font-bold uppercase tracking-[0.15em] text-[#7f7f7f] transition-colors hover:text-[#d60f3c]"
              aria-label="Select language"
            >
              <Languages size={18} />
              EN
            </button>
            <button
              type="button"
              className="flex h-[50px] w-[50px] items-center justify-center text-[#7f7f7f] transition-colors hover:text-[#d60f3c]"
              aria-label="Search"
            >
              <Search size={20} />
            </button>
          </div>
        </div>
      </div>

      {/* Desktop main navbar: attachment style */}
      <div className="hidden h-[98px] items-center border-b border-[#d9d9d9] bg-white lg:flex">
        <div className="mx-auto flex h-full w-full max-w-[1600px] items-center justify-between px-8">
          <Link to="/" className="block" aria-label="Raj Industries" onClick={closeMenu}>
            <span className="text-[38px] font-light tracking-[0.04em] text-black">
              <span className="font-semibold text-[#d60f3c]">RAJ</span> INDUSTRIES
            </span>
          </Link>

          <nav className="mr-[4%]">
            <ul className="flex items-center gap-2">
              {navItems.map((item) => (
                <li key={item.to}>
                  <NavLink
                    to={item.to}
                    className={({ isActive }) =>
                      [
                        "block px-5 py-3 text-[13px] font-bold uppercase tracking-[0.15em] transition-colors duration-200",
                        isActive
                          ? "bg-[#d60f3c] text-white"
                          : "text-[#4d4d4d] hover:text-[#d60f3c]",
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
      </div>

      {/* Mobile header */}
      <div className="relative border-b border-[#e6e6e6] lg:hidden">
        <div className="mx-auto flex h-[60px] w-full max-w-[1600px] items-center justify-between px-6">
          <Link to="/" className="block" onClick={closeMenu} aria-label="Raj Industries">
            <span className="text-[28px] font-light tracking-[0.02em] text-black">
              <span className="font-semibold text-[#d60f3c]">RAJ</span> INDUSTRIES
            </span>
          </Link>

          <button
            type="button"
            className="absolute right-0 top-0 flex h-[60px] w-[90px] items-center justify-center bg-[#d60f3c] text-white"
            onClick={() => setOpen(!open)}
            aria-label="Toggle Menu"
            aria-expanded={open}
          >
            {open ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {open && (
        <div className="fixed inset-x-0 bottom-0 top-[60px] z-40 bg-black/35 lg:hidden" onClick={closeMenu}>
          <div
            className="max-h-full overflow-y-auto bg-[#666666] shadow-[0_2px_5px_rgba(0,0,0,0.15)]"
            onClick={(e) => e.stopPropagation()}
          >
            <nav className="px-6 py-4">
              <ul className="space-y-1">
                {navItems.map((item) => (
                  <li key={item.to}>
                    <NavLink
                      to={item.to}
                      onClick={closeMenu}
                      className={({ isActive }) =>
                        [
                          "block px-3 py-3 text-[13px] font-bold uppercase tracking-[0.15em] transition-colors duration-200",
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

            <div className="flex h-[50px] items-center justify-around bg-[#ededed] px-4">
              <button
                type="button"
                className="flex h-[50px] w-[50px] items-center justify-center text-[#7f7f7f]"
                aria-label="Select brand and country"
              >
                <Globe size={20} />
              </button>
              <button
                type="button"
                className="flex h-[50px] w-[70px] items-center justify-center gap-2 text-[13px] font-bold uppercase tracking-[0.15em] text-[#7f7f7f]"
                aria-label="Select language"
              >
                <Languages size={18} />
                EN
              </button>
              <button
                type="button"
                className="flex h-[50px] w-[50px] items-center justify-center text-[#7f7f7f]"
                aria-label="Search"
              >
                <Search size={20} />
              </button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
