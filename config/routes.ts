﻿export default [
  {
    path: '/user',
    layout: false,
    routes: [
      {
        path: '/user',
        routes: [
          {
            name: 'login',
            path: '/user/login',
            component: './User/login',
          },
        ],
      },
    ],
  },
  {
    path: '/welcome',
    name: 'welcome',
    icon: 'smile',
    component: './Welcome',
  },
  {
    path: '/competition',
    name: '比赛',
    icon: 'flag',
    component: './Competition',
  },
  {
    path: '/lecture',
    name: '授课',
    icon: 'bulb',
    component: './Lecture',
  },
  {
    path: '/personalInformation',
    name: '个人信息',
    icon: 'bulb',
    component: './PersonalInformation',
  },
  {
    path: '/admin',
    name: 'admin',
    icon: 'crown',
    access: 'canAdmin',
    routes: [
      {
        path: '/admin/dash-board',
        name: '仪表盘',
        icon: 'dashboard',
        component: './Administrator/DashBoard',
      },{
        path: '/admin/create-competition',
        name: '创建比赛',
        icon: 'form',
        component: './Administrator/CreateCompetition',
      },{
        path: '/admin/competition-list',
        name: '比赛列表',
        icon: 'ordered-list',
        component: './Administrator/CompetitionList',
      },
    ],
  },
  {
    name: 'list.table-list',
    icon: 'table',
    path: '/list',
    component: './TableList',
  },
  {
    path: '/competition/detail',
    component: './Competition/Detail',
  },
  {
    path: '/',
    redirect: '/welcome',
  },
  {
    component: './404',
  },
];
