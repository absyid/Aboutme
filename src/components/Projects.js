import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
import projImg1 from "../assets/img/project-biofarma.png";
import projImg2 from "../assets/img/project-TitipAja.png";
import projImg3 from "../assets/img/project-misterAladin.png";
import colorSharp2 from "../assets/img/color-sharp2.png";
import "animate.css";
import TrackVisibility from "react-on-screen";

export const Projects = () => {
  const projectsFirst = [{ title: "Titip Aja Project", imgUrl: projImg2 }];

  const projectSecond = [
    {
      title: "Biofarma Project",
      imgUrl: projImg1,
    },
  ];

  const projectThird = [
    {
      title: "MNC Aladin Mall Project",
      imgUrl: projImg3,
    },
  ];

  return (
    <section className="project" id="experience">
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
                  <h2>Experience</h2>
                  <h3 className="project-desc">
                    As IP Frontend Engineer at PT.BixBox Teknologi Perkasa
                  </h3>
                  <Tab.Container id="projects-tabs" defaultActiveKey="first">
                    <Nav
                      variant="pills"
                      className="nav-pills mb-5 justify-content-center align-items-center"
                      id="pills-tab"
                    >
                      <Nav.Item>
                        <Nav.Link eventKey="first">BioFarma Project</Nav.Link>
                      </Nav.Item>
                      <Nav.Item>
                        <Nav.Link eventKey="second">TitipAja Project</Nav.Link>
                      </Nav.Item>
                      <Nav.Item>
                        <Nav.Link eventKey="third">
                          MNC Aladin Mall Project
                        </Nav.Link>
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
                          {projectSecond.map((project, index) => {
                            return <ProjectCard key={index} {...project} />;
                          })}
                          <p>
                            Developing a Content Management System using React
                            for Mediverse Super Apps and conducting unit testing
                            using Vitest which will connect every clinic, lab or
                            hospital in Indonesia as a service of Bio Farma, one
                            of Indonesia's state-owned enterprises engaged in
                            the pharmaceutical sector
                          </p>
                        </Row>
                      </Tab.Pane>
                      <Tab.Pane eventKey="second">
                        <Row>
                          {projectsFirst.map((project, index) => {
                            return <ProjectCard key={index} {...project} />;
                          })}
                          <p>
                            Developing a Content Management System using React
                            for warehouse operator TitipAja as a provider of
                            integrated order fulfillment solutions and services,
                            supported by a number of systems, various strategic
                            warehouse locations, and sustainable processes in
                            Indonesia
                          </p>
                        </Row>
                      </Tab.Pane>
                      <Tab.Pane eventKey="third">
                        <Row>
                          {projectThird.map((project, index) => {
                            return <ProjectCard key={index} {...project} />;
                          })}
                          <p className="project-third-txt">
                            Developing a Content Management System using Vue for
                            online shope malls, namely Aladin Mall MNC as a
                            provider of various integrated digital needs in
                            Indonesia.
                          </p>
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
      <img className="background-image-right" src={colorSharp2}></img>
    </section>
  );
};
