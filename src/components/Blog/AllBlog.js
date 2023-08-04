import React, { useState } from 'react'
import BlogCard from './BlogCard'
import BlogData from './BlogData'
import './BlogHome.css'
import Whatsapp from '../../common/Share/Whatsapp';

function AllBlog() {
    const [items,setItems] = useState(BlogData)
  return (
    <>
                        <Whatsapp />

    <section className='blog top'>
        <div className="container">
            <div className="content grid">
                {items.map((item)=>{
                    return  <BlogCard key={item.id} item={item}/>
                })}
               
            </div>
        </div>

        <div>


            


                </div>
    </section>
    </>
  )
}

export default AllBlog