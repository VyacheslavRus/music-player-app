import {Suspense} from "react";
import {Route, Routes} from "react-router-dom";
import {mainRoutes} from "../../routes/mainRoutes";

const Main = () => {
    return (
        <>
            <Suspense fallback='loading...'>
                <Routes>
                    {mainRoutes.map(({path, component:Component}) => (
                        <Route path={path}
                            // exact
                               element={<Component/>}
                               key={path}/>
                    ))}
                </Routes>
            </Suspense>
        </>
    );
}

export default Main;