import React, { useState } from 'react'
import { Breadcrumb, Layout, Menu } from 'antd';
import { Link, Outlet } from 'react-router-dom';
import { items } from '../utility/MenuItems';


const { Header, Content, Footer, Sider } = Layout;
const { SubMenu } = Menu;

const renderMenuItems = (menuItems) => {
  return menuItems.map((item) => {
    if (item.children) {
      return (
        <SubMenu
            key={item.key}
            icon={item.icon}
            title={item.label}
          >
            {item.children.map((child) => (
              <Menu.Item key={child.key} icon={child.icon}>
                <Link to={`/${child.key}`}>{child.label}</Link>
              </Menu.Item>
            ))}
          </SubMenu>
      );
    }
    return (
      <Menu.Item key={item.key} icon={item.icon}>
        <Link to={`/${item.key}`}>{item.label}</Link>
      </Menu.Item>
    );
  });
};

const DashboardLayout = () => {
  const [collapsed, setCollapsed] = useState(false);
  return (
    <Layout
    style={{
      minHeight: '100vh',
    }}
  >
    <Sider collapsible collapsed={collapsed} onCollapse={(value) => setCollapsed(value)}>
      <div className="demo-logo-vertical" />
      <Menu theme="dark" defaultSelectedKeys={['dashboard/home']} mode="inline">
          {renderMenuItems(items)}
        </Menu>
    </Sider>
    <Layout>
      <Header
        style={{
          padding: 0,
        }}
      />
      <Content
        style={{
          margin: '0 16px',
        }}
      >
        <Breadcrumb
          style={{
            margin: '16px 0',
          }}
        >
          <Breadcrumb.Item>User</Breadcrumb.Item>
          <Breadcrumb.Item>Bill</Breadcrumb.Item>
        </Breadcrumb>
        <div
          style={{
            padding: 24,
            minHeight: 360,
          }}
        >
          <Outlet />
        </div>
      </Content>
      <Footer
        style={{
          textAlign: 'center',
        }}
      >
        Ant Design ©{new Date().getFullYear()} Created by Ant UED
      </Footer>
    </Layout>
  </Layout>
  )
}

export default DashboardLayout