import React from 'react'
import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";

import notToDo from "../assets/img/js/not-to-do-list.png";
import contact from "../assets/img/js/contactList.png";
import calcu from "../assets/img/js/calculator.png";
import quiz from "../assets/img/js/quiz-app.png";
import weather from "../assets/img/js/quote-generator.png";
import quote from "../assets/img/js/weather-app.png";
import sydneyHealth from "../assets/img/php-ts/sydneyhealth.jpeg";
import travel from "../assets/img/php-ts/travel.jpeg";




import 'animate.css';
import TrackVisibility from 'react-on-screen';

const Projects = () => {
    const projects = [
        {
          title: "Not To Do List",
          description: "HTML, CSS, Bootstrap, JS",
          imgUrl: notToDo,
          git: "https://github.com/Arjesh1/Not-To-Do-List",
          live: "https://arjesh1.github.io/Not-To-Do-List/"
        },
        {
          title: "Contact Api",
          description: "HTML, CSS, Bootstrap, JS",
          imgUrl: contact,
          git: "https://github.com/Arjesh1/contact-list-api",
          live: "https://arjesh1.github.io/contact-list-api/"
        },
        {
          title: "Calculator",
          description: "HTML, CSS, JS",
          imgUrl: calcu,
          git: "https://github.com/Arjesh1/calculator",
          live: "https://arjesh1.github.io/calculator/"
        },
        {
          title: "Quiz",
          description: "HTML, CSS, JS",
          imgUrl: quiz,
          git: "https://github.com/Arjesh1/quiz-app",
          live: "https://arjesh1.github.io/quiz-app/"
        },
        {
          title: "Weather",
          description: "HTML, CSS, JS",
          imgUrl: weather,
          git: "https://github.com/Arjesh1/weather-app",
          live: "https://arjesh1.github.io/weather-app/"
        },
        {
          title: "Quote Generator",
          description: "HTML, CSS, JS",
          imgUrl: quote,
          git: "https://github.com/Arjesh1/Quote-generator",
          live: "https://arjesh1.github.io/Quote-generator/"
        },
      ];


      const project2 = [
        {
          title: "Not To Do List",
          description: "HTML, CSS, Bootstrap, JS",
          imgUrl: notToDo,
          git: "https://github.com/Arjesh1/Not-To-Do-List",
          live: "https://arjesh1.github.io/Not-To-Do-List/"
        },
        
      ];

      const project3 = [
        {
          title: "Sydney Health Solutions",
          description: "HTML, CSS, JS, PHP, MySQL",
          imgUrl: sydneyHealth,
          git: "https://github.com/Arjesh1/sydneyhealthsolutions",
          live: "https://github.com/Arjesh1/sydneyhealthsolutions"
        },
        {
          title: "Travels",
          description: "HTML, CSS, JS, PHP, MySQL",
          imgUrl: travel,
          git: "https://github.com/Arjesh1/Travels",
          live: "https://github.com/Arjesh1/Travels"
        },
        {
          title: "Sydney Health Solutions",
          description: "HTML, CSS, JS, PHP, MySQL",
          imgUrl: notToDo,
          git: "https://github.com/Arjesh1/sydneyhealthsolutions",
          live: "https://github.com/Arjesh1/sydneyhealthsolutions"
        },
        
        
      ];

  return (
    <section className="project" id="project">
      <Container>
        <Row>
          <Col size={12}>
            <TrackVisibility>
              {({ isVisible }) =>
              <div className={isVisible ? "animate__animated animate__fadeIn": ""}>
                <h2>Projects</h2>
                <p>As a developer working on a project that utilizes HTML, CSS, JavaScript, React, and TypeScript, I'm excited about the potential to create a dynamic and modern web application. I have used React as the front-end framework and TypeScript for added type safety. Overall, I'm looking forward to learn more of these technologies to enhance and explore more things that can be done.</p>
                <Tab.Container id="projects-tabs" defaultActiveKey="first">
                  <Nav variant="pills" className="nav-pills mb-5 justify-content-center align-items-center" id="pills-tab">
                    <Nav.Item>
                      <Nav.Link eventKey="first">HTML/CSS/JS</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="second">React</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="third">PHP/TS</Nav.Link>
                    </Nav.Item>
                  </Nav>
                  <Tab.Content id="slideInUp" className={isVisible ? "animate__animated animate__slideInUp" : ""}>
                    <Tab.Pane eventKey="first">
                      <Row>
                        {
                          projects.map((project, index) => {
                            return (
                              <ProjectCard
                                key={index}
                                {...project}
                                />
                            )
                          })
                        }
                      </Row>
                    </Tab.Pane>
                    <Tab.Pane eventKey="second">
                    <Row>
                        {
                          project2.map((project2, index) => {
                            return (
                              <ProjectCard
                                key={index}
                                {...project2}
                                />
                            )
                          })
                        }
                      </Row>
                    </Tab.Pane>
                    <Tab.Pane eventKey="third">
                    <Row>
                        {
                          project3.map((project3, index) => {
                            return (
                              <ProjectCard
                                key={index}
                                {...project3}
                                />
                            )
                          })
                        }
                      </Row>
                    </Tab.Pane>
                  </Tab.Content>
                </Tab.Container>
              </div>}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
      
    </section>
  )
}

export default Projects
