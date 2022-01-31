import { Suspense } from "react";
import { Routes, Route } from "react-router-dom";
import { mainRoutes } from "../../routes/mainRoutes";


const Main = () => {
    return (
        <>
            <Suspense fallback='loading...'>
                <Routes>
                    {mainRoutes.map((route) => (
                        <Route path={route.path} element={route.component} key={route.path} />
                    ))}
                </Routes>
            </Suspense>
        </>
    );
}

export default Main;