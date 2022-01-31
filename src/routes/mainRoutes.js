import { lazy } from "react";

export const mainRoutes = [
  {
    name: "",
    path: "/",
    private: false,
    restricted: false,
    exact: true,
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