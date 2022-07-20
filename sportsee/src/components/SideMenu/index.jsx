import yoga from "../../assets/yoga.svg";
import swim from "../../assets/swim.svg";
import bike from "../../assets/bike.svg";
import weight from "../../assets/weight.svg";

function VerticalMenu() {
    return (
      <div className="bgSide">
        <nav className="navSide">
            <div className="imgSide">
                <img src={yoga} alt="Activité Yoga"/>
            </div>
            <div className="imgSide">
                <img src={swim} alt="Activité Natation"/>
            </div>
            <div className="imgSide">
                <img src={bike} alt="Activité Vélo"/>
            </div>
            <div className="imgSide">
                <img src={weight} alt="Activité Musculation"/>
            </div>
        </nav>
      </div>
    );
  }
  
  export default VerticalMenu;