import About from "../pages/About";
import Home from "../pages/Home";


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
    
  ],
};

export default routeConfig;