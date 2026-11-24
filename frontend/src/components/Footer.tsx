import { NavLink } from "react-router-dom";
import Container from "./ui/Container";
import Button from "./ui/Button";

const Footer = () => {
  return (
    <footer className="bg-brand text-white">
      <Container className="pt-16 pb-5 lg:pt-20">
        <section className="grid grid-cols-1 gap-10 lg:grid-cols-[1.3fr_1fr] border-b border-white/15 pb-10 lg:pb-14 lg:gap-29">
          <div className="flex flex-col gap-4">
            <span className="text-bright-sage font-bold text-xs">
              QENDRO NE KONTAKT
            </span>
            <h2 className="font-heading font-bold text-[48px] leading-[1em] tracking-tight lg:text-[90px]">
              Gjerat e mira fillojne nga{" "}
              <span className="text-lime">toka.</span>
            </h2>
          </div>
          <div className="flex flex-col items-start gap-6 lg:self-center">
            <p className="text-bright-sage md:max-w-[60%]">
              Ushqim i thjeshtë, i menduar me kujdes. Përditësohu me receta dhe
              lajme nga Tokë Food.
            </p>
            <Button
              variant="primary"
              to="/contact"
              className="bg-lime !text-brand"
            >
              Na Kontaktoni
            </Button>
          </div>
        </section>
        <nav
          aria-label="footer"
          className="grid grid-cols-2 gap-x-8 gap-y-10  pt-8 md:pt-13 md:grid-cols-3 md:gap-12"
        >
          <div>
            <div className="font-extrabold pb-4">
              <h3>Eksploro</h3>
            </div>
            <div className="flex flex-col gap-2 text-bright-sage text-[13px]">
              <NavLink to="/products">Produktet</NavLink>
              <NavLink to="/recipes">Recetat</NavLink>
              <NavLink to="/about">Historia jone</NavLink>
            </div>
          </div>
          <div>
            <div className="font-extrabold pb-4 ">
              <h3>Informacion</h3>
            </div>
            <div className="flex flex-col gap-1.5  text-bright-sage text-[13px]">
              <NavLink to="/contact">Kontakt</NavLink>
              <NavLink to="/transport">Transporti & pagesa</NavLink>
              <NavLink to="/products">Privatesia</NavLink>
            </div>
          </div>
          <div>
            <div className="font-extrabold pb-4">
              <h3>Na Ndiq</h3>
            </div>
            <div className="flex flex-col gap-1.5  text-bright-sage text-[13px]">
              <NavLink to="/products">Instagram</NavLink>
              <NavLink to="/products">Tirane , Albania</NavLink>
            </div>
          </div>
        </nav>
        <div className="font-heading text-[clamp(160px,20vw,420px)] font-extrabold tracking-[-0.06em] leading-[1.1] whitespace-nowrap -ml-[0.06em]">
          tokë
          <span className="ml-[0.6em] text-[0.15em] tracking-[-0.03em] text-lime">
            food.
          </span>
        </div>
          <div  className="flex flex-col justify-between items-center gap-2 border-t border-white/15 pt-6 text-xs text-bright-sage md:flex-row">
          <p>© 2026 Tokë Food. Të gjitha të drejtat e rezervuara</p>
          <p>  Designed & Developed by MAYADEV</p>
          <p>Me dashuri, nga toka.</p>
        </div>
      </Container>
    </footer>
  );
};

export default Footer;
