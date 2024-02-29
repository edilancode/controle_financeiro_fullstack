
import { useState, useEffect } from "react";
import Global from "./styles/global";
import Header from "./components/Header";
import Display from "./components/Display";
import Form from "./components/Form";
import axios from "axios";

const App = () => {
  const [transactionsList, setTransactionsList] = useState([]);

  const getList = async () => {
    try {
      const res = await axios.get("http://localhost:8800");
      setTransactionsList(res.data);
    }
    catch (error) {
      alert("Servidor inoperante");
    }

    const amountIncome = transactionsList.filter((item) => item.expense == 0)
    .map((transaction) => Number(transaction.amount));
  
    const amountExpense = transactionsList.filter((item) => item.expense == 1)
    .map((transaction) => Number(transaction.amount));

    const inCome = amountIncome.reduce((acc, cur) => acc + cur, 0).toFixed(2);
    const expense = amountExpense.reduce((acc, cur) => acc + cur, 0).toFixed(2);
    const total = Math.abs(inCome - expense).toFixed(2);

    setIncome(`R$ ${inCome}`);
    setExpense(`R$ ${expense}`);
    setTotal(`${Number(inCome) < Number(expense) ? "-" : ""}R$ ${total}`);
  };

  const [inCome, setIncome] = useState(0);
  const [expense, setExpense] = useState('unchecked');
  const [total, setTotal] = useState(0);


  useEffect(() => {
    getList();
  
  }, [transactionsList]);

  const addList = async (transaction) => {
    const newArrayTransactions = [...transactionsList, transaction];
    setTransactionsList(newArrayTransactions);
  };

  return (
    <>
      <Header />
      <Display 
        inCome={inCome}
        expense={expense}
        total={total}
      />
      <Form 
        transactionsList={transactionsList}
        setTransactionsList={setTransactionsList}
        addList={addList}
      />
      <Global />
    </>
  )
};

export default App;