<template>
  <div class="home-page content-box-area">
    <div class="container container-fluid cst_container pt-0 ng-scope">
      <div class="m-0">
        <router-view></router-view>
      </div>
    </div>
  </div>
</template>

<script>
/**
 * Description: Home (Handle list and view page request).
 * Version: 1.0.0
 * Author: Synsoft Global
 * Author URI: https://www.synsoftglobal.com/
 *
 */
import { mapGetters } from "vuex";

export default {
  name: "home"
};
</script>
