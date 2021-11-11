import About from "../pages/About";
import Home from "../pages/Home";
import Sound from "../pages/Sound";
import Sos from "../pages/Sos";
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
      component: Sound,
      path: "/sound",
      exact: true,
    },
    {
      component: Sos,
      path: "/sos",
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
