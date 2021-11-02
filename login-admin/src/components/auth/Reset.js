import React, { useState } from "react";
// import { useHistory } from "react-router";
import "../../assets/css/Reset.css";
import Header from '../directory/Header';
import { Form, Input, Button} from 'antd';
import { MailOutlined } from '@ant-design/icons';
import '../../App.css';

function Reset(props) {
  const [email, setEmail] = useState("");

//   const history = useHistory();
//   useEffect(() => {
   
//   }, []);

  function sendPasswordResetEmail(email){
      alert("Reset Password");
      props.history.push('/login');
  }

  return (
    <>
    <Header/>
    <Form className="reset__container">
        <h2>Tìm tài khoản của bạn</h2>
        <p>Vui lòng nhập email hoặc số di động để tìm kiếm tài khoản của bạn.</p>
      <Form.Item>
        <Input
          type="text"
          className="reset__textBox"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Địa chỉ email"
          prefix={<MailOutlined className="site-form-item-icon" />}
        />
        <Button
          className="reset__ResetEmail"
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