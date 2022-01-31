import { NavLink, useLocation } from "react-router-dom";
import { mainRoutes } from "../../routes/mainRoutes";

const Navigation = () => {
  const location = useLocation()

  return (
    <>
      <div>Hello</div>
      <button>Btn</button>
      <ul>
        {mainRoutes.map((route) => (
          <li key={route.path}>
            <NavLink
              to={{
                pathname: route.path,
                state: { from: location.pathname },
              }}
              exact={route.exact}
              className=""
              activeClassName=""
            >
              {route.name}
            </NavLink>
          </li>
        ))}
      </ul>
    </>
  );
};

export default Navigation;
