import LandingPage from "../pages";
const routes = [
  {
    key: "index",
    path: `/`,
    title: "Agcademy",
    navbar: true,
    isAuthenticated: false,
    hasSubmenu: false,
    roles: 'user',
    component: LandingPage,
  }
];
const navTree = [
  ...routes.filter((route) => {
    return route.navbar;
  }),
];

export { routes, navTree };
