import * as C from "./style";
import { FaRegArrowAltCircleUp, 
  FaRegArrowAltCircleDown, FaPencilAlt, 
  FaTrash} from "react-icons/fa";

const GridItem = ({ item, onDelete, handleEdit }) => {
  return (
    <C.Tr>
      <C.Td>{item.desc}</C.Td>
      <C.Td>R$ {item.amount}</C.Td>
      <C.Td>{item.date}</C.Td>
      <C.Td>
        {item.expense == 1 ? (
          <FaRegArrowAltCircleDown color="#e65054"/>
        ) : (
          <FaRegArrowAltCircleUp color="#1ed14b"/>
        )}
      </C.Td>
      <C.Td>
        <FaPencilAlt onClick={() => handleEdit(item, item.id)}/>
      </C.Td>
      <C.Td>
        <FaTrash onClick={() => onDelete(item.id)}/>
      </C.Td>
    </C.Tr>
  )
}

export default GridItem;