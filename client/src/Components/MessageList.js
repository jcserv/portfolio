import React, { useEffect, useState } from "react";
import { retrieveMsgs, deleteMsg } from "../Actions/msg";
import { Card, Row, Col } from "react-bootstrap";
import { AiFillDelete } from "react-icons/ai";
import "../css/Components/MessageList.css";

export function MessageList() {
  const [msgs, setMsgs] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);

  async function fetchData() {
    const data = await retrieveMsgs();
    if (data && data.length > 0) {
      setMsgs(data);
    }
  }

  async function delMsg(e, msg) {
    e.preventDefault();
    const response = await deleteMsg(msg._id);
    if (response === "Success") {
      await fetchData();
    }
  }

  function renderMsgs() {
    if (msgs && msgs.length > 0) {
      const messages = msgs.map((msg, index) => (
        <Row className="d-flex justify-content-center">
          <Card key={index} className="p-4 w-50 text-left">
            <Card.Title>
              {msg.subject} from: {msg.name}
              <AiFillDelete
                onClick={(e) => {
                  delMsg(e, msg);
                }}
                className="delete"
              />
            </Card.Title>
            <Card.Subtitle>{msg.email}</Card.Subtitle>
            <Card.Body>{msg.message}</Card.Body>
          </Card>
        </Row>
      ));
      return <Col>{messages}</Col>;
    }
    return null;
  }

  return renderMsgs();
}

export default MessageList;
