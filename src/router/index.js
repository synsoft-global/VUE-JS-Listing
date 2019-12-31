/**
 * Description: Router Module (Define each routes).
 * Version: 1.0.0
 * Author: Synsoft Global
 * Author URI: https://www.synsoftglobal.com/
 *
 */

import Vue from "vue";
import Router from "vue-router";

Vue.use(Router);

export default new Router({
  routes: [{
    path: "/",
    component: () => import("@/views/Home"),
    children: [{
      path: "",
      name: "home",
      component: () => import("@/views/HomeGlobal")
    }]
  }]
});
