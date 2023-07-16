import { createRouter, createWebHistory } from "vue-router";

import register from "../views/Register.vue";
import Login from "../views/Login.vue";
import axios from "axios";
import Edit from "../views/Edit.vue";
import Ssa2 from "../components/Ssa2.vue";
import NascidosVIvos from "../components/NascidosVivos.vue";
import PowerBiDashboard from "../components/PowerBiDashboard.vue";
import home from "../views/Home";

import FormDeTeste from "../components/FormDeTeste.vue";
import profile from "../components/profile.vue";

/////////////dashBoard///////////
import EditObitos from "../views/EditObitos";
import dashboard from "../views/dashboard";
import adminpainel from "../components/adminpainel";
import ListaObitos from "../components/ListaObitos";
import Obitos from "../components/Obitos";

//////////////////////////////

function AdminAuth(to, from, next) {
  if (localStorage.getItem("token") != undefined) {
    var req = {
      headers: {
        Authorization: "Bearer " + localStorage.getItem("token"),
      },
    };
    axios
      .post("http://localhost:8686/validate", {}, req)
      .then((res) => {
        console.log(res);
        next();
      })
      .catch((err) => {
        console.log(err.response);
        next("/login");
      });
  } else {
    next("/login");
  }
}

const routes = [
  {
    path: "/",
    name: "home",
    component: home,
  },
  {
    path: "/profile",
    name: "profile",
    component: profile,
    beforeEnter: AdminAuth,
  },
  {
    path: "/formteste",
    name: "FormDeTeste",
    component: FormDeTeste,
  },

  {
    path: "/register",
    name: "register",
    component: register,
  },
  {
    path: "/login",
    name: "Login",
    component: Login,
  },
  {
    path: "/admin/users/edit/:id",
    name: "UserEdit",
    component: Edit,
    beforeEnter: AdminAuth,
  },
  {
    name: "Dashboard",
    path: "/admin/users/Dashboard",
    component: dashboard,
    beforeEnter: AdminAuth,
    children: [
      {
        name: "adminpainel",
        path: "/adminpainel",
        component: adminpainel,
      },
      {
        name: "obitos",
        path: "/obitos",
        component: Obitos,
      },
      {
        name: "ListaObitos",
        path: "/ListaObitos",
        component: ListaObitos,
      },
      {
        path: "/admin/users/editObitos/:id",
        name: "EditObitos",
        component: EditObitos,
        //// beforeEnter: AdminAuth
      },
      {
        path: "/Ssa2",
        name: "ssa2",
        component: Ssa2,
      },
      {
        path: "/Nascidosvivos",
        name: "nascidosvivos",
        component: NascidosVIvos,
      },
      {
        path: "/powerbi",
        name: "powerbi",
        component: PowerBiDashboard,
      },
    ],
    ////beforeEnter: AdminAuth
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
