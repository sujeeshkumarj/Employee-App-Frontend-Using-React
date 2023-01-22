import React, { useState } from 'react'
import { useEffect } from 'react';
import axios from 'axios';
import Navbar from './Navbar';

const Home = () => {

  var [employeelist,setemployeelist] = useState([]);

     useEffect(
      ()=>{
        getData()
      },[]
     )

      const getData = ()=>{
        axios.get('https://jsonplaceholder.typicode.com/users')
        .then(
          (response)=>{
            console.log(response.data);
            setemployeelist(response.data);
          }
        ).catch(
          (error)=>{
            console.log("Error in loadind data"+error);
          }
        )
        }
        
  return (
    <div>
      <Navbar/>
      <div className="container">
        <div className="row">
          <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">

          <div className="row g-3">
          <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
            {employeelist.map(
              (value,key)=>{
                return <div class="card">
                <div class="card-body">
                  <h5 class="card-title">{value.id}</h5>
                  <h6 class="card-subtitle mb-2 text-muted">{value.name}</h6>
                  <p class="card-text">{value.email}</p>
                </div>
              </div>

              }
            )}
           </div>

          </div>

          </div>
        </div>
      </div>

    </div>
  )
}

export default Home