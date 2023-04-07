import React from 'react'
import { Container, Row, Col, Navbar } from 'react-bootstrap'

const Footer = () => {

  const year = new Date().getFullYear()
  
  return (
    <section id='footer' className='footer'>

      
        <Container>
            <div className="footer-container d-flex ">
            <Row>
                <div className="footer-top d-flex justify-content-between align-items-center ">
                  <Col>   
                    <Navbar.Brand href="/">
            <div className="footer-logo"></div>
          </Navbar.Brand>
                    </Col>

                    <Col >
                    <div className='footer-icon d-flex justify-content-end '>
                        
                        <span className="navbar-text">
              <div className="social-icon">
                <a href="https://www.linkedin.com/in/arjesh-khadka/"><i class="fa-brands fa-linkedin-in "></i></a>
                <a href="https://twitter.com/ArjeshKhadka"><i class="fa-brands fa-twitter"></i></a>
                <a href="https://github.com/Arjesh1"><i class="fa-brands fa-github"></i></a>
              </div>

               
            </span>
                    </div>
                    </Col>
                    
                </div>
                </Row>

                <div className="footer-bottom d-flex text-center">
                    <p>ArjeshKhadka@{year}| All rights reserved</p>
                </div>
            </div>
         </Container>
      
    </section>
  )
}

export default Footer
