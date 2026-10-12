import { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import { Menu, X } from "lucide-react";
import Container from "./ui/Container";

import tokeFoodLogo from "../assets/tokefoodlogo.svg";
import tokeFoodLogoWhite from "../assets/tokefoodlogowhite.svg";

// Array
const navigationLinks = [
  { to: "/", label: "Kryefaqja" },
  { to: "/products", label: "Produktet" },
  { to: "/about", label: "Rreth nesh" },
  { to: "/contact", label: "Kontakt" },
];

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const closeMenu = () => setIsMenuOpen(false);

  //Stop scrolling MenuOpen

  useEffect(() => {
    if (!isMenuOpen) return;

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    return () => {
      document.body.style.overflow = previousOverflow;
    };
  }, [isMenuOpen]);

  // Close Menu esc buttpn

  useEffect(() => {
    if (!isMenuOpen) return;

    const handleEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        closeMenu();
      }
    };

    window.addEventListener("keydown", handleEscape);

    return () => {
      window.removeEventListener("keydown", handleEscape);
    };
  }, [isMenuOpen]);

  useEffect(() => {
    const mediaQuery = window.matchMedia("(min-width: 768px)");

    const handleResize = () => {
      if (mediaQuery.matches) {
        closeMenu();
      }
    };

    mediaQuery.addEventListener("change", handleResize);

    return () => {
      mediaQuery.removeEventListener("change", handleResize);
    };
  }, []);

  return (
    <header className="realtive z-50 border-b border-gray-200">
      <nav aria-label="Navigimi kryesor">
        {/* Main Navbar */}
        <Container className="realtive z-50 flex items-center justify-between py-5">
          {/* Logo */}
          <NavLink to="/" end onClick={closeMenu}>
            <img
              src={isMenuOpen ? tokeFoodLogoWhite : tokeFoodLogo}
              alt="Toke Food"
              className="h-10 w-auto md:h-20"
            />
          </NavLink>

          {/* Desktop */}
          <div className="hidden items-center gap-6 md:flex">
            {navigationLinks.map((link) => (
              <NavLink
                key={link.to}
                to={link.to}
                end={link.to === "/"}
                className="text-[#505c45] transition-opacity  hover:opacity-60"
              >
                {link.label}
              </NavLink>
            ))}
          </div>

          {/* Mobile menu */}
          <button
            type="button"
            className={`relative z-50 cursor-pointer items-center justify-center transition-colors duration-300 md:hidden ${
              isMenuOpen ? "text-white" : "text-[#505c45]"
            }`}
            aria-label={isMenuOpen ? "Mbyll menune" : "Hap menune"}
            aria-expanded={isMenuOpen}
            aria-controls="mobile-navigation"
            onClick={() => setIsMenuOpen((prev) => !prev)}
          >
            {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </Container>

        {/* Fullscreen Reveal Menu */}
        <div
          id="mobile-navigation"
          inert={!isMenuOpen}
          aria-hidden={!isMenuOpen}
          className="fixed inset-0 z-40  bg-[#505c45] text-white transition-[clip-path] duration-700 ease-in-out motion-reduce:transition-none md:hidden"
          style={{
            clipPath: isMenuOpen
              ? "circle(150vmax at calc(100% - 38px) 40px)"
              : "circle(0px at calc(100% - 38px) 40px)",
          }}
        >
          <Container className="flex h-full flex-col justify-center gap-8">
            {navigationLinks.map((link, index) => (
              <NavLink
                key={link.to}
                to={link.to}
                end={link.to === "/"}
                onClick={closeMenu}
                className={`w-fit text-4xl font-medium tracking-tight transition-[opacity,transform] duration-500 motion-reduce:transition-none ${
                  isMenuOpen
                    ? "translate-y-0 opacity-100"
                    : "translate-y-8 opacity-0"
                }`}
                style={{
                  transitionDelay: isMenuOpen ? `${200 + index * 90}ms` : "0ms",
                }}
              >
                {link.label}
              </NavLink>
            ))}
          </Container>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
