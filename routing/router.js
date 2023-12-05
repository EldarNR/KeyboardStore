import Vue from "vue";
import VueRouter from "vue-router";

Vue.use(VueRouter);

const router = new VueRouter({
  routes: [
    {
      path: "/",
      component: () => import("./pages/index.vue"),
    },
    {
      path: "/market",
      component: () => import("./pages/market.vue"),
    },
    {
      path: "/cart",
      component: () => import("./pages/cart.vue"),
    },
    {
      path: "/products/:id",
      component: () => import("./pages/products/[id].vue"),
    },
  ],
});

export default router;
