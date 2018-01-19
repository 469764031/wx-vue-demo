/**
 * Created by ling on 2018/1/19.
 */
import Vue from "vue";
import Router from "vue-router";
import Main from "./modules/main"

Vue.use(Router);

export default new Router({
  routes: [
    {path: "/main", component: Main}
  ]
})
