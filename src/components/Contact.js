import React, { useRef } from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import contact from '../assets/img/contact.png'
import emailjs from '@emailjs/browser';
import { toast, ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';


const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_u1n41no', 'template_cowjy2p', form.current, 'KL5NYDxjXQUP5Nzdl4')

    
      .then((result) => {
         toast.success("Message Sent Successfully")
        
      }, (error) => {
         toast.error("Please try again.")
        
      });

      e.target.reset()
  };


  return (
    <section id='contact' className='contact'>
      <Container>
      <h2 className='text-center mb-5'>Get In Touch</h2>
        <Row>
          <Col md={6}>
            <img src={contact} alt="contact"/>
          </Col>

          <Col md={6}>
            
            <form ref={form} onSubmit={sendEmail}>
              <Row>
                <Col sm={6} className='px-1'>
                  <input type='text'  placeholder='First Name' name='user_fname'  />
                </Col>

                <Col sm={6} className='px-1'>
                  <input type='text' placeholder='Last Name' name='user_lname' />
                </Col>

                <Col sm={6} className='px-1'>
                  <input type='email'  placeholder='Email' name='user_email' />
                </Col>

                <Col sm={6}  className='px-1'>
                  <input type='tel'  placeholder='Phone No' name='user_phone' />
                </Col>

                <Col sm={6}  className='px-1'>
                  <textarea row='6'  placeholder="Message" name='message' />
                  <button type='submit' value='Send'><span>Send</span></button>
                </Col>

               


              </Row>
            </form>
          
          </Col>

          

        </Row>

        <Row>
          <Col md={6}>
            
          </Col>

          <Col md={6}>

<div className="email-section">
<h3>OR</h3>
   <p className=''>Reach out over email</p>
   <div className="email ">
       <a href="mailto:arjesh.khadka2@gmail.com" className='d-flex align-items-center justify-content-center'>arjesh.khadka2@gmail.com
       <div className="send">
           <i className="fa-sharp fa-solid fa-paper-plane"></i>
       </div>
       </a>

       
   </div>
</div>

          </Col>

          </Row>
      </Container>

      <ToastContainer />
      
    </section>
  )
}

export default Contact
