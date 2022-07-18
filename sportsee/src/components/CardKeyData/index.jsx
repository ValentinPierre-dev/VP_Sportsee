import styled from 'styled-components'
import colors from '../../utils/style/colors';

const CardContainer = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    height: 130px;
    width: 60%;
    background-color: ${colors.grey};
    border-radius: 5px;
`

const CardIcon = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 55px;
    height: 55px;
    padding: 5px;
    margin: 12%;
    border-radius: 6px;
    background-color: ${(props) => props.color};
`

const CardDatas = styled.div`

`

const DataValue = styled.p`
    font-weight: 700;
    font-size: 20px;
    margin: 5px 0;
`

const DataSubtitle = styled.p`
    font-size: 14px;
    margin: 5px 0;
`

function CardKeyData({ dataValue, dataIcon, dataType }) {

    let bgColor = null;
    let dataUnit = null;
    let dataSubtitle = null;
    

    switch (dataType) {
        case 'calories' :
            bgColor = "#FF00001A";
            dataUnit = "kCal";
            dataSubtitle = "Calories";
            console.log(dataUnit);
            break;
        case 'proteins' :
            bgColor = "#4AB8FF1A";
            dataUnit = "g";
            dataSubtitle = "Proteines"
            break;
        case 'glucids' :
            bgColor = "#F9CE231A";
            dataUnit = "g";
            dataSubtitle = "Glucides"
            break;
        case 'lipids' :
            bgColor = "#FD51811A";
            dataUnit = "g";
            dataSubtitle = "Lipides"
            break;
        default:
            console.log(`Données non trouvées`);
    }

    return (
        <CardContainer>
            <CardIcon color={bgColor}>
                <img src={dataIcon} alt="Données utilisateur"/>
            </CardIcon>
            <CardDatas>
                <DataValue>{dataValue}{dataUnit}</DataValue>
                <DataSubtitle>{dataSubtitle}</DataSubtitle>
            </CardDatas>
        </CardContainer>
    );
  }
  
  export default CardKeyData;