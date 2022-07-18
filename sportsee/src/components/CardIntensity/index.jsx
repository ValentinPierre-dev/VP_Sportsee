import { useFetch } from '../../utils/hooks'
import { Loader } from '../../utils/style/Atoms'
import styled from 'styled-components'
import colors from '../../utils/style/colors';
import { Radar, RadarChart, PolarGrid, PolarAngleAxis, PolarRadiusAxis, ResponsiveContainer } from 'recharts';

const CardContainer = styled.div`
    height: 260px;
    width: 31%;
    background-color: ${colors.secondary};
    border-radius: 5px;
`

function CardIntensity() {

    const { data, isLoading, error } = useFetch(`http://localhost:3000/datas/data.json`)
    const userData = data

    const datas = [
        {
          subject: "Intensité",
          value: 120,
        },
        {
          subject: "Vitesse",
          value: 98,
        },
        {
          subject: "Force",
          value: 86,
        },
        {
          subject: "Endurance",
          value: 99,
        },
        {
          subject: "Energie",
          value: 85,
        },
        {
          subject: "Cardio",
          value: 65,
        }
      ]
  
    if (error) {
      return <span>Oups il y a eu un problème</span>
    }

    return isLoading ? (
        <Loader />
      ) : (
        <CardContainer>
          <ResponsiveContainer width="100%" height="100%">
            <RadarChart cx="50%" cy="50%" outerRadius="80%" data={datas}>
              <PolarGrid />
              <PolarAngleAxis dataKey="subject" stroke={colors.white} />
              <Radar name="Mike" dataKey="value" fill={colors.primary} fillOpacity={0.6} />
            </RadarChart>
          </ResponsiveContainer>
        </CardContainer>
    );
  }
  
  export default CardIntensity;