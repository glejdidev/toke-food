import { useEffect, useState } from "react";
import { products } from "../data/products";
import Container from "./ui/Container";
import { navigationLinks } from "../data/navigation";
import { X, ShoppingBag, ArrowUpRight, Truck } from "lucide-react";
import tokeFoodLogoLime from "../assets/tokefoodlogolime.svg";
import { NavLink } from "react-router-dom";
import Button from "./ui/Button";
import { button } from "motion/react-client";

type MobileMenuProps = {
  isMenuOpen: boolean;
  closeMenu: () => void;
  toggleMenu: () => void;
  totalItems: number;
};

const MobileMenu = ({
  isMenuOpen,
  closeMenu,
  toggleMenu,
  totalItems,
}: MobileMenuProps) => {
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

  const featuredProduct = products[0];

  const offers = [
    {
      id: 1,
      title: "Transport falas",
      description: "Për porosi mbi 3,000 Lekë",
      label: "TRANSPORT FALAS",
      link: "/products",
      buttontext: "Bli tani",
    },
    {
      id: 2,
      label: "ZBULO TOKË FOOD",
      title: "Ushqim i mirë, çdo ditë",
      description: "Zbulo produktet tona pa gluten.",
      link: "/products",
      buttontext: "Bli tani",
    },
    {
      id: 3,
      label: "RECETA",
      title: "Frymëzim në kuzhinë",
      description: "Eksploro ide të reja për çdo ditë.",
      link: "/recipes",
      buttontext: "Shiko recetat",
    },
  ];

  const [activeOffer, setActiveOffer] = useState(0);

  const currentOffer = offers[activeOffer];

  return (
    <div className="md:hidden">
      {/* Mobile Nav */}
      <div className="relative z-50 flex min-h-28 items-center justify-between rounded-br-[50px]  bg-brand px-6 py-5 shadow-[0_8px_24px_rgba(7,63,50,0.12)]">
        <NavLink to="/" onClick={closeMenu}>
          <img src={tokeFoodLogoLime} alt="Toke Food" className="h-13 w-auto" />
        </NavLink>

        {/* Hamburger Menu + ShoppingBag */}
        <div className="flex items-center gap-4 rounded-full bg-lime p-1.5">
          <NavLink
            to="/cart"
            onClick={closeMenu}
            className="relative flex h-10 w-10 items-center justify-center text-brand"
            aria-label={`Shporta me ${totalItems} produkte`}
          >
            <ShoppingBag size={23} strokeWidth={1.8} />
            {totalItems > 0 && (
              <span className="absolute -right-0.5 -top-0.5 flex h-4 min-w-4 items-center justify-center rounded-full bg-brand px-1 text-[10px] text-white">
                {totalItems}
              </span>
            )}
          </NavLink>

          <button
            type="button"
            onClick={toggleMenu}
            aria-label={isMenuOpen ? "Mbyll menune" : "Hap menune"}
            aria-expanded={isMenuOpen}
            aria-controls="mobile-navigation"
            className="flex h-10 w-10 items-center justify-center rounded-full bg-brand text-[#D9F2A0]"
          >
            {isMenuOpen ? (
              <X size={22} />
            ) : (
              <span className="flex flex-col items-end gap-1.5">
                <span className="h-0.5 w-5 rounded-full bg-[#D9F2A0]" />
                <span className="h-0.5 w-3.5 rounded-full bg-[#D9F2A0]" />
              </span>
            )}
          </button>
        </div>
      </div>

      {/* Fullscren Menu */}
      <div
        id="mobile-navigation"
        inert={!isMenuOpen}
        className={`fixed inset-0 z-40 overflow-y-auto bg-brand text-white transition-[clip-path] duration-700 ease-in-out motion-reduce:transition-none`}
        style={{
          clipPath: isMenuOpen
            ? "circle(150vmax at calc(100% - 50px) 56px)"
            : "circle(0px at calc(100% - 50px) 56px)",
          visibility: isMenuOpen ? "visible" : "hidden",
          transitionProperty: "clip-path, visibility",
          transitionDuration: "700ms, 0ms",
          transitionDelay: isMenuOpen ? "0ms, 0ms" : "0ms, 700ms",
        }}
      >
        <Container className="flex min-h-full flex-col gap-6 px-4 pt-28  ">
          <span
            aria-hidden="true"
            className="block h-px w-full bg-[#D9F2A0]/20"
          />
          <NavLink to={"/products"}>
            <article className="bg-[#E3EBD8] rounded-2xl  p-4.25 ">
              <div className="flex space-between items-center justify-between text-brand pb-2.5 ">
                <span className="text-xs uppercase font-extrabold">
                  Me i shituri
                </span>
                <ArrowUpRight size={18} />
              </div>
              <div className="grid grid-cols-[100px_minmax(0,1fr)] gap-4 items-center">
                <img
                  src={featuredProduct.image}
                  alt={featuredProduct.name}
                  className="rounded aspect-square w-full object-cover"
                />
                <div className="text-brand flex-col gap-1">
                  <h3 className="font-extrabold text-[18px] tracking-[-0.07em]">
                    {featuredProduct.name}
                  </h3>
                  <span className="block text-sage text-[12px]">
                    Pa gluten 400g
                  </span>
                  <Button variant="text" to="/products" className="border-b-0">
                    Shiko produktin
                  </Button>
                </div>
              </div>
            </article>
          </NavLink>

          {/* Navigation Links */}
          <nav aria-label="Navigimi mobile" className="flex flex-col gap-6">
            <p className="text-sage font-extrabold text-xs">
              EKSPLORO TOKË FOOD
            </p>
            {navigationLinks.map((link) => {
              const Icon = link.icon;

              return (
                <NavLink
                  to={link.to}
                  key={link.to}
                  onClick={closeMenu}
                  className={({ isActive }) =>
                    `flex items-center gap-4 border-b border-white/15 pb-3 transition-colors hover:text-sage ${
                      isActive ? "text-lime" : "text-white"
                    }`
                  }
                >
                  <Icon size={22} className="text-[#D9F2A0]" />
                  <span className="flex-1 text-[18px] font-medium">
                    {link.label}
                  </span>
                  <ArrowUpRight size={18} className="text-sage" />
                </NavLink>
              );
            })}
          </nav>

          <div className="min-h-[145px] flex flex-col gap-2 bg-lime text-brand rounded-2xl p-4 ">
            <div className="flex items-center gap-3">
              <Truck size={19} strokeWidth={1.8} />
              <span className="text-[10px] font-bold tracking-widest">
                {currentOffer.label}
              </span>
            </div>
            <h3 className="text-[20px] font-extrabold tracking-tighter">
              {currentOffer.title}
            </h3>
            <p className="text-xs text-sage">{currentOffer.description}</p>
            <Button
              variant="text"
              to={currentOffer.link}
              className="border-b-0 text-[12px]"
            >
              {currentOffer.buttontext}
            </Button>
            <div className="mt-auto flex items-center gap-2 pt-6">
              {offers.map((offer, index) => (
                <button
                  key={offer.id}
                  type="button"
                  onClick={() => setActiveOffer(index)}
                  aria-label={`Shfaq oferten ${index + 1}`}
                  aria-pressed={activeOffer === index}
                  className={`h-2 rounded-full transition-all duration-300 ${
                    activeOffer === index ? "w-6 bg-brand" : "w-2 bg-brand/30"
                  }`}
                />
              ))}
            </div>
          </div>
        </Container>
      </div>
    </div>
  );
};

export default MobileMenu;
