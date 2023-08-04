import React, { useState } from 'react'
import Dcard from './Dcard'
import Sdata from './Sdata'
import Whatsapp from '../../common/Share/Whatsapp';

function AllItem() {
    const[items,setItem]=useState(Sdata)
  return (
    <>
     {/* <Whatsapp/> */}
    <section className='gallery desi mtop'>
        <div className="container">
            <div className="content grid">
                {
                    items.map((item)=>{
                        return  <Dcard key={item.id} item={item} />
                    })
                }
            </div>
        </div>

        
    </section>
    </>
  )
}

export default AllItem