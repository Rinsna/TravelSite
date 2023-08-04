import React, { useState } from 'react'
import Data from './Data'




function Slide() {

    //     const[current,setCurrent]=useState(0)
    //     const length = slides.length

    //     const nextSlide=()=>{
    //         setCurrent(current===length -1 ? 0 : current + 1)
    //     }
    //     const prevSlide=()=>{
    //         setCurrent(current=== 0 ? length -1 : current - 1)
    //     }

    //     if(!Array.isArray(slides) || slides.length <= 0){
    //         return null

     return (

      <div className='video'> <video src="/images/video.mp4" autoPlay loop muted  controls className="video video__play-button" />

    </div>  
     )


      // <iframe width="100%" height="700" src="https://www.youtube.com/embed/Oq8gar8rjSw?autoplay=1&mute=1&controls=0&&loop=1&playlist=Oq8gar8rjSw&fs=0 "  
      // frameborder="0"
      //  allowfullscreen   ></iframe>

   //  <iframe width="100%" height="700" src="https://www.youtube.com/embed/Oq8gar8rjSw?modestbranding=1&autoplay=1&mute=1&controls=0&loop=1&playlist=Oq8gar8rjSw&fs=0" 
   //  frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media;
   //   gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
     

       
             
    
     

      


}




//     <>
//     <section className='slider'>



//     {Data.map((slide,index)=>{
//         return(
//             <div className={index === current? "slide active" : "slide" } key={index}>
//                 {index === current && <video src={slide.images} autoPlay="true" className="video video__play-button"
//  />}
//             </div>
//         )
//     })}

// </section>



//     <section className='slide-form'>
//         <div className='container'>
//             <h2>Enjoy Your Holiday</h2>
//             <span>Search and Book Your Package</span>

//     <form action="">
//         <input type="text" placeholder='Search City' name='' id='' />
//         <div className='flex_space'>
//             <input type="date" placeholder='Check In' />
//             <input type="date" placeholder='Check Out' />
//         </div>
//         <div className='flex_space'>
//             <input type="number" placeholder='Adult(s)(+18)' />
//             <input type="number" placeholder='Children(0 - 17)' />
//         </div>
//         <input type="number" placeholder='Price Range' />
//         <input type="submit" value='Search' className='submit'  />
//     </form>

//         </div>
//     </section>

//     </>
//   )
// }



export default Slide