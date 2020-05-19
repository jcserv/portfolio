import React, { useState } from "react";
import AdminBar from "../Components/AdminBar";
import MessageList from "../Components/MessageList";
import { login } from "../Actions/login";
import { Row, Form, Button } from "react-bootstrap";
import "../css/Pages/Admin.css";

export function Admin() {
  const [password, setPassword] = useState("");
  const [title, setTitle] = useState("Login");
  const [show, setShow] = useState(false);

  async function handleSubmit(e) {
    e.preventDefault();
    const response = await login(password);
    if (response === "Success") {
      setShow(true);
      setTitle("Inbox");
    }
  }

  function renderContent() {
    if (!show) {
      return (
        <Form onSubmit={handleSubmit}>
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
          <Button type="submit" variant="primary">
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
      <AdminBar />
      <h1 className="header">{title}</h1>
      <Row className="d-flex justify-content-center">{renderContent()}</Row>
    </div>
  );
}

export default Admin;
