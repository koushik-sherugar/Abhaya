import About from "../pages/About";
import Home from "../pages/Home";
import Sound from "../pages/Sound";
import Sos from "../pages/Sos"
import Location from "../pages/Location";
// import Sos from "../pages/Sos";
// import UserLocation from "../pages/Location";
import Message from "../pages/Message";
import SosComponent from "../pages/SosComponent";
import Rights from "../pages/Rights";
import Contact from "../pages/Contact"
import Login from "../pages/../pages/Login"

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
      component: Message,
      path: "/message",
      exact: true,
    },
    {
      component: SosComponent,
      path: "/soscomponent",
      exact: true,
    },

    {
      component: Location,
      path: "/location",
      exact: true,
    },
    {
      component: Rights,
      path: "/rights",
      exact: true,
    },
    {
      component: Contact,
      path: "/contact",
      exact: true,
    },
    {
      component: Login,
      path: "/login",
      exact: true,
    },
  ],
};

export default routeConfig;
