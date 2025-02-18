import React from 'react';
import {
  BrowserRouter,
  BrowserRouter as Router,
  Route,
  Routes,
} from 'react-router-dom';
import { HomePage } from '../../pages';

export const RouterProvider: React.FC = () => {
  return (
    <BrowserRouter>
      <Router>
        <Routes>
          <Route path="/" element={<HomePage />} />
        </Routes>
      </Router>
    </BrowserRouter>
  );
};
