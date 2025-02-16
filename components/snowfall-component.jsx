'use client';  //  <---- IMPORTANT!  Marks this as a Client Component

import Snowfall from 'react-snowfall';
import React from 'react'; //Import react to avoid errors

const SnowfallComponent = () => {
  return (
    <Snowfall
      style={{
        position: 'fixed',
        width: '100vw',
        height: '100vh',
        zIndex: 1,
        pointerEvents: 'none',
      }}
      snowflakeCount={100}
      color="white"
    />
  );
};

export default SnowfallComponent;
