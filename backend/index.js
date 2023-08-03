import express from "express"
import mysql, { createConnection } from "mysql"
import cors from "cors"

const app = express()

const db = mysql.createConnection({
  host:"localhost",
  user:"root",
  password:"1234",
  database:"test"
})


app.use(express.json())
app.use(cors())
app.get("/", (req, res)=>{
  res.json("This is the backend!")
})

app.get("/snips", (req, res)=>{
  const q = "SELECT * FROM snips"
  db.query(q,(err, data)=>{
    if(err) return res.json(err)
    return res.json(data)
  })
})


app.post("/snips", (req, res)=>{
  const q = "INSERT INTO snips (`title`, `desc`, `amount`, `cover`) VALUES (?)"
  const values = [
    req.body.title,
    req.body.desc,
    req.body.amount,
    req.body.cover,
  ];

  db.query(q, [values], (err, data) =>{
    if(err) return res.json(err);
    return res.json("Book has been created succesfully!");
  });
})

app.delete("/snips/:id", (req, res) =>{
  const snipId = req.params.id;
  const q = "DELETE FROM snips WHERE id = ?"
  console.log(snipId);
  db.query(q, [snipId], (err, data) =>{
    if(err) return res.json(err);
    return res.json("Book has been deleted succesfully!");
  });
}) 

app.put("/snips/:id", (req, res) =>{
  const snipId = req.params.id;
  const q = "UPDATE snips SET `title` = ?, `desc` = ?, `amount` = ?, `cover` = ? WHERE id = ?";
  
  const values = [
    req.body.title,
    req.body.desc,
    req.body.amount,
    req.body.cover,
  ]

  db.query(q, [...values,snipId], (err, data) =>{
    if(err) return res.json(err);
    return res.json("Book has been updated succesfully!");
  });
})


app.listen(8800, ()=>{
  console.log("Connected to backend!")
})