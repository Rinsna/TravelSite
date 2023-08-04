import React from 'react'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import PopularData from './PopData';
import Slider from "react-slick";

function Card(props) {

  const SampleNextArrow = (props) => {
    const { onClick } = props
    return (
      <div className='control-btn' onClick={onClick}>
        <button className='next'>
          <i className='fa fa-long-arrow-alt-right'></i>
        </button>
      </div>
    )
  }
  const SamplePrevtArrow = (props) => {
    const { onClick } = props
    return (
      <div className='control-btn' onClick={onClick}>
        <button className='prev'>
          <i className='fa fa-long-arrow-alt-left'></i>
        </button>
      </div>
    )
  }

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 2,
    initialSlide: 0,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevtArrow />,
          responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          arrows: true,

        }
      },
    ]
  };



  return (
    <>
      <Slider {...settings}>
        {
          PopularData.map((value) => {
            return (



              <div className="cards">
                <div className="item">
                  <div className="imgae">
                    <img src={value.image} alt="" />
                    <i className='fas fa-map-marker-alt'>
                      <label >{value.country}</label></i>
                  </div>

                  {/* <div className="rate">
                    <i className='fa fa-star'></i>
                    <i className='fa fa-star'></i>
                    <i className='fa fa-star'></i>
                    <i className='fa fa-star'></i>
                    <i className='fa fa-star'></i>
                  </div> */}
                  <div className="details">
                    <h2>{value.name}</h2>
                    <div className="boarder"></div>
                    <h3>{value.price} /
                      <span>5 Days </span>
                    </h3>
                  </div>
                </div>
              </div>)
          })
        }
      </Slider>
    </>
  )
}


export default Card