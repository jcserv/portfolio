import React, { useState } from "react";
import { Card, Row, Form, Col, Button } from "react-bootstrap";
import "../css/Containers/Contact.css";

export function Contact() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("");
  const [msg, setMsg] = useState("");

  const [nameFocus, setNameFocus] = useState(false);
  const [emailFocus, setEmailFocus] = useState(false);
  const [subjectFocus, setSubjectFocus] = useState(false);
  const [msgFocus, setMsgFocus] = useState(false);

  return (
    <div id="contact" className="contact">
      <h1 className="contact-hdr">Contact Me</h1>
      <h5>Whether it's a job opportunity, an invite to coffee,</h5>
      <h5>or feedback on my portfolio, my inbox is open!</h5>
      <h6>
        Feel free to email me as well at{" "}
        <a
          href="mailto:jarrod.servilla@gmail.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          jarrod.servilla@gmail.com
        </a>
      </h6>
      <Row className="d-flex justify-content-center">
        <Card className="contact-card">
          <Form className="contact-form">
            <Row>
              <Col>
                <Form.Group controlId="formName">
                  <Form.Label
                    className={nameFocus || name !== "" ? "elevated-label" : ""}
                  >
                    Name
                  </Form.Label>
                  <Form.Control
                    value={name}
                    type="text"
                    onFocus={() => {
                      setNameFocus(true);
                    }}
                    onBlur={() => {
                      setNameFocus(false);
                    }}
                    onChange={(e) => {
                      setName(e.target.value);
                    }}
                    className={nameFocus || name !== "" ? "focus-input" : ""}
                  />
                </Form.Group>
              </Col>
              <Col>
                <Form.Group controlId="formEmail">
                  <Form.Label
                    className={
                      emailFocus || email !== "" ? "elevated-label" : ""
                    }
                  >
                    Email
                  </Form.Label>
                  <Form.Control
                    value={email}
                    type="email"
                    onFocus={() => {
                      setEmailFocus(true);
                    }}
                    onBlur={() => {
                      setEmailFocus(false);
                    }}
                    onChange={(e) => {
                      setEmail(e.target.value);
                    }}
                    className={emailFocus || email !== "" ? "focus-input" : ""}
                  />
                </Form.Group>
              </Col>
            </Row>

            <Form.Group>
              <Form.Label
                className={
                  subjectFocus || subject !== "" ? "elevated-label" : ""
                }
              >
                Subject
              </Form.Label>
              <Form.Control
                value={subject}
                type="text"
                onFocus={() => {
                  setSubjectFocus(true);
                }}
                onBlur={() => {
                  setSubjectFocus(false);
                }}
                onChange={(e) => {
                  setSubject(e.target.value);
                }}
                className={subjectFocus || subject !== "" ? "focus-input" : ""}
              />
            </Form.Group>
            <Form.Group>
              <Form.Label
                className={msgFocus || msg !== "" ? "elevated-label" : ""}
              >
                Message
              </Form.Label>
              <Form.Control
                value={msg}
                as="textarea"
                rows="5"
                onFocus={() => {
                  setMsgFocus(true);
                }}
                onBlur={() => {
                  setMsgFocus(false);
                }}
                onChange={(e) => {
                  setMsg(e.target.value);
                }}
                className={msgFocus || msg !== "" ? "focus-input" : ""}
              />
            </Form.Group>
            <div className="d-flex justify-content-end">
              <Button variant="info" type="submit">
                Submit
              </Button>
            </div>
          </Form>
        </Card>
      </Row>
    </div>
  );
}

export default Contact;
