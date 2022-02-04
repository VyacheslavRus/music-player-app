import {Navigate} from "react-router-dom";

import React from 'react';

function PublicRoutes({ element:Component, auth , restricted}) {

    return auth && restricted ? <Component/> : <Navigate to="/" />;

}

export default PublicRoutes;