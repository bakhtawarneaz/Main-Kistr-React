import { createBrowserRouter, Navigate } from 'react-router-dom';
import Login from '../pages/unAuthorized/login/Login';
import DashboardLayout from '../layouts/DashboardLayout';
import AuthLayout from '../layouts/AuthLayout';

/************* Authorized *************/

import Inbox from '../pages/authorized/Inbox/Inbox';
import Calendar from '../pages/authorized/Calendar/Calendar';
import Reporting from '../pages/authorized/Reporting/Reporting';
import Automations from '../pages/authorized/Automations/Automations';
import Imports from '../pages/authorized/Imports/Imports';
import Marketplace from '../pages/authorized/Marketplace/Marketplace';
import Overview from '../pages/authorized/Employees/Overview/Overview';
import Absences from '../pages/authorized/Employees/Absences/Absences';
import Communication from '../pages/authorized/Employees/Communication/Communication';
import Compensation from '../pages/authorized/Employees/Compensation/Compensation';
import Payroll from '../pages/authorized/Employees/Payroll/Payroll';
import Performance from '../pages/authorized/Employees/Performance/Performance';
import Surveys from '../pages/authorized/Employees/Surveys/Surveys';
import Training from '../pages/authorized/Employees/Training/Training';
import Whistleblowing from '../pages/authorized/Employees/Whistleblowing/Whistleblowing';
import OverviewRecruiting from '../pages/authorized/Recruiting/Overview/OverviewRecruiting';
import Vacancies from '../pages/authorized/Recruiting/Vacancies/Vacancies';
import Applications from '../pages/authorized/Recruiting/Applications/Applications';
import CommunicationRecruiting from '../pages/authorized/Recruiting/Communication/CommunicationRecruiting';
import Home from '../pages/authorized/home/Home';

const router = createBrowserRouter([
    {
        path: '/',
        element: <Navigate to="/auth/login" />,
    },
    {
        path: '/dashboard',
        element: <DashboardLayout />,
        children: [
            { path: 'home', element: <Home /> },
            { path: 'inbox', element: <Inbox /> },
            { path: 'calendar', element: <Calendar /> },
            { path: 'reporting', element: <Reporting /> },
            { path: 'automations', element: <Automations /> },
            { path: 'imports', element: <Imports /> },
            { path: 'marketplace', element: <Marketplace /> },
            
            { path: 'overview', element: <Overview /> },
            { path: 'absences', element: <Absences /> },
            { path: 'communication', element: <Communication /> },
            { path: 'compensation', element: <Compensation /> },
            { path: 'payroll', element: <Payroll /> },
            { path: 'performance', element: <Performance /> },
            { path: 'surveys', element: <Surveys /> },
            { path: 'training', element: <Training /> },
            { path: 'whistleblowing', element: <Whistleblowing /> },

            { path: 'recruiting-overview', element: <OverviewRecruiting /> },
            { path: 'vacancies', element: <Vacancies /> },
            { path: 'applications', element: <Applications /> },
            { path: 'recruiting-communication', element: <CommunicationRecruiting /> },
        ],
    },
    {
        path: '/auth',
        element: <AuthLayout />,
        children: [
            {
                path: 'login',
                element: <Login />,
            },
        ],
    },
]);

export default router;