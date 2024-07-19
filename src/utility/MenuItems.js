import React from 'react';
import {
  DesktopOutlined,
  FileOutlined,
  PieChartOutlined,
  TeamOutlined,
  UserOutlined,
} from '@ant-design/icons';

export function getItem(label, key, icon, children) {
  return {
    key,
    icon,
    children,
    label,
  };
}

export const items = [
  getItem('Dashboard', 'dashboard/home', <PieChartOutlined />),
  getItem('Inbox', 'dashboard/inbox', <DesktopOutlined />),
  getItem('Employees', 'employees', <UserOutlined />, [
    getItem('Overview', 'dashboard/overview'),
    getItem('Communication', 'dashboard/communication'),
    getItem('Absences', 'dashboard/absences'),
    getItem('Compensation', 'dashboard/compensation'),
    getItem('Payroll', 'dashboard/payroll'),
    getItem('Performance', 'dashboard/performance'),
    getItem('Training', 'dashboard/training'),
    getItem('Surveys', 'dashboard/surveys'),
    getItem('Whistleblowing', 'dashboard/whistleblowing'),
  ]),
  getItem('Recruiting', 'recruiting', <TeamOutlined />, [
    getItem('Overview', 'dashboard/overview'), 
    getItem('Vacancies', 'dashboard/vacancies'),
    getItem('Applications', 'dashboard/applications'),
    getItem('Communication', 'dashboard/communication'),
  ]),
  getItem('Calendar', 'dashboard/calendar', <FileOutlined />),
  getItem('Reporting', 'dashboard/reporting', <FileOutlined />),
  getItem('Automations', 'dashboard/automations', <FileOutlined />),
  getItem('Imports', 'dashboard/imports', <FileOutlined />),
  getItem('Marketplace', 'dashboard/marketplace', <FileOutlined />),
];
