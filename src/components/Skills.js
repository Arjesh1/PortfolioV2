import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import "react-multi-carousel/lib/styles.css";
import { ReactComponent as Figma } from "../assets/img/figma.svg";
import { ReactComponent as Html } from "../assets/img/html5.svg";
import { ReactComponent as Css } from "../assets/img/css3.svg";
import { ReactComponent as Js } from "../assets/img/js.svg";
import { ReactComponent as Ts } from "../assets/img/typescript.svg";
import { ReactComponent as React1 } from "../assets/img/react.svg";
import { ReactComponent as Php } from "../assets/img/php.svg";
import { ReactComponent as Mysql } from "../assets/img/mysql.svg";
import { ReactComponent as Git } from "../assets/img/git.svg";
import { ReactComponent as Github } from "../assets/img/github.svg";
import { ReactComponent as Redux } from "../assets/img/redux.svg";
import { ReactComponent as Firebase } from "../assets/img/firebase.svg";
import { ReactComponent as Express } from "../assets/img/express.svg";
import { ReactComponent as Node } from "../assets/img/nodejs.svg";
import { ReactComponent as MongoDb } from "../assets/img/mongodb.svg";
import Marquee from "react-fast-marquee";

const Skills = () => {
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };

  return (
    <div>
      <section className="skill " id="skills">
        <Container>
          <Row>
            <Col>
              <div className="skills-bx mt-5">
                <div>
                  <h2>Skills</h2>
                  <p>
                    The skills on the display includes the following but is not
                    limited....
                  </p>
                </div>

                <div className="slider d-flex justify-content-center">
                  <div className="icon d-flex justify-content-center">
                    <Marquee style={{}} pauseOnHover={true} gradient={false}>
                      <Figma className="spacer" />
                      <Html className="spacer" />
                      <Css className="spacer" />
                      <Js className="spacer" />
                      <Ts className="spacer" />
                      <React1 className="spacer" />
                      <Redux className="spacer" />
                      <Express className="spacer" />
                      <Node className="spacer" />
                      <Php className="spacer" />
                      <Mysql className="spacer" />
                      <MongoDb className="spacer" />
                      <Git className="spacer" />
                      <Github className="spacer" />
                      <Firebase className="spacer" />
                    </Marquee>
                  </div>
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
    </div>
  );
};

export default Skills;
