import React, { useState } from 'react'
import './Contact.css'



  
function ConatctForm() {
  const [fname,setFname] = useState('')
  const [lname,setLname] = useState('')
  const [phone,setPhone] = useState('')
  const [email,setEmail] = useState('')
  const [subject,setSubject] = useState('')
  const [company,setCompany] = useState('')
  const [message,setMessage] = useState('')



  const [allValue,setAllValue]=useState([])


  const formSubmit=(e)=>{
    e.preventDefault()
    const newValue = {fname,lname,phone, email,subject, company, message}
    setAllValue([...allValue,newValue])

    setFname=("")
    setLname=("")
    setPhone=("")
    setEmail=("")
    setSubject=("")
    setCompany=("")
    setMessage=("")

  }


  return (
    <>
   <section className='contact mtop'>
    <div className='container flex'>
      <div className='main-context'>
        <h2>Contact Form</h2>
        <p>Fill out the form below, we will get back you soon.</p>
        <form onSubmit={formSubmit}>
          <div className="grid1">
            <div className='input'>
              <span>
                First Name <label>*</label>
              </span>
              <input type="text" name='fname' value={fname} onChange={(e)=> setFname(e.target.value)} />
            </div>
            <div className='input'>
              <span>
                Last Name <label>*</label>
              </span>
              <input type="text" name='lname' value={lname} onChange={(e)=> setLname(e.target.value)} />
            </div>
            <div className='input'>
              <span>
                Phone Number <label>*</label>
              </span>
              <input type="text" name='phone' value={phone} onChange={(e)=> setPhone(e.target.value)} />
            </div>
            <div className='input'>
              <span>
                Email <label>*</label>
              </span>
              <input type="text" name='email' value={email} onChange={(e)=> setEmail(e.target.value)} />
            </div>
            <div className='input'>
              <span>
                Service <label>*</label>
              </span>
              <input type="text" name='subject' value={subject} onChange={(e)=> setSubject(e.target.value)} />
            </div>
            <div className='input'>
              <span>
               Subject<label>*</label>
              </span>
              <input type="text" name='company' value={company} onChange={(e)=> setCompany(e.target.value)} />
            </div>
           
          </div>
          <div className='input inputlast'>
              <span>
               Write Your  Message <label>*</label>
              </span>
              <textarea name="message" value={message} cols="30" rows="10"  onChange={(e)=> setMessage(e.target.value)}></textarea>
            </div>
          <button className='primary-btn'>Submit Now</button>
        </form>
    
      
      </div>
      <div className="side-content">
        <h3>Visit our location</h3>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste quibusdam eligendi eos qui in, accusamus cumque rem distinctio dolorum, culpa, odit repellat tenetur Optio voluptatum quo modi voluptatem. </p>
        <br />
        <h3>Message Us</h3>
        <span>info@gzonetourism.com</span>
        <br />
        <span>+97142622488
          </span>
        <br />

        <div className="icon">
          <h3>Follow Us</h3>
          <div className="flex_space">
          <a href="https://www.facebook.com/gzonetourism" ><i className='fab fa-facebook'></i></a>
          <a href="https://www.instagram.com/gzone_tourism/"><i className='fab fa-instagram'></i></a>
            <i className='fab fa-linkedin'></i>
            <i className='fab fa-twitter'></i>
          <a href="https://www.youtube.com/watch?v=Oq8gar8rjSw"><i className='fab fa-youtube'></i></a>
          </div>
        </div>
      </div>
    </div>
   </section>

    <section className='show-data'>
      {allValue.map((currentValue)=>{
        const { fname, lname ,phone , email, subject , company , message }= currentValue
        return(

       
      <div className='sign-box'>
        <h1>Send Successfully</h1>
        <h3>
          First Name : <p>{fname}</p>
        </h3>
        <h3>
          Last Name : <p>{lname}</p>
        </h3>
        <h3>
          Phone Number : <p>{phone}</p>
        </h3>
        <h3>
          Email : <p>{email}</p>
        </h3>
        <h3>
          Service : <p>{subject}</p>
        </h3>
        <h3>
         Subject : <p>{company}</p>
        </h3>
        <h3>
          Message : <p>{message}</p>
        </h3>
      </div>
       )
      })}
   

            
    </section>


    </>
  )
}

export default ConatctForm