import { lazy } from "react";
const routes = [
  { path: "/",
     component: lazy(() => import("../pages/HomePage")) 
    },
  {
    path: "/login",
    component: lazy(() => import("../pages/Login")),
  },
  {
    path: "/signup",
    component: lazy(() => import("../pages/Signup")),
  },
  { path: "/contact",
    component: lazy(() => import("../pages/Contact")) 
   },
   { path: "/about",
    component: lazy(() => import("../pages/About")) 
   },
   { path: "/myAccount",
    component: lazy(() => import("../pages/MyAccount")) 
   },
   { path: "/products/:productId",
    component: lazy(() => import("../pages/products/Product")) 
   },
   { path: "/products",
    component: lazy(() => import("../pages/Products")) 
   },
   { path: "/cart",
    component: lazy(() => import("../pages/Cart")) 
   },
  { path: "*", 
    component: lazy(() => import("../pages/Error")) },
];
export default routes;
