import React from "react";
import { Accordion, Button, Row } from "react-bootstrap";
import { qustion } from "../data.js";

const Acord = ({ data, deleteOneItem }) => {
  const localData = JSON.parse(localStorage.getItem("item"));

  const onDeleteItem = (ID) => {
    if (localStorage.getItem("item") !== null) {
      const index = qustion.findIndex((el) => el.id === ID);
      qustion.splice(index, 1);
      deleteOneItem(qustion);
    }
  };

  return (
    <Row>
      <Accordion defaultActiveKey="0" className="my-5">
        {localStorage.getItem("item") !== null ? (
          localData.map((el, i) => {
            return (
              <Accordion.Item key={i} eventKey={el.id}>
                <Accordion.Header>{el.q}</Accordion.Header>
                <Accordion.Body className="d-flex justify-content-between">
                  <div className="px-3 m-2">{el.a}</div>
                  <Button onClick={() => onDeleteItem(el.id)}>حذف السؤال</Button>
                </Accordion.Body>
              </Accordion.Item>
            );
          })
        ) : (
          <h2 className="fs-4">لا يوجد اسئلة</h2>
        )}
      </Accordion>
    </Row>
  );
};

export default Acord;
