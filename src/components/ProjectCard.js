import { Col, Nav, Row } from "react-bootstrap";

export const ProjectCard = ({ title, description, imgUrl, git, live }) => {
  return (
    
    <Col size={12} sm={6} md={4}>
      <div className="proj-imgbx">
        <img src={imgUrl} />
        <div className="proj-txtx">
          <h4>{title}</h4>
          <span>{description}</span>
        </div>

        <div className="proj-btn ">
          
          <div className="proj-med">
        <Nav.Link href={git} target="_blank" ><button className="vvd" ><span>Github</span></button></Nav.Link>
        </div>
        

        
        <div>
        <Nav.Link href={live} target="_blank"><button className="vvd" ><span>Live</span></button></Nav.Link>
        </div>
        
        </div>
      </div>
    </Col>
  )
}