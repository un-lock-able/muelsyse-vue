import { createRouter, createWebHashHistory } from "vue-router";

const routes = [
    {
        path: "/",
        redirect: "/home",
        meta: {
            title: "这是缪缪。她很可爱，请给她钱。",
        },
    },
    {
        path: "/home",
        component: () => import("../pages/Home.vue"),
        meta: {
            title: "这是缪缪。她很可爱，请给她钱。",
        },
    },
    {
        path: "/tools",
        component: () => import("../pages/Tools.vue"),
        meta: {
            title: "一些方舟参考网页！"
        }
    }
];

const router = createRouter({
    history: createWebHashHistory(),
    routes: routes,
});

router.beforeEach((to, from, next) => {
    to.meta.title && (document.title = to.meta.title);
    next();
});

export default router;
