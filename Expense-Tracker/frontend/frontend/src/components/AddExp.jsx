import axios from 'axios';
import React from 'react'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom';


const AddExp = () => {

    const [exp ,setExp] = useState({});

    const navigate = useNavigate();

    const handleChange = (e)=>{
        setExp({
            ...exp,
            [e.target.name]:e.target.value
        })
    }

    const handleSubmit = (e)=>{
        e.preventDefault();
        axios.post("http://localhost:4000/exp/add",exp)
        .then(()=>{
            alert('Expenses Added Successfully');
            navigate('/')
        })
        .catch((err)=>console.log(err));
    }

    return (
    <>
        <div
            class="container my-4"
        >
            <div
                class="row justify-content-center align-items-center g-2"
            >
                <div class="col-md-5">

                    <div class="card">
                        
                        <div class="card-body">
                            <form onSubmit={handleSubmit}>
                                <div class="form-floating mb-3">
                                    <input
                                        type="text"
                                        class="form-control"
                                        name="imageUrl"
                                        id="formId1"
                                        placeholder=""
                                        value={exp.imageUrl}
                                        onChange={handleChange}
                                    />
                                    <label for="formId1">Image Url</label>
                                </div>

                                <div class="form-floating mb-3">
                                    <input
                                        type="text"
                                        class="form-control"
                                        name="title"
                                        id="formId1"
                                        placeholder=""
                                        value={exp.title}
                                        onChange={handleChange}
                                    />
                                    <label for="formId1">Title</label>
                                </div>

                                <div class="form-floating mb-3">
                                    <input
                                        type="number"
                                        class="form-control"
                                        name="amount"
                                        id="formId1"
                                        placeholder=""
                                        value={exp.amount}
                                        onChange={handleChange}
                                    />
                                    <label for="formId1">Amount</label>
                                </div>

                                <div class="mb-3">
                                    <label for="" class="form-label">Category</label>
                                    <select
                                        class="form-select form-select-lg"
                                        name="category"
                                        id=""
                                        value={exp.category}
                                        onChange={handleChange}
                                    >
                                        
                                        <option value="Misscellienous">Misscellineous</option>
                                        <option value="Travelling">Travelling</option>
                                        <option value="Grocery">Grocery</option>
                                    </select>
                                </div>
                                <button
                                    type="submit"
                                    class="btn btn-primary"
                                >
                                    Add Expenses
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

export default AddExp