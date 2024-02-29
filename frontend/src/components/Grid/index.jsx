import * as C from "./style.jsx"
import GridItem from "../GridItem.jsx/index.jsx";
import axios from "axios";

const Grid = ({ itens, setDesc, setAmount, setDate, setIsExpense, setId, setEdit }) => {

  const onDelete = async (ID) => {
    if (confirm(`Tem certeza que deseja apagar?`)) {
       axios.delete('http://localhost:8800/'+ ID)
      .then(() => alert("Item excluido com sucesso!"))
      .catch(() => alert("Erro!"));
    }
  };

  const handleEdit = (item, id) => {
    setDesc(item.desc);
    setAmount(item.amount);
    setDate(item.date);
    setIsExpense(item.expense)
    setId(id);
    setEdit(true);
  };

  return (
    <C.Table>
      <C.Thead>
        <C.Tr>
          <C.Th width={45}>Descrição</C.Th>
          <C.Th width={20}>Valor</C.Th>
          <C.Th width={22}>Data</C.Th>
          <C.Th width={8} >Tipo</C.Th>
          <C.Th width={6} ></C.Th>
          <C.Th width={6}></C.Th>
        </C.Tr>
      </C.Thead>
      <C.Tbody>
        {itens?.map((item, index) => (
          <GridItem 
            key={index} 
            item={item} 
            onDelete={onDelete}
            handleEdit={handleEdit}
          />
        ))}
      </C.Tbody>
    </C.Table>
  )
};

export default Grid;