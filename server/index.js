const express = require("express");
const app = express();

app.get("/", () => {
  return "hello world";
});

const port = 8080;

app.listen(port, () => console.log(`Rodando com express na porta ${port}!`));
