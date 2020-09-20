import React from "react";
import StickyBox from "react-sticky-box";
import Landing from "../Containers/Landing";
import About from "../Containers/About";
import Skills from "../Containers/Skills";
import Work from "../Containers/Work";
import Projects from "../Containers/Projects";
import Contact from "../Containers/Contact";

import NavigationBar from "../Components/NavigationBar";
import ContactList from "../Components/ContactList";
import Footer from "../Components/Footer";
import { Row, Col } from "react-bootstrap";

import "../css/Pages/Home.css";

function Home() {
  return (
    <div className="App">
      <Landing />
      <NavigationBar />
      <Row className="row-bg">
        <Col xs={1} className="sidebar-bg">
          <StickyBox>
            <div className="d-flex justify-content-center">
              <div className="d-none d-sm-block">
                <div className="sidebar">
                  <ContactList isHorizontal={false} />
                </div>
              </div>
            </div>
          </StickyBox>
        </Col>
        <Col className="row-bg">
          <About />
          <Skills />
          <Work />
          <Projects />
          <Contact />
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

export default Home;
