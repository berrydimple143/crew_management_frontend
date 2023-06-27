import { Layout, Menu, theme, Dropdown, Space } from 'antd';
import React, { useState, useEffect } from "react";
import Cookies from 'js-cookie';
import Head from 'next/head';
import { sidebarmenu } from '../../data/sidebar-menu';
import { staffmenu } from '../../data/staff-menu';
import { guestmenu } from '../../data/guest-menu';
const { Header, Content, Footer, Sider } = Layout;
import { DownOutlined } from '@ant-design/icons';


const AdminLayout = ({ children, title, chosenMenu, }) => {
  const [username, setUsername] = useState(null);
  const [role, setRole] = useState('');
  const [sidebarMenu, setSidebarMenu] = useState(sidebarmenu);

  useEffect(() => {
      const urole = Cookies.get('role');
      setRole(urole);

      if(urole == "staff") {
          setSidebarMenu(staffmenu);
      } else if(urole == "guest") {
          setSidebarMenu(guestmenu);
      } else {
          setSidebarMenu(sidebarmenu);
      }
  }, []);

  return (
    <>
      <Head>
            <title>{ title }</title>
      </Head>
      <Layout className="w-100 h-100">
        <Sider
          style={{ backgroundColor: '#001529' }}
          breakpoint="lg"
          collapsedWidth="0"
          onBreakpoint={(broken) => {
            console.log(broken);
          }}
          onCollapse={(collapsed, type) => {
            console.log(collapsed, type);
          }}
        >
          <div className="pl-10 py-3">
            <h1 className="mr-5 text-white h6">Welcome, { role }</h1>
          </div>
          <Menu
            theme="dark"
            mode="inline"
            defaultSelectedKeys={[chosenMenu]}
            items={sidebarMenu}
          />
        </Sider>
        <Layout>
          <Content
            style={{
              margin: '10px 10px 0',
            }}
          >
            <div
              style={{
                padding: 10,
                minHeight: 510,
              }}
            >
              { children }
            </div>
          </Content>
          <Footer
            style={{
              textAlign: 'center',
              padding: '5px'
            }}
          >
            &copy; 2023. Crew Management System. All rights reserved.
          </Footer>
        </Layout>
      </Layout>
    </>
  );
};
export default AdminLayout;
