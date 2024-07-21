import React from 'react';
import './home.css';
import { Tabs } from 'antd';
import { Calendar } from 'antd';
import Profile from'../../../img/profile.png';
import WeeklyIcon from'../../../img/weekly-meet-icon.svg';
import BirthdayIcon from'../../../img/birthday-icon.svg';
import UpcComingInt1 from'../../../img/up-coming-int-1.svg';
import Chart from'../../../img/chart-img.png';



const { TabPane } = Tabs;

const onPanelChange = (value, mode) => {
  console.log(value.format('YYYY-MM-DD'), mode);
};

const Home = () => {
  return (
    <>
      <div className="page-title-widget">
          <h1>Hello Wolfgang</h1>
          <p>Here you can see an overview of your most important tasks, as well relevant data on employees and
              recruiting processes.</p>
      </div>
      <hr />
      <div className="home-4boxes">
          <div className='home-inbox-listing-widget'>
            <div className="home-boxe-header">
                <h3>Inbox</h3>
                <button className="btn-gray">
                  <span className="icon-home">
                  <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 18 18" fill="none">
                    <path fillRule="evenodd" clipRule="evenodd" d="M15.7526 7.5C16.1669 7.5 16.5026 7.16421 16.5026 6.75V2.25C16.5026 1.83579 16.1669 1.5 15.7526 1.5H11.2499C10.8357 1.5 10.4999 1.83578 10.4999 2.25C10.4999 2.66421 10.8357 3 11.2499 3H13.9421L7.48712 9.45495C7.19423 9.74783 7.19423 10.2227 7.48712 10.5156C7.78005 10.8086 8.25488 10.8086 8.54775 10.5156L15.0026 4.06078V6.75C15.0026 7.16421 15.3384 7.5 15.7526 7.5ZM3.75 3.75C2.50736 3.75 1.5 4.75736 1.5 6V14.25C1.5 15.4927 2.50736 16.5 3.75 16.5H12C13.2427 16.5 14.25 15.4927 14.25 14.25V9.75C14.25 9.33578 13.9142 9 13.5 9C13.0858 9 12.75 9.33578 12.75 9.75V14.25C12.75 14.6642 12.4142 15 12 15H3.75C3.33579 15 3 14.6642 3 14.25V6C3 5.58579 3.33579 5.25 3.75 5.25H8.25C8.66423 5.25 9 4.91421 9 4.5C9 4.08579 8.66423 3.75 8.25 3.75H3.75Z" fill="#293854"/>
                  </svg>
                  </span> 
                  Tasks
                  </button>
            </div>
            <Tabs defaultActiveKey="1" >
              <TabPane tab="All Tasks" key="1">
                  <ul className="inbox-list-widget">
                      <li>
                          <div className="userimg">
                              <img src={Profile} alt="" />
                          </div>
                          <div className="user-info">
                              <p><strong>Leonardo da Vinci's</strong> contract check</p>
                              <p>ending on <strong>20.05.2024</strong></p>
                          </div>
                          {/* <div className="action-btn">
                              <button className=""><span class="icon-home"></span></button>
                              <button className=""><span class="icon-home"></span></button>
                          </div> */}
                      </li>
                      <li>
                          <div className="userimg">
                              <img src={Profile} alt="" />
                          </div>
                          <div className="user-info">
                              <p><strong>Leonardo da Vinci's</strong> contract check</p>
                              <p>ending on <strong>20.05.2024</strong></p>
                          </div>
                          {/* <div className="action-btn">
                              <button className=""><span class="icon-home"></span></button>
                              <button className=""><span class="icon-home"></span></button>
                          </div> */}
                      </li>
                      <li>
                          <div className="userimg">
                              <img src={Profile} alt="" />
                          </div>
                          <div className="user-info">
                              <p><strong>Leonardo da Vinci's</strong> contract check</p>
                              <p>ending on <strong>20.05.2024</strong></p>
                          </div>
                          {/* <div className="action-btn">
                              <button className=""><span class="icon-home"></span></button>
                              <button className=""><span class="icon-home"></span></button>
                          </div> */}
                      </li>
                      <li>
                          <div className="userimg">
                              <img src={Profile} alt="" />
                          </div>
                          <div className="user-info">
                              <p><strong>Leonardo da Vinci's</strong> contract check</p>
                              <p>ending on <strong>20.05.2024</strong></p>
                          </div>
                          {/* <div className="action-btn">
                              <button className=""><span class="icon-home"></span></button>
                              <button className=""><span class="icon-home"></span></button>
                          </div> */}
                      </li>
                      <li>
                          <div className="userimg">
                              <img src={Profile} alt="" />
                          </div>
                          <div className="user-info">
                              <p><strong>Leonardo da Vinci's</strong> contract check</p>
                              <p>ending on <strong>20.05.2024</strong></p>
                          </div>
                          {/* <div className="action-btn">
                              <button className=""><span class="icon-home"></span></button>
                              <button className=""><span class="icon-home"></span></button>
                          </div> */}
                      </li>
                  </ul>
              </TabPane>
              <TabPane tab="Employees" key="2">
                  <ul className="inbox-list-widget">
                      <li>
                          <div className="userimg">
                              <img src={Profile} alt="" />
                          </div>
                          <div className="user-info">
                              <p><strong>Leonardo da Vinci's</strong> contract check</p>
                              <p>ending on <strong>20.05.2024</strong></p>
                          </div>
                          {/* <div className="action-btn">
                              <button className=""><span class="icon-home"></span></button>
                              <button className=""><span class="icon-home"></span></button>
                          </div> */}
                      </li>
                      <li>
                          <div className="userimg">
                              <img src={Profile} alt="" />
                          </div>
                          <div className="user-info">
                              <p><strong>Leonardo da Vinci's</strong> contract check</p>
                              <p>ending on <strong>20.05.2024</strong></p>
                          </div>
                          {/* <div className="action-btn">
                              <button className=""><span class="icon-home"></span></button>
                              <button className=""><span class="icon-home"></span></button>
                          </div> */}
                      </li>
                      <li>
                          <div className="userimg">
                              <img src={Profile} alt="" />
                          </div>
                          <div className="user-info">
                              <p><strong>Leonardo da Vinci's</strong> contract check</p>
                              <p>ending on <strong>20.05.2024</strong></p>
                          </div>
                          {/* <div className="action-btn">
                              <button className=""><span class="icon-home"></span></button>
                              <button className=""><span class="icon-home"></span></button>
                          </div> */}
                      </li>
                  </ul>
              </TabPane>
              <TabPane tab="Recruiting" key="3">
                  <ul className="inbox-list-widget">
                      <li>
                          <div className="userimg">
                              <img src={Profile} alt="" />
                          </div>
                          <div className="user-info">
                              <p><strong>Leonardo da Vinci's</strong> contract check</p>
                              <p>ending on <strong>20.05.2024</strong></p>
                          </div>
                          {/* <div className="action-btn">
                              <button className=""><span class="icon-home"></span></button>
                              <button className=""><span class="icon-home"></span></button>
                          </div> */}
                      </li>
                      <li>
                          <div className="userimg">
                              <img src={Profile} alt="" />
                          </div>
                          <div className="user-info">
                              <p><strong>Leonardo da Vinci's</strong> contract check</p>
                              <p>ending on <strong>20.05.2024</strong></p>
                          </div>
                          {/* <div className="action-btn">
                              <button className=""><span class="icon-home"></span></button>
                              <button className=""><span class="icon-home"></span></button>
                          </div> */}
                      </li>
                  </ul>
              </TabPane>
            </Tabs>
          </div>
          <div className='home-calender-widget'>
            <div className="home-boxe-header">
                <h3>Calendar</h3>
                <button className="btn-gray">
                  <span className="icon-home">
                  <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 18 18" fill="none">
                    <path fillRule="evenodd" clipRule="evenodd" d="M15.7526 7.5C16.1669 7.5 16.5026 7.16421 16.5026 6.75V2.25C16.5026 1.83579 16.1669 1.5 15.7526 1.5H11.2499C10.8357 1.5 10.4999 1.83578 10.4999 2.25C10.4999 2.66421 10.8357 3 11.2499 3H13.9421L7.48712 9.45495C7.19423 9.74783 7.19423 10.2227 7.48712 10.5156C7.78005 10.8086 8.25488 10.8086 8.54775 10.5156L15.0026 4.06078V6.75C15.0026 7.16421 15.3384 7.5 15.7526 7.5ZM3.75 3.75C2.50736 3.75 1.5 4.75736 1.5 6V14.25C1.5 15.4927 2.50736 16.5 3.75 16.5H12C13.2427 16.5 14.25 15.4927 14.25 14.25V9.75C14.25 9.33578 13.9142 9 13.5 9C13.0858 9 12.75 9.33578 12.75 9.75V14.25C12.75 14.6642 12.4142 15 12 15H3.75C3.33579 15 3 14.6642 3 14.25V6C3 5.58579 3.33579 5.25 3.75 5.25H8.25C8.66423 5.25 9 4.91421 9 4.5C9 4.08579 8.66423 3.75 8.25 3.75H3.75Z" fill="#293854"/>
                  </svg>
                  </span> 
                  Tasks
                  </button>
            </div>
            <div className='dPicker-widget'>
                <div className='dPicker-calender'>
                  <Calendar fullscreen={false} onPanelChange={onPanelChange} />
                </div>    
                <div className="dPicker-info">
                    <h4>Friday, 13th of May 2024</h4>
                    <ul className="recruit-list-widget">
                        <li>
                            <div className="recruit-icon">
                                <img src={WeeklyIcon} alt="" />
                            </div>
                            <div className="recruit-info">
                                <p><strong>Weekly Recruiting Meeting</strong></p>
                                <p>Today at <strong>15:00</strong></p>
                            </div>
                        </li>
                        <li>
                            <div className="recruit-icon">
                                <img src={BirthdayIcon} alt="" />
                            </div>
                            <div className="recruit-info">
                                <p><strong>Birthday</strong></p>
                                <p>Tomorrow, <strong>07.06.2024</strong></p>
                            </div>
                        </li>
                    </ul>
                </div>      
            </div>
          </div>
          <div className="home-recruiting-widget">
                <div className="home-boxe-header">
                    <h3>Recruiting</h3>
                    <button className="btn-gray">
                      <span className="icon-home">
                      <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 18 18" fill="none">
                        <path fillRule="evenodd" clipRule="evenodd" d="M15.7526 7.5C16.1669 7.5 16.5026 7.16421 16.5026 6.75V2.25C16.5026 1.83579 16.1669 1.5 15.7526 1.5H11.2499C10.8357 1.5 10.4999 1.83578 10.4999 2.25C10.4999 2.66421 10.8357 3 11.2499 3H13.9421L7.48712 9.45495C7.19423 9.74783 7.19423 10.2227 7.48712 10.5156C7.78005 10.8086 8.25488 10.8086 8.54775 10.5156L15.0026 4.06078V6.75C15.0026 7.16421 15.3384 7.5 15.7526 7.5ZM3.75 3.75C2.50736 3.75 1.5 4.75736 1.5 6V14.25C1.5 15.4927 2.50736 16.5 3.75 16.5H12C13.2427 16.5 14.25 15.4927 14.25 14.25V9.75C14.25 9.33578 13.9142 9 13.5 9C13.0858 9 12.75 9.33578 12.75 9.75V14.25C12.75 14.6642 12.4142 15 12 15H3.75C3.33579 15 3 14.6642 3 14.25V6C3 5.58579 3.33579 5.25 3.75 5.25H8.25C8.66423 5.25 9 4.91421 9 4.5C9 4.08579 8.66423 3.75 8.25 3.75H3.75Z" fill="#293854"/>
                      </svg>
                      </span> 
                      Recruiting
                    </button>
                </div>
                <ul className="recruit-list-widget">
                    <li>
                        <div className="recruit-icon">
                            <img src={UpcComingInt1} alt="" />
                        </div>
                        <div className="recruit-info">
                            <p><strong>Upcoming Interview</strong></p>
                            <p>in 2 days</p>
                        </div>
                    </li>
                    <li>
                        <div className="recruit-icon">
                            <img src={UpcComingInt1} alt="" />
                        </div>
                        <div className="recruit-info">
                            <p><strong>2 applications waiting for department review</strong></p>
                            <p>for Job Posting “Senior Designer”</p>
                        </div>
                    </li>
                    <li>
                        <div className="recruit-icon">
                            <img src={UpcComingInt1} alt="" />
                        </div>
                        <div className="recruit-info">
                            <p><strong>2 applications waiting for department review</strong></p>
                            <p>for Job Posting “Senior Designer”</p>
                        </div>
                    </li>
                </ul>
          </div>
          <div className="home-orgchart-widget">
              <div className="home-boxe-header">
                  <div>
                      <h3>Employee development</h3>
                      <p><small>01.01.2024 - 31.05.2024</small></p>
                  </div>
                  <button className="btn-gray">
                  <span className="icon-home">
                  <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 18 18" fill="none">
                    <path fillRule="evenodd" clipRule="evenodd" d="M15.7526 7.5C16.1669 7.5 16.5026 7.16421 16.5026 6.75V2.25C16.5026 1.83579 16.1669 1.5 15.7526 1.5H11.2499C10.8357 1.5 10.4999 1.83578 10.4999 2.25C10.4999 2.66421 10.8357 3 11.2499 3H13.9421L7.48712 9.45495C7.19423 9.74783 7.19423 10.2227 7.48712 10.5156C7.78005 10.8086 8.25488 10.8086 8.54775 10.5156L15.0026 4.06078V6.75C15.0026 7.16421 15.3384 7.5 15.7526 7.5ZM3.75 3.75C2.50736 3.75 1.5 4.75736 1.5 6V14.25C1.5 15.4927 2.50736 16.5 3.75 16.5H12C13.2427 16.5 14.25 15.4927 14.25 14.25V9.75C14.25 9.33578 13.9142 9 13.5 9C13.0858 9 12.75 9.33578 12.75 9.75V14.25C12.75 14.6642 12.4142 15 12 15H3.75C3.33579 15 3 14.6642 3 14.25V6C3 5.58579 3.33579 5.25 3.75 5.25H8.25C8.66423 5.25 9 4.91421 9 4.5C9 4.08579 8.66423 3.75 8.25 3.75H3.75Z" fill="#293854"/>
                  </svg>
                  </span> 
                    Reporting
                  </button>
              </div>
              <div>
                  <img src={Chart} alt="" />
              </div>
          </div>
      </div>
    </>
  )
}

export default Home