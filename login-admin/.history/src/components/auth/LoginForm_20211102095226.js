import React from 'react';
import Header from "../directory/Header";
import { Form, Input, Button, Checkbox, Modal, Space } from 'antd';
import { UserOutlined, LockOutlined } from '@ant-design/icons';
import { Link } from 'react-router-dom';
import LoginService from '../../service/LoginService';

const LoginForm = (props) => {

  function success(value, msg) {

    if (value) {

      Modal.success({
        content: msg,
      });
    }

  }

  function onChangeCheck(e) {

    if (e.target.checked === false) {
      console.log(`checked = ${e.target.checked}`);
    } else {

    }
  };



 const onFinish = async (values) => {
         const jwt_token = await LoginService.getJWTToken();
        const token =  LoginService.signIn(values.username, values.password, jwt_token)
          .then((res) => {
            localStorage.setItem('access_token', JSON.stringify(res.data.accessToken));
            localStorage.setItem('refesh_token', JSON.stringify(res.data.refreshToken));
            props.history.push('/dashboard');

          })
          .catch((err) => {
            console.log(err.message);
            success(true, err.message);
          });
      }

  return (
    <>
      <Header />
      <Form
        name="normal_login"
        className="login-form"
        initialValues={{
          remember: true,
        }}
        onFinish={onFinish}
      >
        <h2>Đăng nhập</h2>
        <p>Nhập tài khoản và mật khẩu để đăng nhập hệ thống</p>
        <div className="acc-title"> <span className="required">*</span> <span>Tài khoản</span></div>
        <Form.Item
          name="username"
          rules={[
            {
              // type:"email",
              required: true,
              message: 'Vui lòng nhập email hoặc số điện thoại của bạn!',
            },
          ]}
        >
          <Input prefix={<UserOutlined className="site-form-item-icon" />}
            placeholder="Nhập Email hoặc số điện thoại" />
        </Form.Item>
        <div className="acc-title"> <span className="required">*</span> Mật khẩu</div>
        <Form.Item
          name="password"
          rules={[
            {
              required: true,
              message: 'Vui lòng nhập mật khẩu của bạn!',
            },
          ]}
        >
          <Input.Password
            prefix={<LockOutlined className="site-form-item-icon" />}
            type="password"
            placeholder="Nhập mật khẩu"
          />
        </Form.Item>
        <Form.Item>

          <Link to="/reset" className="login-form-forgot">
            Quên mật khẩu?
          </Link>

        </Form.Item>

        <Form.Item>
          <div className="action-form">
            <Form.Item name="remember" valuePropName="checked" noStyle>
              <Checkbox onChange={onChangeCheck}>Duy trì đăng nhập</Checkbox>
            </Form.Item>
            <div className="btn-wrapper">
              <Space wrap>
                <Button htmlType="submit" onClick={success(false, "")} className="login-form-button">
                  Đăng nhập
                </Button>
              </Space>

            </div>
          </div>
        </Form.Item>
      </Form>
    </>
  );
};

export default LoginForm;