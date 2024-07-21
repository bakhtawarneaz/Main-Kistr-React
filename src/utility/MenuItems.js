import React from 'react';

/******** Dashboard Icons******/
import DashboardIcon from '../icons/DashboardIcon';
import InboxIcon from '../icons/InboxIcon';
import EmployeeIcon from '../icons/EmployeeIcon';
import CalenderIcon from '../icons/CalenderIcon';
import ReportingIcon from '../icons/ReportingIcon';
import AutomationIcon from '../icons/AutomationIcon';
import ImportIcon from '../icons/ImportIcon';
import MarketIcon from '../icons/MarketIcon'


export function getItem(label, key, icon, children) {
  return {
    key,
    icon,
    children,
    label,
  };
}

export const items = [
  getItem('Dashboard', 'dashboard/home', <DashboardIcon />),
  getItem('Inbox', 'dashboard/inbox', <InboxIcon />),
  getItem('Employees', 'employees', <EmployeeIcon />, [
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
  getItem('Recruiting', 'recruiting', <EmployeeIcon />, [
    getItem('Overview', 'dashboard/recruiting-overview'), 
    getItem('Vacancies', 'dashboard/vacancies'),
    getItem('Applications', 'dashboard/applications'),
    getItem('Communication', 'dashboard/recruiting-communication'),
  ]),
  getItem('Calendar', 'dashboard/calendar', <CalenderIcon />),
  getItem('Reporting', 'dashboard/reporting', <ReportingIcon />),
  getItem('Automations', 'dashboard/automations', <AutomationIcon />),
  getItem('Imports', 'dashboard/imports', <ImportIcon />),
  getItem('Marketplace', 'dashboard/marketplace', <MarketIcon />),
];
