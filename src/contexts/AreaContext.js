/* eslint-disable no-restricted-syntax */
import PropTypes from 'prop-types';
import React, { createContext, useEffect, useState } from 'react';
import areaApi from 'src/api/areas';

const AreaContext = createContext({
  areas: null,
  fetchAllAreas: null,
});

export const AreaProvider = ({ children }) => {
  const [areas, setAreas] = useState([]);

  const fetchAllAreas = async () => {
    console.log('fetchallareas');
    const data = await areaApi.getAll();
    setAreas(data);
  };

  return <AreaContext.Provider value={{ areas, fetchAllAreas }}>{children}</AreaContext.Provider>;
};

AreaProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export default AreaContext;
