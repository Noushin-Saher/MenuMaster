import React from 'react';
import { useLocation } from 'react-router-dom';

function Home(){
  const location = useLocation();
  const { reg_no } = location.state || {};

  return (
    <div>
      <h1>Welcome, {reg_no}</h1>
      {/* Other content */}
    </div>
  );
};

export default Home;
