import { useState } from "react";
import { NavLink } from "react-router-dom";
import { ShoppingBag } from "lucide-react";
import Container from "./ui/Container";
import tokeFoodLogo from "../assets/tokefoodlogo.svg";
import tokeFoodLogoWhite from "../assets/tokefoodlogowhite.svg";
import { useCart } from "../hooks/useCart";
import Button from "./ui/Button";
import MobileMenu from "./MobileMenu";
import { navigationLinks } from "../data/navigation";






const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const { cartItems } = useCart();

  // .reduce() (JavaScript): Kalon nëpër elementet e array-t dhe
  // i bashkon në një vlerë të vetme, në këtë rast shumën e sasive.
  const totalItems = cartItems.reduce(
    (total, item) => total + item.quantity,
    0,
  );

  const closeMenu = () => setIsMenuOpen(false);

  return (
    <>
      <div className="hidden md:flex bg-brand py-2  items-center justify-center gap-3 text-white text-[13px] uppercase">
        <span>Nga toka, me kujdes.</span>
        <span className="text-sage">
          Porosit online • Pagesë në dorëzim në Shqipëri
        </span>
      </div>
      <header className="bg-[#fbfcf9] sticky top-0 z-50 md:bg-[#FAF8F3]">
        <MobileMenu isMenuOpen={isMenuOpen} closeMenu={closeMenu} toggleMenu={() => setIsMenuOpen((prev) =>  !prev)} totalItems={totalItems}/>
        <nav aria-label="Navigimi kryesor">
          {/* Main Navbar */}
          <Container className="hidden md:flex items-center justify-between gap-4 py-6 lg:py-7">
            {/* Logo */}
            <NavLink to="/" end onClick={closeMenu}>
              <img
                src={isMenuOpen ? tokeFoodLogoWhite : tokeFoodLogo}
                alt="Toke Food"
                className="h-5 w-auto md:h-7"
              />
            </NavLink>

            {/* Desktop */}
            <div className="hidden items-center gap-8 md:flex">
              {navigationLinks.map((link) => (
                <NavLink
                  key={link.to}
                  to={link.to}
                  end={link.to === "/"}
                  className={({ isActive }) =>
                    `text-[13px] font-bold transition-colors hover:text-sage ${
                      isActive ? "text-sage" : "text-brand"
                    }`
                  }
                >
                  {link.label}
                </NavLink>
              ))}
            </div>

            {/* Shopping cart */}
            <div className="hidden md:flex items-center justify-between gap-4 font-extrabold">
              <Button
                variant="text"
                to="/products"
                className="border-b-0 text-[15px] "
              >
                Bli tani
              </Button>
              <NavLink
                to="/cart"
                onClick={closeMenu}
                className="relative text-brand"
                aria-label={`Shporta me ${totalItems} produkte`}
              >
                <ShoppingBag size={20} />
                {totalItems > 0 && (
                  <span className="absolute -right-3 -top-3 flex h-5 min-w-5 items-center justify-center rounded-full bg-brand px-1 text-xs text-white">
                    {totalItems}
                  </span>
                )}
              </NavLink>
            </div>
          </Container>
        </nav>
      </header>
    </>
  );
};

export default Navbar;
