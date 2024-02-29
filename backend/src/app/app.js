import express  from "express";
import cors from 'cors'
import { getList, addList, deleteList, updateList } from "./controllers/TransactionController.js";

const app = express();
app.use(express.json());
app.use(cors());

app.get('/', getList);
app.post('/', addList);
app.delete('/:id', deleteList);
app.put('/:id', updateList);

export default app;