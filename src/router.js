import Vue from "vue"
import VueRouter from "vue-router"

import Home from "./pages/Home"
import About from "./pages/About"
import Contact from "./pages/Contact"
import User from "./pages/User"
import UserProfile from "./pages/UserProfile"
import UserEdit from "./pages/UserEdit"
import UserRegister from "./pages/UserRegister"
import UserLogin from "./pages/UserLogin"
import Logout from "./pages/Logout"

Vue.use(VueRouter)

const routes = [
  { path: "/", component: Home },
  { path: "/about", component: About },
  { path: "/contact", component: Contact },
  { path: "/user/", component: User },
  { path: "/login/", component: UserLogin },
  { path: "/user/register/", component: UserRegister },
  { path: "/user/:id", component: UserProfile },
  { path: "/user/edit/:id", component: UserEdit },
  { path: "/logout", component: Logout },
]

const router = new VueRouter({ routes: routes, mode: "history" })

export default router
