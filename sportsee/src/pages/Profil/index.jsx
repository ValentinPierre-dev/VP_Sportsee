import { useFetch } from '../../utils/hooks'
import { useParams } from 'react-router-dom'
import { Loader } from '../../utils/style/Atoms'
import styled from 'styled-components'
import Welcome from '../../components/Welcome'
import CardActivity from '../../components/CardActivity'
import CardDuration from '../../components/CardDuration'
import CardIntensity from '../../components/CardIntensity'
import CardScore from '../../components/CardScore'
import CardKeyData from '../../components/CardKeyData'
import calories from '../../assets/calories.svg'
import proteins from '../../assets/proteins.svg'
import glucids from '../../assets/glucids.svg'
import lipids from '../../assets/lipids.svg'

const ProfilWapper = styled.div`
  width: 85%;
  margin: 60px auto;
`
const ProfilContent = styled.div`
  display: flex;
  flex-direction: row;
`

const ProfilActivity = styled.div`
  display: flex;
  flex-direction: column;
  width: 70%
`

const ProfilKeydatas = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 28%;
  margin-left: 30px;
`

const ProfilMiniCards = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  margin-top: 30px;
`



function Profil() {

  const { userId } = useParams()

  const { data, isLoading, error } = useFetch(`http://localhost:3000/user/${userId}/data.json`)
  const userData = data
  console.log(userData.firstname)

  if (error) {
    return <span>Oups il y a eu un problème</span>
  }

  return isLoading ? (
    <Loader />
  ) : (
    <ProfilWapper>
        <Welcome firstname={userData.firstname} />
        <ProfilContent>
          <ProfilActivity>
            <CardActivity />
            <ProfilMiniCards>
              <CardDuration />
              <CardIntensity data={userData.radar} />
              <CardScore />
            </ProfilMiniCards>
          </ProfilActivity>
          <ProfilKeydatas>
            <CardKeyData
              dataValue={userData.keydata.calories}
              dataIcon={calories}
              dataType="calories"
            />
            <CardKeyData
              dataValue={userData.keydata.proteins}
              dataIcon={proteins}
              dataType="proteins"
            />
            <CardKeyData
              dataValue={userData.keydata.glucids}
              dataIcon={glucids}
              dataType="glucids"
            />
            <CardKeyData
              dataValue={userData.keydata.lipids}
              dataIcon={lipids}
              dataType="lipids"
            />
          </ProfilKeydatas>
        </ProfilContent>
    </ProfilWapper>
  );
}

export default Profil;
