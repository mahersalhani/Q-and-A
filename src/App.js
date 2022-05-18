import { Button, Col, Container, Row } from "react-bootstrap";
import FormsSide from "./components/FormsSide";
import Acord from "./components/Acord";
import { qustion } from "./data";
import { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function App() {
  const [data, setData] = useState(qustion);

  //to add new item
  const addItem = () => {
    localStorage.setItem("item", JSON.stringify([...qustion]));
    setData([...qustion]);
    notify("تم الاضافة بنجاح", "Success");
  };

  //to remove all item
  const deleteAllItems = () => {
    localStorage.removeItem("item");
    qustion.splice(0, qustion.length);
    setData([]);
    notify("تم حذف الكل بنجاح", "Success");
  };

  const deleteOneItem = (qustion) => {
    localStorage.setItem("item", JSON.stringify([...qustion]));
    setData([...qustion]);
    notify("تم حذف السؤال بنجاح", "Success");
    if (qustion.length === 0) {
      localStorage.removeItem("item");
    }
  };

  const notify = (msg, type) => {
    if (type === "Error") {
      toast.error(msg);
    } else if (type === "Success") {
      toast.success(msg);
    }
  };

  return (
    <div className="color-body text-center">
      <Container className="p-5">
        <Row className="justify-content-center ">
          <Col sm="4" className="my-3">
            <div className="fs-3 py-2 text-cenetr">اسئلة و اجوبة شائعة</div>
          </Col>
          <Col sm="8">
            <FormsSide onAdd={addItem} notify={notify}></FormsSide>
            <Acord data={data} deleteOneItem={deleteOneItem}></Acord>
            {localStorage.getItem("item") !== null ? <Button onClick={deleteAllItems}>مسح الكل</Button> : null}
          </Col>
        </Row>
        <ToastContainer />
      </Container>
    </div>
  );
}

export default App;
