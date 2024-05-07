const express = require("express");
const app = express()
app.use(express.json());
app.use(
  express.urlencoded({
    extended: true,
  })
);

app.post('/usuarios', (req, res, next) => {
    console.log(req.body)
    res.send('<h1>parabens Usuario incluido</h1>') 
})

app.post('/usuarios/:id', (req, res, next) => {
  console.log(req.body)
  res.send('<h1>parabens Usuario alterado</h1>') 
})

app.listen(8080)