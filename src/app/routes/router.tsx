import React, { Suspense } from 'react';
import {HistoryPage} from "../../pages/history-page";
import {BrowserRouter, Route, Routes} from 'react-router-dom';
import {HomePage, SignInPage, SignUpPage} from '../../pages';
import {AuthRoute} from './authRoute.tsx';
import {ErrorBoundary, PATHS} from '../../shared';
import { Loader } from '../../shared/ui/loading';
import { SearchPage } from './lazy-routes.ts';
import { GamePage } from '../../pages/game-page/GamePage.tsx';

export const RouterProvider: React.FC = () => {
    return (
        <BrowserRouter>
          <Suspense fallback={<Loader />}>
            <Routes>
                <Route element={<AuthRoute/>}>
                    <Route path={PATHS.HOME} element={
                        <ErrorBoundary>
                            <HomePage/>
                        </ErrorBoundary>}/>
                    <Route path={PATHS.SINGNIN} element={
                        <ErrorBoundary>
                            <SignInPage/>
                        </ErrorBoundary>}/>
                    <Route path={PATHS.SEARCH} element={
                        <ErrorBoundary>
                            <SearchPage/>
                        </ErrorBoundary>}/>
                    <Route path={PATHS.SIGNUP} element={
                        <ErrorBoundary>
                            <SignUpPage/>
                        </ErrorBoundary>}/>
                    <Route path={PATHS.HISTORY} element={
                        <ErrorBoundary>
                            <HistoryPage/>
                        </ErrorBoundary>}/>
                    <Route path={PATHS.GAMEPAGE} element={
                        <ErrorBoundary>
                            <GamePage/>
                        </ErrorBoundary>}/>
                </Route>
              </Routes>
            </Suspense>
        </BrowserRouter>
    );
};
