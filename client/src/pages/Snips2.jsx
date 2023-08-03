import React, { useEffect, useState } from 'react'
import axios from 'axios'
import {Link} from 'react-router-dom';



const Snips = () => {
  const [snips, setSnips] = useState([])

  useEffect(()=>{
    const fetchAllSnips = async ()=>{
      try{
        const res = await axios.get("http://localhost:8800/snips")
        setSnips(res.data);
      }catch(err){
         console.log(err)       
      }
    }
    fetchAllSnips()
  }, []);

    const handleDelete = async (id)=>{
      try{
        await axios.delete("http://localhost:8800/snips/" +id)
        window.location.reload()
      }catch(err){
        console.log(err)
      }
    }

  return (
    <div> 
      <button className="AddNewSnipButton" >
        <Link className="Link" to="/add">Add new snip</Link>
      </button>
      <div className="snips" id="snips">
        {snips.map((snip)=>(
          <div className="snip" key={snip.id}>
            {snip.cover && <img src={snip.cover} alt="" />}
            <h2>{snip.title}</h2>
            <p>{snip.desc}</p>
            <span>{snip.amount}</span>
            <button className="delete" onClick={()=>handleDelete(snip.id)}>Delete</button>
            <button className="update"><Link to={`/update/${snip.id}`}>Update</Link></button>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Snips