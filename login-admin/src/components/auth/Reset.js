import React, { useState } from "react";
// import { useHistory } from "react-router";
import "../../assets/css/Reset.css";
import Header from '../directory/Header';
import { Form, Input, Button} from 'antd';

function Reset() {
  const [email, setEmail] = useState("");
//   const history = useHistory();
//   useEffect(() => {
   
//   }, []);

  function sendPasswordResetEmail(email){
      alert("Reset Password");
  }

  return (
    <>
    <Header/>
    <Form className="reset__container">
      <Form.Item>
        <Input
          type="text"
          className="reset__textBox"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Địa chỉ email"
        />
        <Button
          // className="reset__btn"
          onClick={() => sendPasswordResetEmail(email)}
        >
          Gửi email đặt lại mật khẩu
        </Button>
      </Form.Item>
    </Form>
    </>
  );
}
export default Reset;