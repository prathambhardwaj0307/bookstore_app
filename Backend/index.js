import express from "express";
import dotenv from "dotenv";
const app = express()

dotenv.config();

const PORT = process.env.PORT || 4000;

app.get('/', (req, res) => {
  res.send('Test Code is Working Fine!')
})

app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`)
})