import React from "react";
import NavigationBar from "./Components/NavigationBar";
import Sidebar from "./Components/Sidebar";
import Landing from "./Containers/Landing";
import About from "./Containers/About";
import Skills from "./Containers/Skills";
import Work from "./Containers/Work";
import Projects from "./Containers/Projects";
import Contact from "./Containers/Contact";

import { Row, Col } from "react-bootstrap";

import "./App.css";

function App() {
  return (
    <div className="App">
      <Landing />
      <NavigationBar />
      <Row>
        <Col xs={1} className="blue">
          <Sidebar />
        </Col>
        <Col>
          <About />
          <Skills />
          <Work />
          <Projects />
          <Contact />
        </Col>
      </Row>
    </div>
  );
}

export default App;
