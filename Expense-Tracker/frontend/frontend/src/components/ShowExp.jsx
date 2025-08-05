import axios from 'axios';
import React from 'react'
import { useState } from 'react';
import { useEffect } from 'react';
import { NavLink, useNavigate, useParams } from 'react-router-dom'

const ShowExp = () => {
    const [exp, setExp] = useState({})
    const {id} = useParams();
    const navigate = useNavigate();

    useEffect(()=>{
        axios.get(`http://localhost:4000/exp/get/${id}`)
        .then((res)=>setExp(res.data))
        .catch((err)=>console.log(err));
    },[id])

    const handleDelete = (e)=>{
        e.preventDefault();
        axios.delete(`http://localhost:4000/exp/delete/${id}`)
        .then(()=>navigate('/'))
        .catch((err)=>console.log(err));
    }

  return (
    <>
        <div
            class="container my-2"
        >
            <div
                class="row justify-content-center align-items-center g-2"
            >
                <div class="col-md-5">
                    <div class="card">
                        <img class="card-img-top" src={exp.imageUrl} alt="Title" style={{height:'300px', width:'100%'}}/>
                        <div class="card-body">
                            <h4 class="card-title">{exp.title}</h4>
                            <p class="card-text">{exp.amount}</p>
                            <h4>{exp.category}</h4>
                            <p>{new Date(exp.createdAt).toLocaleDateString('en-US',{
                                year:'numeric',
                                month:'2-digit',
                                day:'numeric'
                            })} <span>{new Date(exp.createdAt).toLocaleTimeString('en-US',{
                                hour:'2-digit',
                                minute:'2-digit',
                                hour12:true
                            })}</span></p>
                            <NavLink
                                name=""
                                id=""
                                className="btn btn-danger"
                                onClick={handleDelete}
                                role="button"
                                >Delete </NavLink
                            >
                            <NavLink
                                name=""
                                id=""
                                className="btn btn-primary ms-3"
                                to={`/`}
                                role="button"
                                >Go Back </NavLink
                            >
                            
                            
                        </div>
                    </div>
                    
                </div>
            </div>
            
        </div>
        
    </>
  )
}

export default ShowExp