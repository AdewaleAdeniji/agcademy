import LandingPage from "../pages";
import BlogDetails from "../pages/blogDetail";
import Blogs from "../pages/blogs";
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
  },
  {
    key: "blogs",
    path: `/blogs`,
    title: "Blogs",
    navbar: true,
    isAuthenticated: false,
    hasSubmenu: false,
    roles: 'user',
    component: Blogs,
  },
  {
    key: "blog",
    path: `/blog/:id`,
    title: "Blog",
    navbar: true,
    isAuthenticated: false,
    hasSubmenu: false,
    roles: 'user',
    component: BlogDetails,
  }
];
const navTree = [
  ...routes.filter((route) => {
    return route.navbar;
  }),
];

export { routes, navTree };
