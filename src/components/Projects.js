import React from "react";
import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
import notToDo from "../assets/img/js/not-to-do-list.png";
import contact from "../assets/img/js/contactList.png";
import calcu from "../assets/img/js/calculator.png";
import quiz from "../assets/img/js/quiz-app.png";
import quote from "../assets/img/js/quote-generator.png";
import currency from "../assets/img/js/converter.png";
import weather from "../assets/img/js/weather-app.png";
import sydneyHealth from "../assets/img/php-ts/sydneyhealth.jpeg";
import travel from "../assets/img/php-ts/travel.jpeg";
import finance from "../assets/img/react/people finance.png";
import not from "../assets/img/react/not.png";
import prank from "../assets/img/react/prankCalculator.png";
import libra from "../assets/img/react/libraEase.png";
import shoeTrek from "../assets/img/react/shoeTrek.png";
import shoeCms from "../assets/img/react/storeCms.png";

import "animate.css";
import TrackVisibility from "react-on-screen";

const Projects = () => {
  const projects = [
    {
      title: "Not To Do List",
      description: "HTML, CSS, Bootstrap, JS",
      imgUrl: notToDo,
      git: "https://github.com/Arjesh1/Not-To-Do-List",
      live: "https://arjesh1.github.io/Not-To-Do-List/",
    },
    {
      title: "Contact Api",
      description: "HTML, CSS, Bootstrap, JS",
      imgUrl: contact,
      git: "https://github.com/Arjesh1/contact-list-api",
      live: "https://arjesh1.github.io/contact-list-api/",
    },
    {
      title: "Calculator",
      description: "HTML, CSS, JS",
      imgUrl: calcu,
      git: "https://github.com/Arjesh1/calculator",
      live: "https://arjesh1.github.io/calculator/",
    },
    {
      title: "Quiz",
      description: "HTML, CSS, JS",
      imgUrl: quiz,
      git: "https://github.com/Arjesh1/quiz-app",
      live: "https://arjesh1.github.io/quiz-app/",
    },
    {
      title: "Quote Generator",
      description: "HTML, CSS, JS",
      imgUrl: quote,
      git: "https://github.com/Arjesh1/Quote-generator ",
      live: "https://arjesh1.github.io/Quote-generator/ ",
    },
    {
      title: "Weather",
      description: "HTML, CSS, JS",
      imgUrl: weather,
      git: "https://github.com/Arjesh1/weather-app",
      live: "https://arjesh1.github.io/weather-app/",
    },

    {
      title: "Currency Converter",
      description: "HTML, CSS, JS",
      imgUrl: currency,
      git: "https://github.com/Arjesh1/Currency-Converter",
      live: "https://arjesh1.github.io/Currency-Converter/",
    },
  ];

  const project1 = [
    {
      title: "Shoe Trek",
      description:
        " JavaScript, TypeScript, React, Redux, Firebase, Express.js, Node.js Tailwind, Stripe, Git ",
      imgUrl: shoeTrek,
      git: "https://github.com/Arjesh1/ShoeTrek",
      live: "https://shoe-trek.vercel.app/",
    },
    {
      title: "Shoe Trek CMS",
      description:
        " JavaScript, HTML, CSS, Bootstrap, React, Redux, Firebase, Charts, React-Bootstrap ",
      imgUrl: shoeCms,
      git: "https://github.com/Arjesh1/shoe-store-cms",
      live: "https://shoe-store-cms.vercel.app/dashboard",
    },
    {
      title: "Libra Ease",
      description:
        "HTML, CSS, Bootstrap, React, Redux, Firebase, React-Bootstrap ",
      imgUrl: libra,
      git: "https://github.com/Arjesh1/LibraEase---Library-Management-System",
      live: "https://libra-ease-library-management-system-arjesh1.vercel.app/",
    },
    {
      title: "Libra Ease",
      description:
        "HTML, CSS, Bootstrap, React, Redux, Firebase, React-Bootstrap ",
      imgUrl: libra,
      git: "https://github.com/Arjesh1/LibraEase---Library-Management-System",
      live: "https://libra-ease-library-management-system-arjesh1.vercel.app/",
    },
    {
      title: "People Finance",
      description: "HTML, CSS, Bootstrap, React, Redux, Firebase ",
      imgUrl: finance,
      git: "https://github.com/Arjesh1/Financial-Management-React-Redux-",
      live: "https://financial-management-react-redux.vercel.app/",
    },

    {
      title: "Sydney Health Solutions",
      description: "HTML, CSS, JS, PHP, MySQL",
      imgUrl: sydneyHealth,
      git: "https://github.com/Arjesh1/sydneyhealthsolutions",
      live: "https://github.com/Arjesh1/sydneyhealthsolutions",
    },
    {
      title: "Travels",
      description: "HTML, CSS, JS, PHP, MySQL",
      imgUrl: travel,
      git: "https://github.com/Arjesh1/Travels",
      live: "https://github.com/Arjesh1/Travels",
    },

    {
      title: "Not To Do List",
      description: "HTML, CSS, Bootstrap, React",
      imgUrl: not,
      git: "https://github.com/Arjesh1/not-to-do-list-react",
      live: "https://not-to-do-list-react-eta.vercel.app/",
    },

    {
      title: "Calculator",
      description: "HTML, CSS, JS",
      imgUrl: calcu,
      git: "https://github.com/Arjesh1/calculator",
      live: "https://arjesh1.github.io/calculator/",
    },
    {
      title: "Quiz",
      description: "HTML, CSS, JS",
      imgUrl: quiz,
      git: "https://github.com/Arjesh1/quiz-app",
      live: "https://arjesh1.github.io/quiz-app/",
    },
    {
      title: "Quote Generator",
      description: "HTML, CSS, JS",
      imgUrl: quote,
      git: "https://github.com/Arjesh1/Quote-generator ",
      live: "https://arjesh1.github.io/Quote-generator/ ",
    },
    {
      title: "Weather",
      description: "HTML, CSS, JS",
      imgUrl: weather,
      git: "https://github.com/Arjesh1/weather-app",
      live: "https://arjesh1.github.io/weather-app/",
    },
  ];

  const project2 = [
    {
      title: "Libra Ease",
      description:
        "HTML, CSS, Bootstrap, React, Redux, Firebase, React-Bootstrap ",
      imgUrl: libra,
      git: "https://github.com/Arjesh1/LibraEase---Library-Management-System",
      live: "https://libra-ease-library-management-system-arjesh1.vercel.app/",
    },
    {
      title: "People Finance ",
      description: "HTML, CSS, Bootstrap, React, Redux, Firebase ",
      imgUrl: finance,
      git: "https://github.com/Arjesh1/Financial-Management-React-Redux-",
      live: "https://financial-management-react-redux.vercel.app/",
    },

    {
      title: "Not To Do List",
      description: "HTML, CSS, Bootstrap, React",
      imgUrl: not,
      git: "https://github.com/Arjesh1/not-to-do-list-react",
      live: "https://not-to-do-list-react-eta.vercel.app/",
    },

    {
      title: "Prank Calculator",
      description: "HTML, CSS, Bootstrap, React ",
      imgUrl: prank,
      git: "https://github.com/Arjesh1/React-Prank-Calculator-",
      live: "https://react-prank-calculator-eight.vercel.app/",
    },
  ];

  const project3 = [
    {
      title: "Sydney Health Solutions",
      description: "HTML, CSS, JS, PHP, MySQL",
      imgUrl: sydneyHealth,
      git: "https://github.com/Arjesh1/sydneyhealthsolutions",
      live: "https://github.com/Arjesh1/sydneyhealthsolutions",
    },
    {
      title: "Travels",
      description: "HTML, CSS, JS, PHP, MySQL",
      imgUrl: travel,
      git: "https://github.com/Arjesh1/Travels",
      live: "https://github.com/Arjesh1/Travels",
    },
  ];

  return (
    <section className="project" id="project">
      <Container>
        <Row>
          <Col size={12}>
            <TrackVisibility>
              {({ isVisible }) => (
                <div
                  className={
                    isVisible ? "animate__animated animate__fadeIn" : ""
                  }
                >
                  <h2>Projects</h2>
                  <Tab.Container id="projects-tabs" defaultActiveKey="fourth">
                    <Nav
                      variant="pills"
                      className="nav-pills mb-5 justify-content-center align-items-center"
                      id="pills-tab"
                    >
                      <Nav.Item>
                        <Nav.Link eventKey="fourth">Recents</Nav.Link>
                      </Nav.Item>
                      <Nav.Item>
                        <Nav.Link eventKey="first">React</Nav.Link>
                      </Nav.Item>
                      <Nav.Item>
                        <Nav.Link eventKey="second">JS/TS</Nav.Link>
                      </Nav.Item>

                      <Nav.Item>
                        <Nav.Link eventKey="third">PHP</Nav.Link>
                      </Nav.Item>
                    </Nav>
                    <Tab.Content
                      id="slideInUp"
                      className={
                        isVisible ? "animate__animated animate__slideInUp" : ""
                      }
                    >
                      <Tab.Pane eventKey="first">
                        <Row>
                          {project2.map((project2, index) => {
                            return <ProjectCard key={index} {...project2} />;
                          })}
                        </Row>
                      </Tab.Pane>
                      <Tab.Pane eventKey="second">
                        <Row>
                          {projects.map((project, index) => {
                            return <ProjectCard key={index} {...project} />;
                          })}
                        </Row>
                      </Tab.Pane>
                      <Tab.Pane eventKey="third">
                        <Row>
                          {project3.map((project3, index) => {
                            return <ProjectCard key={index} {...project3} />;
                          })}
                        </Row>
                      </Tab.Pane>

                      <Tab.Pane eventKey="fourth">
                        <Row>
                          {project1.map((project3, index) => {
                            return <ProjectCard key={index} {...project3} />;
                          })}
                        </Row>
                      </Tab.Pane>
                    </Tab.Content>
                  </Tab.Container>
                </div>
              )}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Projects;
