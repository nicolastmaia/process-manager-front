import React from 'react';
import { Navigate } from 'react-router-dom';
import GeneralLayout from 'src/layouts/GeneralLayout';
import AreaListView from 'src/views/area/AreaListView';

const simpleLoggedInRoutes = [
  {
    path: '/',
    element: <GeneralLayout />,
    children: [
      { path: '/', element: <Navigate to='/areas' /> },
      { path: '/areas', element: <AreaListView /> },
      { path: '*', element: <Navigate to='/404' /> },
    ],
  },
];

const routes = () => {
  return simpleLoggedInRoutes;
};

export default routes;
