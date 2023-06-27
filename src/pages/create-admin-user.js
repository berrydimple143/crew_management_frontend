import React, { useState, useEffect } from "react";
import { useRouter } from 'next/router';
import Cookies from 'js-cookie';
import { message, Form, Input, Space } from 'antd';
import { EditOutlined } from '@ant-design/icons';
import { register } from '../services/auth';

export default function AdminUserRegister()
{
    const [loading, setLoading] = useState(false);
    const [inputStatus, setInputStatus] = useState("warning");
    const router = useRouter();

    const onFinish = async (values) =>
    {
        try
        {
            const { admin_status } = await register(values);
            if(admin_status == "success") {
                message.success("Admin registration successful.");
                router.push("/login");
            } else {
                message.success("Registration failed.");
            }
        } catch (error)
        {
            message.error("Something went wrong.");
        }
    }

    return (
      <div className="div-center shadow">
          <div className="content w-20">
              <Form layout="vertical" onFinish={onFinish}>
                    <Form.Item label={<label style={{ color: "black" }}>Name</label>} name="name" rules={[{ required: true, message: 'Name is required.' }]}>
                      <input type="text" className="form-control" id="name" placeholder="Type your name here..." />
                    </Form.Item>
                    <Form.Item label={<label style={{ color: "black" }}>Email</label>} name="email" rules={[{ required: true, message: 'Email is required.' }, { type: 'email', message: 'Invalid email address.' }]}>
                      <input type="email" className="form-control" id="name" placeholder="Type your email here..." />
                    </Form.Item>
                    <Form.Item label={<label style={{ color: "black" }}>Username</label>} name="username" rules={[{ required: true, message: 'Username is required.' }, { max: 10, message: 'Username must be at most 10 characters long' }, {
                        pattern: new RegExp(/^[a-zA-Z@~`!@#$%^&*()_=+\\\\';:\"\\/?>.<,-]+$/i),
                        message: "This field does not accept numbers. You provide a string only."
                       }]}>
                      <input type="text" className="form-control" id="username" placeholder="Type username here..." />
                    </Form.Item>

                    <Form.Item label={<label style={{ color: "black" }}>Password</label>} name="password" rules={[{ required: true, message: 'Password is required.' }, { max: 20, message: 'Password should be up to 20 characters long only.' }, {
                            pattern: new RegExp(/^[a-zA-Z0-9]+$/i),
                            message: "This field must not contain any special characters."
                           }]}>
                        <input type="password" className="form-control" id="password" placeholder="Type password here..." />
                    </Form.Item>

                    <Form.Item>
                      <button type="submit" className="btn btn-primary">Create</button>
                    </Form.Item>
              </Form>
          </div>
      </div>
    );
}
