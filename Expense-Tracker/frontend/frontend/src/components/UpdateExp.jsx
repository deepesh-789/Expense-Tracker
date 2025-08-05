import axios from 'axios';
import React from 'react'
import { useEffect } from 'react';
import { useState } from 'react'
import { useNavigate, useParams , } from 'react-router-dom';

const UpdateExp = () => {

    const [exp ,setExp] = useState({});
    const {id} = useParams();
        const navigate = useNavigate();

        useEffect(()=>{
            axios.get(`http://localhost:4000/exp/get/${id}`)
            .then((res)=>setExp(res.data))
            .catch((err)=>console.log(err));
        },[id])
    
        const handleChange = (e)=>{
            setExp({
                ...exp,
                [e.target.name]:e.target.value
            })
        }
    
        const handleSubmit = (e)=>{
            e.preventDefault();
            axios.put(`http://localhost:4000/exp/update/${id}`,exp)
            .then(()=>{
                alert('Expenses Updated Successfully');
                navigate('/')
            })
            .catch((err)=>console.log(err));
        }


  return (
    <>
        <div
            className="container my-4"
        >
            <div
                className="row justify-content-center align-items-center g-2"
            >
                <div className="col-md-5">

                    <div className="card">
                        
                        <div className="card-body">
                            <form onSubmit={handleSubmit}>
                                <div className="form-floating mb-3">
                                    <input
                                        type="text"
                                        className="form-control"
                                        name="imageUrl"
                                        id="formId1"
                                        placeholder=""
                                        value={exp.imageUrl}
                                        onChange={handleChange}
                                    />
                                    <label for="formId1">Image Url</label>
                                </div>

                                <div className="form-floating mb-3">
                                    <input
                                        type="text"
                                        className="form-control"
                                        name="title"
                                        id="formId1"
                                        placeholder=""
                                        value={exp.title}
                                        onChange={handleChange}
                                    />
                                    <label for="formId1">Title</label>
                                </div>

                                <div className="form-floating mb-3">
                                    <input
                                        type="number"
                                        className="form-control"
                                        name="amount"
                                        id="formId1"
                                        placeholder=""
                                        value={exp.amount}
                                        onChange={handleChange}
                                    />
                                    <label for="formId1">Amount</label>
                                </div>

                                <div className="mb-3">
                                    <label for="" className="form-label">Category</label>
                                    <select
                                        className="form-select form-select-lg"
                                        name="category"
                                        id=""
                                        value={exp.category}
                                        onChange={handleChange}
                                    >
                                        
                                        <option value="Misscellineous">Misscellineous</option>
                                        <option value="Travelling">Travelling</option>
                                        <option value="Grocery">Grocery</option>
                                    </select>
                                </div>
                                <button
                                    type="submit"
                                    className="btn btn-primary"
                                >
                                    Update Expenses
                                </button>
                                
                                
                                
                                
                                
                            </form>
                            
                        </div>
                    </div>
                    

                </div>
            </div>
            
        </div>
    </>
  )
}

export default UpdateExp