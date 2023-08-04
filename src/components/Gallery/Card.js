import React, { useState } from 'react'

function Card(props) {
    const [popup, setPopup] = useState(false)
    const toggleModal = () => {
        setPopup(!popup)
    }
    return (
        <>
            <div className='items'>
                <div className='img'>
                    <img src={props.images} alt="" />
                    <i className='fas fa-image' onClick={toggleModal}></i>
                </div>
                <div className='title'>
                    <h3>{props.title}</h3>
                </div>
            </div>


            {popup && (

                <div className='popup'>
                    <div className="hide"></div>
                    <div className="popup-content">
                        <button onClick={toggleModal}>Close</button>
                        <img src={props.images} alt="" />
                    </div>
                </div>
            )}


        </>
    )
        


}

export default Card