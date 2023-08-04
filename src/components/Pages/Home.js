import React from 'react'
import Hero from '../HomeSection/Hero'
import HomeAbout from '../HomeSection/HomeAbout'
import DestinationHome from '../HomeSection/Destinate/DestinationHome'
import MostPopular from '../HomeSection/Popular/MostPopular'
import Works from '../HomeSection/Work/Works'
import Gallery from '../HomeSection/Gallery/Gallery'
import Whatsapp from '../../common/Share/Whatsapp'

function Home() {
  return (
    <>
        <Whatsapp />
        <Hero/>
        <HomeAbout/>
        <MostPopular />
        <DestinationHome />
        <Works/>
        <Gallery/>
    </>
  )
}

export default Home