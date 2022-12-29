import { Container, Row, Col } from "react-bootstrap";
import githubIcon from "../assets/img/github_icon.png";

export const Footer = () => {
  return (
    <footer className="footer" id="connect">
      <Container>
        <Row className="d-flex justify-content-end">
          <Col xs={12} md={6} xl={2}>
            <p className="Footer-txt">
              <p>Click me! to connect on Github, Explore more about me</p>
            </p>
          </Col>
          <Col xs={12} md={6} xl={1}>
            <p className="footer-icon">
              <a
                href="https://github.com/absyid"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img src={githubIcon} alt="Icon" />
              </a>
            </p>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};
