import { NavLink, useLocation } from "react-router-dom";
import { mainRoutes } from "../../routes/mainRoutes";
import cls from "classnames";
import { useState } from "react";
import { NavigationStyled } from "./NavigationStyled";

const Navigation = () => {
  const location = useLocation();
  const [toglBurger, setToglBurger] = useState(false);
  const hendleToglBurger = () => {
    setToglBurger(!toglBurger);
  };

  return (
    <NavigationStyled>
      <button
        className={cls(toglBurger ? "burgerCloseBtn" : "burgerOpenBtn")}
        type="button"
        onClick={hendleToglBurger}
      >
        Btn
      </button>
      <div
        className={cls(
          toglBurger ? "burgerModalWrapperOpen" : "burgerModalWrapperClose"
        )}
      >
        <ul className="burgerList">
          {mainRoutes.map(({ path, name }) => (
            <li key={path} className="navItem">
              <NavLink
                to={{
                  pathname: path,
                  state: { from: location.pathname },
                }}
                // exact
                className="navItemLink"
                activeclassname="activ"
              >
                {name}
              </NavLink>
            </li>
          ))}
        </ul>
      </div>
    </NavigationStyled>
  );
};

export default Navigation;
