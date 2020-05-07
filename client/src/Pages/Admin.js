import React, { useState } from "react";
import NavigationBar from "../Components/NavigationBar";
import MessageList from "../Components/MessageList";
import { login } from "../Actions/login";
import { Row, Form, Button } from "react-bootstrap";
import "../css/Pages/Admin.css";

export function Admin() {
  const [password, setPassword] = useState("");
  const [title, setTitle] = useState("Login");
  const [show, setShow] = useState(false);

  async function loginUser() {
    const response = await login(password);
    if (response === "Success") {
      setShow(true);
      setTitle("Inbox");
    }
  }

  function renderContent() {
    if (!show) {
      return (
        <Form onSubmit={loginUser}>
          <Form.Group>
            <Form.Control
              value={password}
              type="password"
              placeholder="Password"
              onChange={(e) => {
                setPassword(e.target.value);
              }}
            />
          </Form.Group>
          <Button variant="primary" onClick={loginUser}>
            Submit
          </Button>
        </Form>
      );
    } else {
      return <MessageList />;
    }
  }

  return (
    <div className="Home">
      <NavigationBar />
      <h1 className="header">{title}</h1>
      <Row className="d-flex justify-content-center">{renderContent()}</Row>
    </div>
  );
}

export default Admin;
