import Grid from '../Grid';
import * as C from './style'
import { useState } from 'react';
import axios from 'axios';

const Form = ({ transactionsList, setTransactionsList, addList }) => {
  
  const [id, setId] = useState('');
  const [desc, setDesc] = useState('');
  const [amount, setAmount] = useState('');
  const [date, setDate] = useState('');
  const [isExpense, setIsExpense] = useState(false);
  const [edit, setEdit] = useState(true);
  
  const handleInput = async () => {
    if (!desc || !amount || !date) {
      alert('Infome a descrição, o valor e a data!');
      return;
    } else if (amount < 1) {
      alert('O valor tem que ser positivo!');
      return;
    } 
    if (edit == true) {
        updateList();
        setDesc('');
        setAmount('');
        setDate('');
        setIsExpense('');
        setEdit(false);
    } 
    else { 
      const transaction = 
        {
         desc: desc,
         amount: amount,
         date: date,
         expense: isExpense,
        };

      await axios.post("http://localhost:8800/", transaction)
      .then(() => alert("Cadastrado realizado com sucesso!"))
      .catch(() => alert("Não foi possível realizar o cadastar!"));

      addList(transaction);
      setDesc('');
      setAmount('');
      setDate('');
    }
  };

  const updateList = async () => {
    if (!desc || !amount || !date) {
      alert('Selecione o item na lista a ser editado!');
      return;
    } else if (amount < 1) {
      alert('O valor tem que ser positivo!');
      return;
    }
    
    const transaction = 
      {
        desc: desc, 
        amount: amount,
        date: date, 
        expense: isExpense,
      };
      
      await axios.put(`http://localhost:8800/` + id, transaction)
      .then(() => alert('Item editado com sucesso!'));
      
      setDesc('');
      setAmount('');
      setDate('');
     };
     
  return (
    <>
      <C.Container>
        <C.InputContent>
          <C.Label>Descrição</C.Label>
          <C.Input type='text' value={desc} onChange={(e) => setDesc(e.target.value)}/>
        </C.InputContent>
        <C.InputContent>
          <C.Label>Valor</C.Label>
          <C.Input type='number' value={amount} onChange={(e) => setAmount(e.target.value)}/> 
        </C.InputContent>
        <C.InputContent>
          <C.Label>Data</C.Label>
          <C.Input type='date'
            value={date}
            onChange={(e) => setDate(e.target.value)}
          />
        </C.InputContent>
        
        <C.RadioGroup>
          <C.Input 
            type='radio' 
            id='rIncome' 
            name='groupe1' 
            defaultChecked
            onChange={() => setIsExpense(!isExpense)}
          />
           <C.Label htmlFor='rIncome'>Entrada</C.Label>

          <C.Input 
            type='radio' 
            id='rExpense' 
            name='groupe1'
            onChange={() => setIsExpense(!isExpense)}
          />
          <C.Label htmlFor='rExpense'>Saída</C.Label>
        </C.RadioGroup>
        <C.Button onClick={handleInput}>Adicionar</C.Button>
      </C.Container>
      <Grid 
        itens={transactionsList} 
        setItens={setTransactionsList}
        setDesc={setDesc}
        setAmount={setAmount}
        setDate={setDate}
        setIsExpense={setIsExpense}
        setId={setId}
        setEdit={setEdit}
      />
    </>
  )
};

export default Form;
