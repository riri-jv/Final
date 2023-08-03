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
            <div className="top">
              <button className="update"><Link to={`/update/${snip.id}`}><img className="icon" src="../assets/edit-icon.png" alt="" srcset="" /></Link></button>
              <button className="delete" onClick={()=>handleDelete(snip.id)}>Delete</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Snips