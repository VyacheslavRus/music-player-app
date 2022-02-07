import {NavLink, useLocation} from "react-router-dom";
import {mainRoutes} from "../../../routes/mainRoutes";
import cls from "classnames";
import {useState} from "react";
import {NavigationStyled} from "./NavigationStyled";
import NavItems from "./NavItems";

const Navigation = () => {
    return (
        <NavigationStyled>
                <ul className="navList">
                    {mainRoutes.map(({path, name,private: IsPrivate, icon,exact,restricted}) => (
                        <NavItems name={name} exact={exact} icon={icon} IsPrivate={IsPrivate} path={path} key={path} restricted={restricted}/>
                    ))}
                </ul>
        </NavigationStyled>
    );
};

export default Navigation;
