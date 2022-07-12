import styled from "styled-components";
import { StyledLink } from "../../utils/style/Atoms";
import colors from "../../utils/style/colors";
import logo from "../../assets/logo.svg";

const Background = styled.div`
    width: 100%;
    background-color: ${colors.secondary};
    -webkit-box-shadow: 0px 0px 10px -2px rgba(0,0,0,0.8); 
    box-shadow: 0px 0px 10px -2px rgba(0,0,0,0.8);
`

const NavContainer = styled.nav`
  width: 95%;
  margin: 0px 90px 0px 30px;
  padding: 5px 0px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const HomeLogo = styled.img`
  height: 60px;
`;

function Header() {
  return (
    <Background>
        <NavContainer>
            <StyledLink to="/">
                <HomeLogo src={logo} />
            </StyledLink>
            <StyledLink to="/">Accueil</StyledLink>
            <StyledLink to="/">Profil</StyledLink>
            <StyledLink to="/">Réglage</StyledLink>
            <StyledLink to="/">Communauté</StyledLink>
        </NavContainer>
    </Background>
  );
}

export default Header;