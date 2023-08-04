import React from 'react'
import HeadTitle from '../../common/Navbar/HeadTitle/HeadTitle'
import ContactForm from './ContactForm'
import Whatsapp from '../../common/Share/Whatsapp'

function Contact() {
  return (
    <>
    <Whatsapp/>
    
    <HeadTitle/>
    <ContactForm />
    </>
  )
}

export default Contact