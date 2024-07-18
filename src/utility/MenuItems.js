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
  getItem('Home', 'dashboard', <PieChartOutlined />),
  getItem('Inbox', 'dashboard/inbox', <DesktopOutlined />),
  getItem('Employees', 'dashboard/employees', <UserOutlined />, [
    getItem('Overview', 'dashboard/employees/overview'),
    getItem('Communication', 'dashboard/employees/communication'),
    getItem('Absences', 'dashboard/employees/absences'),
    getItem('Compensation', 'dashboard/employees/compensation'),
    getItem('Payroll', 'dashboard/employees/payroll'),
    getItem('Performance', 'dashboard/employees/performance'),
    getItem('Training', 'dashboard/employees/training'),
    getItem('Surveys', 'dashboard/employees/surveys'),
    getItem('Whistleblowing', 'dashboard/employees/whistleblowing'),
  ]),
  getItem('Recruiting', 'dashboard/recruiting', <TeamOutlined />, [
    getItem('Overview', 'dashboard/recruiting/overview'), 
    getItem('Vacancies', 'dashboard/recruiting/vacancies'),
    getItem('Applications', 'dashboard/recruiting/applications'),
    getItem('Communication', 'dashboard/recruiting/communication'),
  ]),
  getItem('Calendar', 'dashboard/calendar', <FileOutlined />),
  getItem('Reporting', 'dashboard/reporting', <FileOutlined />),
  getItem('Automations', 'dashboard/automations', <FileOutlined />),
  getItem('Imports', 'dashboard/imports', <FileOutlined />),
  getItem('Marketplace', 'dashboard/marketplace', <FileOutlined />),
];
