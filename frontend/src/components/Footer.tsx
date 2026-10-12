import { NavLink } from "react-router-dom";
import Container from "./ui/Container";

const Footer = () => {
  return (
    <footer>
      <Container className="py-8">
      <nav aria-label="footer">
        <NavLink to="/" end>
          Toke Food
        </NavLink>
        <div>
          <p>Faqja e ndertuar nga MAYADEV c {new Date().getFullYear()}</p>
        </div>
        <div>
          <NavLink to="productpage">
              Product Page
          </NavLink>
        </div>
      </nav>
      </Container>
    </footer>
  );
};

export default Footer;
