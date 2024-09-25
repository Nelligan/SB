import React, { Suspense, lazy } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';


// Lazy loading components for code splitting
const BotList = lazy(() => import('./pages/BotList'));
const Workers = lazy(() => import('./pages/Workers'));
const Logs = lazy(() => import('./pages/Logs'));

const App = () => {
  return (
    <Router>
      <Suspense fallback={<div>Loading...</div>}>
        <Routes>
          <Route path="/" element={<BotList />} />
          <Route path="/workers" element={<Workers />} />
          <Route path="/logs" element={<Logs />} />
        </Routes>
      </Suspense>
    </Router>
  );
};

export default App;
