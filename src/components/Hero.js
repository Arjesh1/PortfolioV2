import React from 'react'
import { useEffect, useState } from 'react'
import { Col, Container, Row, Nav } from 'react-bootstrap'
import hero from "../assets/img/pic.png"
import Resume from '../assets/resume/Resume.pdf'

const Hero = () => {
  const [loopNum, setLoopNum] = useState(0)
  const [deleting, SetDeleting] = useState(false)
  const rotate = ["Front-End Developer", "Web Developer", "React Developer", "Web Designer"]
const [text, setText] = useState('')
const [delta, setDelta]= useState(300-Math.random() * 100)
const period = 2000

useEffect (() => {
  let ticker = setInterval (() => {
    tick()
  }, delta)

  return () => {clearInterval(ticker)}
}, [text])

const tick = () =>{
  let i = loopNum % rotate.length
  let fullText = rotate[i]
  let updatedText = deleting ? fullText.substring(0, text.length - 1) : fullText.substring(0, text.length + 1)

  setText(updatedText)

  if (deleting) {
    setDelta(prevDelta => prevDelta /2)
  }
  if (!deleting && updatedText===fullText){
    SetDeleting(true)
    setDelta(period)
  } else if (deleting && updatedText === ''){
    SetDeleting(false)
    setLoopNum(loopNum+1)
    setDelta(500)
  }

}


  return (
    <section className='banner' id='home'>
      <Container>
        <Row className='align-items-center'>
          
          <Col xs={12} md={6} xl={5}>
            <img src={hero} alt="Hero Sec"/>
          </Col>

          <Col xs={12} md={6} xl={7}>
            <span className='tagline'>Welcome to My portfolio</span>
            <h1>Hi I'm Arjesh Khadka</h1>
            <h1 className='cod'>{'<>'}<span className='design'>{text}</span>{'</>'}</h1>

            <div className='d-flex justify-content-evenly gap-3 btn'>

            <Nav.Link href="#contact"><button className="vvd"><span>Let’s Connect</span></button></Nav.Link>
            <Nav.Link href={Resume}><button className="vvd"><span>Download Resume</span></button></Nav.Link>

            </div>
          </Col>

        </Row>
      </Container>

    </section>
  )
}

export default Hero
