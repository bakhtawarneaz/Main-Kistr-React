import React, { useState } from 'react'
import { Layout, Menu } from 'antd';
import { Link, Outlet } from 'react-router-dom';
import { items } from '../utility/MenuItems';
import sidebarCloseBtn from'../img/angle-double.png';
import mainLogo from'../img/kistr-logo.svg';
import Search from'../img/search.png';
import Setting from'../img/settings.png';
import Bell from'../img/bell.png';
import Profile from'../img/profile.png';

import './dashboard.css'

const { Sider } = Layout;
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
   <>
    <div className='site-wraper'> 
      <Sider 
        trigger={null} 
        collapsible 
        collapsed={collapsed} 
        onCollapse={(value) => setCollapsed(value)} 
        className='aside-main' 
        width={300}
        breakpoint="md"
      >
        <div className="demo-logo-vertical">
          <img src={mainLogo} alt="KISTR Logo" />
        </div>
        <Menu theme="dark" defaultSelectedKeys={['dashboard/home']} mode="inline">
            {renderMenuItems(items)}
        </Menu>
        <div className='sidebar-close-btn'>
            <button onClick={() => setCollapsed(!collapsed)}>
              <img src={sidebarCloseBtn} alt="" />
            </button>
        </div>
      </Sider>
      <main className="site-main">
          <header className="main-header">
              <div className="search-widget-top">
                  <div className="input-wrap input-placeholder-light">
                      <button className="input-icon">
                          <span className="icon-img">
                          <img src={Search} alt="" /></span>
                        </button>
                      <input type="search" className="input-elm" name="" id="" placeholder="Search" />
                  </div>
              </div>
              <div className="header-right-elms">
                  <div className="search-elm right-elm-icon">
                      <button><span className="icon-img">
                        <img src={Search} alt="" /></span>
                      </button>
                  </div>
                  <div className="setting-elm right-elm-icon">
                      <button><span className="icon-img">
                        <img src={Setting} alt="" /></span>
                      </button>
                  </div>
                  <div className="bell-elm right-elm-icon">
                      <button><span className="icon-img">
                        <img src={Bell} alt="" /></span>
                      </button>
                  </div>
                  <div className="user-elm right-elm-icon">
                      <button><img src={Profile} alt="" /></button>
                  </div>
              </div>
          </header>
          <div className='main-body'>
              <Outlet />
          </div>
      </main>
    </div>
    </>
  )
}

export default DashboardLayout