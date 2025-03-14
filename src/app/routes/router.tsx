import React, { Suspense } from 'react';
import { HistoryPage } from '../../pages/history-page';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { FavoritesPage, HomePage, SignInPage, SignUpPage } from '../../pages';
import { AuthRoute } from './authRoute.tsx';
import { ErrorBoundary, PATHS } from '../../shared';
import { Loader } from '../../shared/ui/loading';
import { SearchPage } from './lazy-routes.ts';
import { GamePage } from '../../pages/game-page/GamePage.tsx';

export const RouterProvider: React.FC = () => {
  return (
    <BrowserRouter>
      <Suspense fallback={<Loader />}>
        <ErrorBoundary>
          <Routes>
            <Route element={<AuthRoute isProtected />}>
              <Route path={PATHS.HISTORY} element={<HistoryPage />} />
              <Route path={PATHS.FAVORITES} element={<FavoritesPage />} />
            </Route>
            <Route element={<AuthRoute />}>
              <Route path={PATHS.HOME} element={<HomePage />} />
              <Route path={PATHS.SINGNIN} element={<SignInPage />} />
              <Route path={PATHS.SEARCH} element={<SearchPage />} />
              <Route path={PATHS.SIGNUP} element={<SignUpPage />} />
              <Route path={PATHS.GAMEPAGE} element={<GamePage />} />
            </Route>
          </Routes>
        </ErrorBoundary>
      </Suspense>
    </BrowserRouter>
  );
};
