import React from 'react'
import { Col, Container, Row, Nav } from 'react-bootstrap'
import meImg from '../assets/img/pic1.png'
;

const About = () => {
  return (
    
      <section id='about' className='about'>

        <Container>
        <h5>Get To Know </h5>
        <h2>About Me</h2>
        <Row className='align-items-center about-container '>
          
        <Col xs={12} md={6} xl={5}>
          <div className='about-me'>
            <div className='aboutMeImg'>
            <img src={meImg} alt='img'/>
            </div>
          </div>
          
          </Col>

          <Col xs={12} md={6} xl={7}>
          <div className='about-content'>
              <div className='about-cards'>
                <article className='about-card'>
                <i class="fa-solid fa-award about-icon"></i>
                  <h5> IT</h5>
                  <small> Graduate</small>
                </article>

                <article className='about-card'>
                <i class="fa-sharp fa-solid fa-code about-icon"></i>
                  <h5> Experience</h5>
                  <small> 1+ Yrs Coding</small>
                </article>

                <article className='about-card'>
                <i class="fa-solid fa-diagram-project about-icon"></i>
                  <h5> Projects</h5>
                  <small> 10+</small>
                </article>
              </div>

              <p>I am Arjesh Khadka, a highly motivated individual with a deep passion for web development.  I completed my Bachelor's degree in Information Technology at Sydney, Australia.
              </p>

              <p>My interest in web development began early on in my academic career, and I excelled in my coursework and gained valuable hands-on experience. Since then, I have continued to explore new technologies and languages, always striving to stay up-to-date with the latest trends and best practices in the industry. I firmly believe that a solid foundation in IT and a dedication to learning are key to making a significant impact in the field of web development. 
              </p>

              <Nav.Link href="#contact"><button className="vvd"><span>Let’s Connect</span></button></Nav.Link>


            </div>
          </Col>

          

        </Row>
      </Container>

      </section>
      
  )
}

export default About
