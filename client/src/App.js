import React from "react";
import StickyBox from "react-sticky-box";
import NavigationBar from "./Components/NavigationBar";
import Sidebar from "./Components/Sidebar";
import Landing from "./Containers/Landing";
import About from "./Containers/About";
import Work from "./Containers/Work";
import Projects from "./Containers/Projects";
import Contact from "./Containers/Contact";
import Footer from "./Components/Footer";
import Fade from "react-reveal/Fade";
import { Row, Col } from "react-bootstrap";

import "./App.css";

function App() {
  return (
    <div className="App">
      <Landing />
      <NavigationBar />
      <Row className="row-bg">
        <Col xs={1} className="sidebar-bg">
          <StickyBox>
            <div className="d-flex justify-content-center">
              <Sidebar />
            </div>
          </StickyBox>
        </Col>
        <Col className="row-bg">
          <Fade>
            <About />
          </Fade>
          <Fade>
            <Work />
          </Fade>
          <Projects />
          <Fade>
            <Contact />
          </Fade>
        </Col>
        <Col xs={1} className="sidebar-bg"></Col>
      </Row>
      <Row>
        <Col>
          <Footer />
        </Col>
      </Row>
    </div>
  );
}

export default App;
