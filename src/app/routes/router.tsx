import React from 'react';
import {HistoryPage} from "../../pages/history-page";
import {BrowserRouter, Route, Routes} from 'react-router-dom';
import {HomePage, SearchPage, SignInPage, SignUpPage} from '../../pages';
import {AuthRoute} from './authRoute.tsx';
import {ErrorBoundary, PATHS} from '../../shared';

export const RouterProvider: React.FC = () => {
    return (
        <BrowserRouter>
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
                </Route>
            </Routes>
        </BrowserRouter>
    );
};
