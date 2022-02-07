import { lazy } from "react";
import {CgProfile} from "react-icons/cg";
import {BiHome} from "react-icons/bi";

import {FiHeart ,FiSettings} from "react-icons/fi";

import { RiPlayListLine} from "react-icons/ri";


export const mainRoutes = [
  {
    name: "Домой",
    path: "/",
    private: true,
    restricted: false,
    exact: true,
    icon:<BiHome/>,
    component: lazy(() =>
      import("../pages/HomePage" /*webpackChunkName:'HomePage'*/)
    ),
  },
  {
    name: "Профиль",
    path: "/userProfile",
    private: true,
    restricted: false,
    exact: true,
    icon:<CgProfile/>,
    component: lazy(() =>
      import("../pages/UserPage" /*webpackChunkName:'UserProfile'*/)
    ),
  },
  {
    name: "Мои плейлисты",
    path: "/userPlayList",
    private: true,
    restricted: false,
    exact: true,
    icon:<RiPlayListLine/>,
    component: lazy(() =>
      import("../pages/UserPlayListPage" /*webpackChunkName:'UserPlayList'*/)
    ),
  },
  {
    name: "Понравившаяся музыка",
    path: "/likedSongs",
    private: true,
    restricted: false,
    exact: true,
    icon:<FiHeart/>,
    component: lazy(() =>
      import("../pages/LikedSongsPage" /*webpackChunkName:'LikedSongs'*/)
    ),
  },
  {
    name: "Настройки",
    path: "/settings",
    private: true,
    restricted: false,
    exact: true,
    icon:<FiSettings/>,
    component: lazy(() =>
      import("../pages/SettingsPage" /*webpackChunkName:'Settings'*/)
    ),
  },
  {
    name: "Вход",
    path: "/login",
    private: false,
    restricted: true,
    exact: true,
    component: lazy(() =>
      import("../pages/AuthPage" /*webpackChunkName:'Login'*/)
    ),
  },
  {
    name: "Регистрация",
    path: "/registration",
    private: false,
    restricted: true,
    exact: true,
    component: lazy(() =>
      import("../pages/AuthPage" /*webpackChunkName:'Registration'*/)
    ),
  },
];