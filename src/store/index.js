/**
 * Description: Include all modules.
 * Version: 1.0.0
 * Author: Synsoft Global
 * Author URI: https://www.synsoftglobal.com/
 *
 */

import Vue from "vue";
import Vuex from "vuex";

import home from "./home.module";

Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
    home
  }
});
