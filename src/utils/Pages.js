import React, {Suspense} from 'react';
import {Navigate, Route, Routes,} from "react-router-dom";
import {mainRoutes} from "../routes/mainRoutes";
import AuthPage from "../pages/AuthPage";

function Pages(props) {

    const AUTH_TOKEN = ''

    const redirect = (token ,Component) => {
        return token ? <Component/> : <Navigate to="/login"/> && <AuthPage/>
    }

    return (
        <>
            <Suspense fallback='loading...'>
                <Routes>
                    {mainRoutes.map(({path, private: IsPrivate, restricted, component: Component, icon, exact}) => (
                        <Route path={path}
                               exact
                               element={redirect(AUTH_TOKEN,Component)}
                               key={path}/>
                    ))}
                </Routes>
            </Suspense>
        </>
    );
}

export default Pages;