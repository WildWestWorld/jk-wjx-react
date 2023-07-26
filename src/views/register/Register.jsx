import React, { memo } from 'react';
import { Button, Form, Input, Space, Typography } from 'antd';
import { UserAddOutlined } from '@ant-design/icons';
import { RegisterWrarpper } from './RegisterStyle';
import { Link } from 'react-router-dom';
import Title from 'antd/lib/typography/Title';

const Register = memo(() => {
  return (
    <RegisterWrarpper>
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
          <Form labelCol={{ span: 6 }} wrapperCol={{ span: 16 }}>
            <Form.Item label="用户名" name="username">
              <Input></Input>
            </Form.Item>
            <Form.Item label="密码" name="password">
              <Input.Password></Input.Password>
            </Form.Item>

            <Form.Item label="确认密码" name="confirm">
              <Input.Password></Input.Password>
            </Form.Item>
            <Form.Item label="昵称" name="nickname">
              <Input></Input>
            </Form.Item>
            <Form.Item wrapperCol={{ offset: 6, span: 16 }}>
              <Space>
                <Button type="primary" htmlType="submit">
                  注册
                </Button>
                <Link to="/login">已有账户，请登录</Link>
              </Space>
            </Form.Item>
          </Form>
        </div>
      </div>
    </RegisterWrarpper>
  );
});

export default Register;
