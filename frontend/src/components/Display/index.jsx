import { FaCoins, FaRegArrowAltCircleDown, FaRegArrowAltCircleUp } from 'react-icons/fa';
import * as C from './style'

const Display = ({inCome, expense, total}) => {
  return (
    <C.Container>
      <C.Resume>
        <C.Header>
          <C.HeaderTitle>Entrada</C.HeaderTitle>
          <FaRegArrowAltCircleUp color='1ed14b'/>
        </C.Header>
        <C.Total >{inCome}</C.Total>
      </C.Resume>
      <C.Resume>
        <C.Header>
          <C.HeaderTitle>Saída</C.HeaderTitle>
          <FaRegArrowAltCircleDown color='#e65054'/>
        </C.Header>
        <C.Total>{expense}</C.Total>
      </C.Resume>
      <C.Resume>
        <C.Header>
          <C.HeaderTitle>Total</C.HeaderTitle>
          <FaCoins color="#f0c33c"/>
        </C.Header>
        <C.Total>{total}</C.Total>
      </C.Resume>
    </C.Container>
  )
}

export default Display;
