import React from 'react'
import Cards from './Card'
import Sdata from './Sdata'

const Service = () => {
  return (
    <>
    <div className='services'>
      <div className='pt-5 pb-5'>
        <h1 className='text-center'>Our Services</h1>
      </div>
      <div className='container-fluid pb-5'>
        <div className='row'>
          <div className='col-10 mx-auto'>
            <div className='row gy-4'>
              {
                Sdata.map((val, ind) => {
                  return (
                     
                    <Cards key={ind}
                    imgsrc={val.imgsrc}
                    title={val.title}
                  />
                  )
                })
              }
            </div>
          </div>
        </div>
       </div>
       </div>
    </>
  )
}

export default Service