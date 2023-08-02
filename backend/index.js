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

app.get("/books", (req, res)=>{
  const q = "SELECT * FROM BOOKS"
  db.query(q,(err, data)=>{
    if(err) return res.json(err)
    return res.json(data)
  })
})


app.post("/books", (req, res)=>{
  const q = "INSERT INTO books (`title`, `desc`, `price`, `cover`) VALUES (?)"
  const values = [
    req.body.title,
    req.body.desc,
    req.body.price,
    req.body.cover,
  ];

  db.query(q, [values], (err, data) =>{
    if(err) return res.json(err);
    return res.json("Book shas been created succesfully!");
  });
})

app.delete(("/books/:id", (req, res) =>{
  const bookId = req.params.id;
  const q = "DELETE FROM books WHERE id = ?"
  console.log(bookId);
  db.query(q, [bookId], (err, data) =>{
    if(err) return res.json(err);
    return res.json("Book has been deleted succesfully!");
  });
}))

app.listen(8800, ()=>{
  console.log("Connected to backend!")
})