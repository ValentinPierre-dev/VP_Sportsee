import { StyledLink } from "../../style/Atoms";
import logo from "../../assets/logo.svg";

function Header() {
  return (
    <div className="bgHeader">
        <nav className="navHeader">
            <StyledLink to="/">
                <img className="logo" src={logo} alt="logo" />
            </StyledLink>
            <StyledLink to="/">Accueil</StyledLink>
            <StyledLink to="/">Profil</StyledLink>
            <StyledLink to="/">Réglage</StyledLink>
            <StyledLink to="/">Communauté</StyledLink>
        </nav>
    </div>
  );
}

export default Header;