import React, { useState } from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom';
import "../style.css"

const Add = () => {
const [snip, setSnip] = useState({
  title: "",
  desc: "",
  amount: null,
  cover: "",
});

  const navigate = useNavigate()

  const handleChange = (e) =>{
    setSnip(prev=>({ ...prev, [e.target.name]: e.target.value}))
  };

  const handleClick = async e =>{
    e.preventDefault()
    try{
      await axios.post("http://localhost:8800/snips", snip)
      navigate("/")
    }catch(err){
      console.log(err)
    }
  }
  console.log(snip)
  return (
    <div className="form">
      <h1>Add new snip</h1>
      <input 
        type="text" 
        placeholder='title' 
        onChange={handleChange} 
        name="title"
      />
      <input 
        type="text" 
        placeholder='desc' 
        onChange={handleChange} 
        name="desc"
      />
      <input  
        type="number" 
        placeholder='amount' 
        onChange={handleChange} 
        name="amount"
      />
      <input 
        type="text" 
        placeholder='cover' 
        onChange={handleChange} 
        name="cover"
      />
      <button onClick={handleClick}>Add</button>
    </div>
  )
}

export default Add