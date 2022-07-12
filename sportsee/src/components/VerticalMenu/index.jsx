import styled from "styled-components";
import colors from "../../utils/style/colors";
import yoga from "../../assets/yoga.svg";
import swim from "../../assets/swim.svg";
import bike from "../../assets/bike.svg";
import weight from "../../assets/weight.svg";


const Background = styled.div`
    width: 120px;
    min-height: 100vh;
    background-color: ${colors.secondary};
`

const NavContainer = styled.nav`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    height: 320px;
  width: 100%;
  margin-top: 200px;
  padding: 5px 0px;
`;

const Activity = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 55px;
    height: 55px;
    padding: 5px;
    border-radius: 6px;
    background-color: ${colors.white};
`

function VerticalMenu() {
    return (
      <Background>
        <NavContainer>
            <Activity>
                <img src={yoga} alt="Activité Yoga"/>
            </Activity>
            <Activity>
                <img src={swim} alt="Activité Natation"/>
            </Activity>
            <Activity>
                <img src={bike} alt="Activité Vélo"/>
            </Activity>
            <Activity>
                <img src={weight} alt="Activité Musculation"/>
            </Activity>
        </NavContainer>
      </Background>
    );
  }
  
  export default VerticalMenu;