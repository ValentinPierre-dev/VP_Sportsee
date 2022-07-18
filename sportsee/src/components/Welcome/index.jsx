import styled from 'styled-components'
import colors from '../../utils/style/colors';

const Firstname = styled.span`
    color: ${colors.primary}
`

function Welcome({ firstname }) {
    return (
        <div>
            <h1>Bonjour <Firstname>{firstname}</Firstname></h1>
            <h2>Félicitation ! Vous avez explosé vos objectifs hier 👏</h2>
        </div>
    );
  }
  
  export default Welcome;