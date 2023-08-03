import React, { useState } from 'react'
import axios from 'axios'
import { useLocation, useNavigate } from 'react-router-dom';

const Update = () => {
const [snip, setSnip] = useState({
  title: "",
  desc: "",
  amount: null,
  cover: "",
});
 
  const navigate = useNavigate()
  const location = useLocation()

  const snipId = location.pathname.split("/")[2]
  console.log(location.pathname.split("/")[2]);

  const handleChange = (e) =>{
    setSnip(prev=>({ ...prev, [e.target.name]: e.target.value}))
  };

  const handleClick = async e =>{
    e.preventDefault()
    try{
      await axios.put("http://localhost:8800/snips/"+snipId, snip)
      navigate("/")
    }catch(err){
      console.log(err)
    }
  }
  console.log(snip)
  return (
    <div className="form">
      <h1>Update the snip</h1>
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
      <button onClick={handleClick}>Update</button>
    </div>
  )
}

export default Update