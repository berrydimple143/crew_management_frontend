import React, { useState, useEffect } from "react";
import { useRouter } from 'next/router';
import Cookies from 'js-cookie';
import { message, Form, Input, Space } from 'antd';
import { UnlockOutlined } from '@ant-design/icons';
import { login } from '../services/auth';

export default function Login()
{
    const [loading, setLoading] = useState(false);
    const [inputStatus, setInputStatus] = useState("warning");
    const router = useRouter();

    const onFinish = async (values) =>
    {
        try
        {
            const { login_status, token, user, role } = await login(values);

            if(login_status == "success") {
                Cookies.set('loggedIn', true);
                Cookies.set('token', token);
                Cookies.set('role', role);
                Cookies.set('user_id', user.id);
                Cookies.set('username', user.username);
                message.success("Login successful.");
                router.push("/admin");
            } else {
                setInputStatus("error");
                message.error("Invalid username/password.");
            }
        } catch (error)
        {
            message.error("Something went wrong.");
        }
    }
    useEffect(() => {
        if(Cookies.get('loggedIn')) {
            router.push("/admin");
        }
    }, []);
    return (
       <div className="div-center shadow">
          <div className="content w-20">
              <Form layout="vertical" onFinish={onFinish}>
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
                  <button type="submit" className="btn btn-primary">Login</button>
                </Form.Item>
              </Form>

          </div>
        </div>
    );
}
