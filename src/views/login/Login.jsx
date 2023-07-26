import React, { memo, useEffect } from 'react';
import { Button, Checkbox, Form, Input, Space, Typography } from 'antd';
import { UserAddOutlined } from '@ant-design/icons';
import { Link, useNavigate } from 'react-router-dom';
import Title from 'antd/lib/typography/Title';
import { LoginWrarpper } from './style';

function rememberUser(username, password) {
  localStorage.setItem('username', username);
  localStorage.setItem('password', password);
}

function deleteUserFromStorage() {
  localStorage.removeItem('username');
  localStorage.removeItem('password');
}
function getUserInfoFromStorage() {
  return {
    username: localStorage.getItem('username'),
    password: localStorage.getItem('password'),
  };
}

const Login = memo(() => {
  const nav = useNavigate();

  const [form] = Form.useForm(); //第三方Hook

  useEffect(() => {
    const { username, password } = getUserInfoFromStorage();
    form.setFieldsValue({ username, password });
  }, []);

  const onFinish = (values) => {
    console.log(values);

    if (values.remember) {
      console.log('记住');
      rememberUser(values.username, values.password);
    } else {
      deleteUserFromStorage();
    }
  };

  return (
    <LoginWrarpper>
      <div className="container">
        <div>
          <Space>
            <Title level={2}>
              <UserAddOutlined></UserAddOutlined>
            </Title>
            <Title level={2}>注册新用户</Title>
          </Space>
        </div>
        <div>
          <Form
            labelCol={{ span: 6 }}
            wrapperCol={{ span: 16 }}
            initialValues={{ remember: true }}
            onFinish={onFinish}
            form={form}
          >
            <Form.Item label="用户名" name="username">
              <Input></Input>
            </Form.Item>
            <Form.Item label="密码" name="password">
              <Input.Password></Input.Password>
            </Form.Item>
            <Form.Item
              name="remember"
              wrapperCol={{ offset: 6, span: 16 }}
              valuePropName="checked"
            >
              <Checkbox>记住我</Checkbox>
            </Form.Item>

            <Form.Item wrapperCol={{ offset: 6, span: 16 }}>
              <Space>
                <Button type="primary" htmlType="submit">
                  登录
                </Button>
                <Link to="/register">注册新用户</Link>
              </Space>
            </Form.Item>
          </Form>
        </div>
      </div>
    </LoginWrarpper>
  );
});

export default Login;
