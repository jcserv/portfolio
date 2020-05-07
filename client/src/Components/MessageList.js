import React, { useEffect, useState } from "react";
import { retrieveMsgs } from "../Actions/msg";
import { Card } from "react-bootstrap";

export function MessageList() {
  const [msgs, setMsgs] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const data = await retrieveMsgs();
      if (data && data.length > 0) {
        setMsgs(data);
      }
    }

    fetchData();
  }, []);

  function renderMsgs() {
    if (msgs && msgs.length > 0) {
      const messages = msgs.map((msg, index) => (
        <Card key={index} className="p-4 w-50 text-left">
          <Card.Title>
            {msg.subject} from: {msg.name}
          </Card.Title>
          <Card.Subtitle>{msg.email}</Card.Subtitle>
          <Card.Body>{msg.message}</Card.Body>
        </Card>
      ));
      return <div className="d-flex justify-content-center">{messages}</div>;
    }
  }

  return <div className="w-100">{renderMsgs()}</div>;
}

export default MessageList;
