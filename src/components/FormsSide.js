import React, { useState } from "react";
import { Button, Col, Form, Row } from "react-bootstrap";
import { qustion } from "../data";

const FormsSide = ({ onAdd, notify }) => {
  const [qu, setQu] = useState("");
  const [an, setAn] = useState("");

  const addNewItem = () => {
    qustion.push({ id: Math.random(), q: qu, a: an });
    if (qu === "" || an === "") {
      notify("من فضلك اكمل البيانات", "Error");
      return;
    }
    setAn("");
    setQu("");
    onAdd();
  };

  return (
    <Row className="my-3">
      <Col sm="5">
        <Form.Control className="my-3" value={qu} onChange={(e) => setQu(e.target.value)} type="email" placeholder="ادخل السؤال" />
      </Col>

      <Col sm="5">
        <Form.Control className="my-3" value={an} onChange={(e) => setAn(e.target.value)} type="email" placeholder="ادخل الجواب" />
      </Col>

      <Col sm="2">
        <Button className="my-3" onClick={addNewItem} variant="primary" type="submit">
          اضافة
        </Button>
      </Col>
    </Row>
  );
};

export default FormsSide;
