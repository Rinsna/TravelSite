import React from 'react'
import AboutCard from './AboutCard'
import './About.css';
import HeadTitle from '../../common/Navbar/HeadTitle/HeadTitle';
import Whatsapp from '../../common/Share/Whatsapp';

function About() {
    return (
        <>

<Whatsapp />
            <HeadTitle />

            <section className='about top'>
                <div className='container'>
                    <AboutCard />
                </div>
            </section>

            <section className='features top'>
                <div className='container aboutCard flex_space'>
                    <div className='row row1'>
                        <h1>Our
                            <span> Features</span>
                        </h1>
                        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Excepturi recusandae amet est rerum dicta, nisi dolor reprehenderit corrupti odio commodi magnam obcaecati consequatur id temporibus architecto sapiente exercitationem atque. </p>
                        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quibusdam architecto reprehenderit obcaecati incidunt repellat, iusto impedit deserunt quam illum consequatur accusantium voluptate fugiat totam error, magnam amet, et quis non!</p>
                        <button className='secondary-btn'>
                            Explore More 
                        </ button>
                    </div>
                    <div className='row image'>
                        <img src="/images/feature-img-1.jpg" alt="" />
                        {/* <div className='control-btn' hidden>
                            <button className='prev' hidden>
                                <i className='fas fa-play'></i>
                            </button>
                        </div> */}
                    </div>
                </div>

                <div>
                        

                </div>

            </section>
        </>
    )
    // <i className='fas fa-long-arrow-alt-right'></i>
}

export default About