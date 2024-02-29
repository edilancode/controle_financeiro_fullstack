import app from "./src/app/app.js";

const PORT = 8800;

app.listen(PORT, () => {
  console.log(`Servidor rodando no endereço http://localhost:8800`);
});

