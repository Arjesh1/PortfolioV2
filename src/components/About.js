import React from "react";
import { Col, Container, Row, Nav } from "react-bootstrap";
import meImg from "../assets/img/pic1.png";

const About = () => {
  return (
    <section id="about" className="about">
      <Container>
        <h5>Get To Know </h5>
        <h2>About Me</h2>
        <Row className="align-items-center about-container ">
          <Col xs={12} md={6} xl={5}>
            <div className="about-me">
              <div className="aboutMeImg">
                <img src={meImg} alt="img" />
              </div>
            </div>
          </Col>

          <Col xs={12} md={6} xl={7}>
            <div className="about-content">
              <div className="about-cards">
                <article className="about-card">
                  <i class="fa-solid fa-award about-icon"></i>
                  <h5> IT</h5>
                  <small> Graduate</small>
                </article>

                <article className="about-card">
                  <i class="fa-sharp fa-solid fa-code about-icon"></i>
                  <h5> Experience</h5>
                  <small> 1+ Yrs Coding</small>
                </article>

                <article className="about-card">
                  <i class="fa-solid fa-diagram-project about-icon"></i>
                  <h5> Projects</h5>
                  <small> 10+</small>
                </article>
              </div>

              <p>
                I am Arjesh Khadka, a motivated professional with a strong
                passion for software development. I hold a Bachelor's degree in
                Information Technology from Sydney, Australia.
              </p>

              <p>
                My journey in software development commenced during my academic
                years, and I distinguished myself through exceptional coursework
                performance and hands-on experience. Since then, I have
                relentlessly pursued new technologies and programming languages,
                maintaining a commitment to staying abreast of industry trends
                and best practices. I firmly believe that a solid IT foundation
                and a relentless dedication to learning are essential for making
                a substantial impact in the software development field.
              </p>

              <Nav.Link href="#contact">
                <button className="vvd">
                  <span>Let’s Connect</span>
                </button>
              </Nav.Link>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default About;
