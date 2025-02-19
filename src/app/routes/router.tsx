import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { HomePage, SignInPage } from '../../pages';
import { AuthRoute } from './authRoute.tsx';
import { paths } from '../../shared';

export const RouterProvider: React.FC = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<AuthRoute />}>
          <Route path={paths.home()} element={<HomePage />} />
          <Route path={paths.signIn()} element={<SignInPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};
