import React, { Suspense } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { HomePage, SignInPage, SignUpPage } from '../../pages';
import { AuthRoute } from './authRoute.tsx';
import { PATHS } from '../../shared';
import { Loader } from '../../shared/ui/loading';
import { SearchPage } from './lazy-routes.ts';

export const RouterProvider: React.FC = () => {
  return (
    <BrowserRouter>
      <Suspense fallback={<Loader />}>
        <Routes>
          <Route element={<AuthRoute />}>
            <Route path={PATHS.HOME} element={<HomePage />} />
            <Route path={PATHS.SINGNIN} element={<SignInPage />} />
            <Route path={PATHS.SEARCH} element={<SearchPage />} />
            <Route path={PATHS.SIGNUP} element={<SignUpPage />} />
          </Route>
        </Routes>
      </Suspense>
    </BrowserRouter>
  );
};
