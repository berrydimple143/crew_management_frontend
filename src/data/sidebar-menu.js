import React from 'react';
import {
    AreaChartOutlined,
    LogoutOutlined,
    UsergroupAddOutlined,
    UserOutlined,
    BookOutlined,
    BarsOutlined
} from '@ant-design/icons';

const handleLogout = () => {
    window.location.href = "/logout";
}

const handleRank = () => {
    window.location.href = "/admin/ranks";
}

const homeRoute = () => {
    window.location.href = "/admin";
}

const crewRoute = () => {
    window.location.href = "/admin/crews";
}

const documentRoute = () => {
    window.location.href = "/admin/documents";
}

const userRoute = () => {
    window.location.href = "/admin/users";
}

export const sidebarmenu = [
        {
          key: 1,
          icon: React.createElement(AreaChartOutlined),
          label: 'Dashboard',
          onClick: homeRoute
        },
        {
          key: 2,
          icon: React.createElement(UserOutlined),
          label: 'User',
          onClick: userRoute
        },
        {
          key: 3,
          icon: React.createElement(UsergroupAddOutlined),
          label: 'Crew',
          onClick: crewRoute
        },
        {
          key: 4,
          icon: React.createElement(BookOutlined),
          label: 'Document',
          onClick: documentRoute
        },
        {
          key: 5,
          icon: React.createElement(BarsOutlined),
          label: 'Rank',
          onClick: handleRank
        },
        {
          key: 6,
          icon: React.createElement(LogoutOutlined),
          label: 'Logout',
          onClick: handleLogout
        },
];
