import React, { useState } from "react";
import { Container, Form } from "react-bootstrap";
import { Text, Button } from "@chakra-ui/react";

export default function Message() {
  const [number, setNumber] = useState("");
  const [body, setBody] = useState("");

  const submitHandler = async (e) => {
    await e.preventDefault();

    const res = await fetch("/api/sendMessage", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ to: number, body: body }),
    });

    const data = await res.json();

    if (data.success) {
      await setNumber("");
      await setBody("");
    } else {
      await setNumber("An Error has occurred.");
      await setBody("An Error has occurred.");
    }
  };

  return (
    <div>
      <Container>
        <Text fontSize="4xl" marginTop={5}>
          Send SMS
        </Text>

        <Form onSubmit={submitHandler}>
          <Form.Group>
            <Form.Label htmlFor="to">To</Form.Label>
            <Form.Control
              value={number}
              onChange={(e) => setNumber(e.target.value)}
            />
          </Form.Group>

          <Form.Group>
            <Form.Label htmlFor="message">Body</Form.Label>
            <Form.Control
              as="textarea"
              rows="3"
              value={body}
              onChange={(e) => setBody(e.target.value)}
            />
          </Form.Group>

          <Button
            colorScheme="blue"
            marginTop={5}
            marginBottom={5}
            type="submit"
          >
            Send
          </Button>
        </Form>
      </Container>
    </div>
  );
}
