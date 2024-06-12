import Button from 'react-bootstrap/Button';
import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react'
import { NavLink } from 'react-router-dom';
import '../App.css';

const Common = (props) => {
  return (
    <>
      <section id='header' className='d-flex align-items-center pt-5 pb-5'>
      <div className='container-fluid nav_bg pb-3'>
       <div className='row'>
         <div className='col-10 mx-auto pt-5 pb-5'>
         <div className='row'>
          <div className='col-md-6 pt-5 pt-lg-0 order-2 order-lg-1 d-flex justify-content-center flex-column pb-5'>
            <h1 className='head'> {props.name} <strong className='brand-name'>Abhey</strong>
            </h1>
            <h2 className='my-3'>We are the team of talented developer making websites
            </h2>
            <div className=' mt-3'>
            <NavLink to={props.visit}> <Button variant="info"> {props.btnName}
              </Button> </NavLink>
            </div>
          </div>
           <div className='col-lg-6 order-1 order-lg-2 header-img'>
            <img src={props.imgsrc} className='img-fluid animated image' alt='home img'/>  
            </div>
           </div>
         </div>
        </div>

      </div>
      </section>
    </>
  )
}

export default Common