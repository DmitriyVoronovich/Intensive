import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { HomePage, SearchPage, SignInPage, SignUpPage } from '../../pages';
import { AuthRoute } from './authRoute.tsx';
import { PATHS } from '../../shared';

export const RouterProvider: React.FC = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<AuthRoute />}>
          <Route path={PATHS.HOME} element={<HomePage />} />
          <Route path={PATHS.SINGNIN} element={<SignInPage />} />
          <Route path={PATHS.SEARCH} element={<SearchPage />} />
          <Route path={PATHS.SIGNUP} element={<SignUpPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};
