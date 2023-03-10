// import React from 'react'
// import data from './Data'
// import './Gallery.css'
// import Slider from "react-slick";
// import "slick-carousel/slick/slick.css"; 
// import "slick-carousel/slick/slick-theme.css";

// function Gallery() {
//     const settings = {
//         dots: false,
//         infinite: true,
//         speed: 500,
//         slidesToShow: 4,
//         slidesToScroll: 2
//     }
//   return (
//     <>
//     <section className='collection'>
//         <div className="container top">
//         <Slider {...settings}>
//             {data.map((value)=>{
//             return(
//                 <div className="box">
//                     <img src={value.cover} alt="" />
//                 </div>
//             )
//         })}
//         </Slider>
//         </div>
//     </section>
//     </>
//   )
// }

// export default Gallery

import "./Gallery.css";
import { FaFacebookSquare, FaInstagramSquare, FaLinkedin ,FaTwitterSquare } from 'react-icons/fa';

const Gallery = () => {
  return (
    <div className="footer">
      <div className="top">
        <div>
          <h1>Gzonetourism</h1>
          <p>Choose Your Favourite Destination</p>
        </div>
        <div >
          <a href="https://www.facebook.com/gzonetourism" >
             <i ><FaFacebookSquare/> </i>
          </a>
          <a href="https://www.instagram.com/gzone_tourism/">
            <i><FaInstagramSquare /></i> 
          </a>
          <a href="/">
             <i ><FaLinkedin/></i> 
          </a>
          <a href="/">
             <i><FaTwitterSquare/></i>
          </a>
        </div>
        <div className="bottom">
            <div className="db">
            <h4>Project</h4>
            <a href="/">Status</a>
            <a href="/">License</a>
            <a href="/">All Versions</a>
            </div>
            <div className="db">
            <h4>Our Services</h4>
            <a href="/">GitHub</a>
            <a href="/">Issues</a>
            <a href="/">Project</a>
            <a href="/">Twitter</a>
            </div>
            <div className="db">
            <h4>Help</h4>
            <a href="/">Support</a>
            <a href="/">Troubles</a>
            <a href="/">Contact</a>
            </div>
            <div className="db">
            <h4>Others</h4>
            <a href="/">Terms of Service</a>
            <a href="/">Privacy Policy</a>
            <a href="/">License</a>
            </div>
        
        
      </div>
      </div>
    </div>
        
  );
};

export default Gallery;
