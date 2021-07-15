import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home";
import ListClubs from "../views/ListClubs";

Vue.use(VueRouter);

const routes = [
    {
        path: "/",
        name: "Home",
        component: Home,
    },
    {
        path: "/classificacao",
        name: "ListClubs",
        component: ListClubs,
    },
];

const router = new VueRouter({
    routes,
});

export default router;
