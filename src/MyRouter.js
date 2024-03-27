import React from 'react';
import { useRoutes } from 'react-router-dom';
import routes from './routes';

const MyRouter = () => {
  const routing = useRoutes(routes());

  return <>{routing}</>;
};

export default MyRouter;
