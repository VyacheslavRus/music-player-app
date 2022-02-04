import {NavLink, useLocation} from "react-router-dom";
import {mainRoutes} from "../../../routes/mainRoutes";
import cls from "classnames";
import {useState} from "react";
import {NavigationStyled} from "./NavigationStyled";

const Navigation = () => {
    const location = useLocation();
    // const [toglBurger, setToglBurger] = useState(false);
    // const hendleToglBurger = () => {
    //     setToglBurger(!toglBurger);
    // };

    return (
        <NavigationStyled>
                <ul className="burgerList">
                    {mainRoutes.map(({path, name,private: IsPrivate, icon,exact}) => (
                        !IsPrivate && <li key={path} className="navItem">

                            <NavLink
                                to={{
                                    pathname: path,
                                    state: {from: location.pathname},
                                }}
                                exact={`${exact}`}
                                className="navItemLink"
                            >
                                <span className='iconSpan'>{icon}</span>{name}
                            </NavLink>
                        </li>
                    ))}
                </ul>
        </NavigationStyled>
    );
};

export default Navigation;
