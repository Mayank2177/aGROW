// src/App.jsx
import React from 'react';
import AppRoutes from './Routes'; // this controls your pages like LandingPage and Product

const App = () => {
  return (
    <div className="App">
      <AppRoutes />
    </div>
  );
};

export default App;
