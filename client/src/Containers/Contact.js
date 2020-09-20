import * as Yup from "yup";
import React from "react";
import { Card, Row, Col } from "react-bootstrap";
import Fade from "react-reveal/Fade";
import { Form, withFormik } from "formik";
import Button from "@material-ui/core/Button";
import FormControl from "@material-ui/core/FormControl";
import TextField from "@material-ui/core/TextField";

import { submitMsg } from "../Actions/msg";
import "../css/Containers/Contact.css";

const ERROR_MESSAGES = {
  nameMissing: "A name is required",
  emailMissing: "A email is required",
  emailInvalid: "Please enter a valid email address",
  subjectMissing: "A subject is missing",
  msgMissing: "A message is missing",
};

export const CreateSourceSchema = Yup.object().shape({
  name: Yup.string().required(ERROR_MESSAGES.nameMissing),
  email: Yup.string()
    .email(ERROR_MESSAGES.emailInvalid)
    .required(ERROR_MESSAGES.emailMissing),
  subject: Yup.string().required(ERROR_MESSAGES.nameMissing),
  message: Yup.string().required(ERROR_MESSAGES.msgMissing),
});

export const ContactForm = ({
  errors,
  handleChange,
  values: { name, email, subject, message },
}) => {
  return (
    <Form>
      <Row className="row">
        <Col>
          <FormControl error={"name" in errors} className="w-100">
            <TextField
              className="w-100 smallinp"
              id="Name"
              label="name"
              onChange={handleChange}
              value={name}
              variant="outlined"
              error={"name" in errors}
              helperText={errors.name || null}
            />
          </FormControl>
        </Col>
        <Col>
          <FormControl error={"email" in errors} className="w-100">
            <TextField
              className="w-100"
              id="Email"
              label="email"
              onChange={handleChange}
              value={email}
              variant="outlined"
              error={"email" in errors}
              helperText={errors.email || null}
            />
          </FormControl>
        </Col>
      </Row>
      <Row className="row">
        <FormControl error={"subject" in errors} className="w-100">
          <TextField
            className="w-100"
            id="Subject"
            label="subject"
            onChange={handleChange}
            value={subject}
            variant="outlined"
            error={"subject" in errors}
            helperText={errors.subject || null}
          />
        </FormControl>
      </Row>
      <Row className="row">
        <FormControl error={"message" in errors} className="w-100">
          <TextField
            className="w-100"
            id="Message"
            label="message"
            onChange={handleChange}
            value={message}
            variant="outlined"
            error={"message" in errors}
            helperText={errors.message || null}
            rows={4}
            multiline
          />
        </FormControl>
      </Row>
      <Button variant="contained" color="primary">
        Submit
      </Button>
    </Form>
  );
};

export const UnconnectedContact = ({ ...formikProps }) => (
  <div id="contact" className="contact">
    <Fade>
      <div>
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
          <Card className="w-50 contact-card">
            <ContactForm {...formikProps} />
          </Card>
        </Row>
      </div>
    </Fade>
  </div>
);

const ConnectedContact = withFormik({
  handleSubmit: ({ name, email, subject, message }) => {
    submitMsg(name, email, subject, message);
  },
})(UnconnectedContact);

export default ConnectedContact;
