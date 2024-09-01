const express = require("express"); //Require -> CommonJS

const app = express();
app.disable("x-powered-by"); // Desabilitar el header X-Powered-By: Express

app.length("/", (req, res) => {
  res.json({ message: "Hola mundo" });
});

const PORT = process.env.PORT ?? 1234;

app.listen(PORT, () => {
  console.log(`server listening on port http://localhost:${PORT}`);
});
