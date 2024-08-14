import HomePage from "../pages/HomePage";
import Login from "../pages/Login";
import Signup from "../pages/Signup";
import Contact from "../pages/Contact";
import About from "../pages/About";
import MyAccount from "../pages/MyAccount";
import Product from "../pages/products/Product";
import Products from "../pages/Products";
import Cart from "../pages/Cart";
import Error from "../pages/Error";

const routes = [
  { path: "/", component: HomePage },
  { path: "/login", component: Login },
  { path: "/signup", component: Signup },
  { path: "/contact", component: Contact },
  { path: "/about", component: About },
  { path: "/myAccount", component: MyAccount },
  { path: "/products/:productId", component: Product },
  { path: "/products", component: Products },
  { path: "/cart", component: Cart },
  { path: "*", component: Error },
];

export default routes;
