import React, {Suspense} from 'react';
import {Route, Routes,  } from "react-router-dom";
import {mainRoutes} from "../routes/mainRoutes";
import PrivateRoutes from '../routes/PrivateRoutes'
import PublicRoutes from "../routes/PublicRoutes";

function Pages(props) {
    const authToken = true
    return (
        <>
            <Suspense fallback='loading...'>
                <Routes>
                    {mainRoutes.map(({path, private: IsPrivate,restricted, component: Component, icon, exact}) => (
                        <Route path={path}
                        exact={`${exact}`}
                        // element={
                        //     IsPrivate
                        //     ? <PrivateRoutes auth={authToken} element={Component} restricted={restricted}/>
                        //     : <PublicRoutes auth={authToken} element={Component} restricted={restricted}/>
                        // }
                            element={<Component/>}
                        key={path}/>
                        ))}
                </Routes>
            </Suspense>
        </>
    );
}

export default Pages;