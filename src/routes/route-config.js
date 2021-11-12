import About from "../pages/About";
import Home from "../pages/Home";
import Sos from "../pages/Sos"
import Location from "../pages/Location";
// import Sos from "../pages/Sos";
// import UserLocation from "../pages/Location";
import Message from "../pages/Message";
import SosComponent from "../pages/SosComponent";
import Panic from "../pages/Panic";
import Rights from "../pages/Rights";
import Ngo from "../pages/Ngo";
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
      component: Panic,
      path: "/panic",
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
      component: Ngo,
      path: "/ngo",
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
