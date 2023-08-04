import React from 'react'
import HeadTitle from '../../common/Navbar/HeadTitle/HeadTitle'
import Card from './Card'
import GalleryData from './GalleryData'
import './Gallery.css'
import Whatsapp from '../../common/Share/Whatsapp'

function Gallery() {
  return (
    <>
    <Whatsapp/>
      <HeadTitle />
      <section className='gallery top'>
        <div className='container grid'>
          {
            GalleryData.map((value) => {
              return <Card images={value.img} title={value.title} />
            })
          }

        </div>
      
          
        
        
      
      </section>
    </>
  )
}

export default Gallery