import {Navigate} from "react-router-dom";

import React from 'react';

function PrivateRoutes({ element:Component, auth}) {
    return auth ? <Component/> : <Navigate to="/login" />;
}

export default PrivateRoutes;