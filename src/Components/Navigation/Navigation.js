import {NavLink, useLocation} from "react-router-dom";
import {mainRoutes} from "../../routes/mainRoutes";

const Navigation = () => {
    const location = useLocation()

    return (
        <>
            <button>Btn</button>
            <ul>
                {mainRoutes.map(({path,name}) => (
                    <li key={path}>
                        <NavLink
                            to={{
                                pathname:path,
                                state: {from: location.pathname},
                            }}
                            // exact
                            // className=""
                            // activeClassName=""
                        >
                            {name}
                        </NavLink>
                    </li>
                ))}
            </ul>
        </>
    );
};

export default Navigation;
