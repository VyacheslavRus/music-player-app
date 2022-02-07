import React from 'react';
import {NavLink, useLocation} from "react-router-dom";

function NavItems({path, exact, icon, name,isPrivate,restricted}) {

    const authToken = false

    const location = useLocation();
    return (
        <>
            {!authToken && restricted && (<li key={path} className="navItem">
                <NavLink
                    to={{
                        pathname: path,
                        state: {from: location.pathname},
                    }}
                    exact={`${exact}`}
                    className="navItemLink"
                >
                    <span className='iconSpan'>{icon}</span>
                    {name}
                </NavLink>
            </li>)}

            {authToken && !isPrivate && !restricted && (<li key={path} className="navItem">
                <NavLink
                    to={{
                        pathname: path,
                        state: {from: location.pathname},
                    }}
                    exact={`${exact}`}
                    className="navItemLink"
                >
                    <span className='iconSpan'>{icon}</span>
                    {name}
                </NavLink>
            </li>)}
        </>

    );
}

export default NavItems;