import React from 'react'
import { useEffect } from 'react';
import { useState } from 'react'
import axios from 'axios'
import { NavLink, useNavigate, useParams } from 'react-router-dom';

const Home = () => {

  const [exps, setExps] = useState([]);

  const {id} = useParams();
  const navigate = useNavigate()

  useEffect(()=>{
    axios.get("http://localhost:4000/exp/get")
    .then((res)=>setExps(res.data))
    .catch((err)=>console.log(err));
  },[])

  const handleDelete = (e)=>{
    e.preventDefault();
    axios.delete(`http://localhost:4000/exp/delete/${id}`)
    .then(()=>navigate('/'))
    .catch((err)=>console.log(err));
  }

  return (
    <>
      <div
        className="container my-3"
      >
        <div
          className="row justify-content-center align-items-center g-2"
        >
          <div className="col=md-5">
            <h1 className='text-center'>Total Expenses</h1>
            <div
              className="table-responsive"
            >
              <table
                className="table table-primary text-center"
              >
                <thead>
                  <tr>
                    <th scope="col">Images</th>
                    <th scope="col">Title</th>
                    <th scope="col">Amount</th>
                    <th scope="col">Category</th>
                    <th scope="col">Actions</th>
                  </tr>
                </thead>
                {
                  exps.map((exp)=>(
                    <tbody>
                  <tr className="">
                    <td><img src={exp.imageUrl} alt="" style={{height:'80px'}} /></td>
                    <td scope="row">{exp.title}</td>
                    <td>{exp.amount}</td>
                    <td>{exp.category}</td>
                    <td>

                      <NavLink
                        name=""
                        id=""
                        className="btn btn-primary"
                        to={`/update/${exp._id}`}
                        role="button"
                        >Update</NavLink
                      >
                      
                      <NavLink
                        name=""
                        id=""
                        className="btn btn-primary ms-2"
                        to={`/show/${exp._id}`}
                        role="button"
                        >Read More</NavLink
                      >
                      
                      

                    </td>

                  </tr>
                  
                </tbody>
                  ))
                }
                
                
              </table>
            </div>
            
          </div>
        </div>
        
      </div>
      
    </>
  )
}

export default Home