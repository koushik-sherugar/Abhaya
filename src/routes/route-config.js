import About from "../pages/About";
import Home from "../pages/Home";
import UserLocation from "../pages/Location";

const routeConfig = {
  routes: [
    {
      component: Home,
      path: "/",
      exact: true,
    },
    {
      component: About,
      path: "/about",
      exact: true,
    },
    {
      component: UserLocation,
      path: "/location",
      exact: true,
    },
  ],
};

export default routeConfig;
