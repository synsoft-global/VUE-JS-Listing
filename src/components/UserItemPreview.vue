<template>
  <div class="vendor-thumbnail list-view">
    <div class="row">
      <div class="col-xl-4 col-lg-4 col-md-4 col-sm-12 col-12">
        <div class="vendor-img squrebox-border border-sm bs-box squrebox-xs">
          <!-- Vendor img -->
          <img
            v-if="match.profile_images && match.profile_images[0].status==1 && match.profile_images[0].path"
            :src="IMAGE_URL+match.profile_images[0].path"
            class="img-fluid"
            alt="avatar"
          />

          <img
            v-if="(!match.profile_images || !match.profile_images[0].path || match.profile_images[0].status!=1) && match.gender==2 "
            src="assets/img/placeholder-female.jpg"
            class="img-fluid"
            alt="avatar"
          />

          <img
            v-if="(!match.profile_images || !match.profile_images[0].path|| match.profile_images[0].status!=1) && match.gender==1 "
            src="assets/img/placeholder-male.jpg"
            class="img-fluid"
            alt="avatar"
          />

          <div class="wishlist-sign">
            <a class="wishlist">
              <i class="fa fa-heart"></i>
            </a>
          </div>
        </div>
      </div>
      <!-- /.Vendor img -->
      <div class="col-xl-8 col-lg-8 col-md-8 col-sm-12 col-12">
        <div class="vendor-content">
          <!-- Vendor Content -->

          <h2 class="vendor-title line-clamp line-clamp-1">{{match.first_name}} {{match.last_name}}</h2>
          <p class="vendor-address line-clamp line-clamp-1">{{match.p_add_city}}</p>
          <div class="vendor-meta">
            <!-- Vendor meta -->
            <div class="guest-box vendor-meta-box">
              <ul>
                <li v-if="match.dob" class="text-dark">
                  <span class="label-width">DOB</span>
                  <div class="ml-4">
                    <span class="line-clamp line-clamp-1">{{match.dob | date}}</span>
                  </div>
                </li>

                <li v-if="match.religion" class="text-dark ng-scope">
                  <span class="label-width">Religion</span>
                  <div class="ml-4">
                    <span class="line-clamp line-clamp-1">{{match.religion}}</span>
                  </div>
                </li>

                <li v-if="match.caste" class="text-dark ng-scope">
                  <span class="label-width">Caste</span>
                  <div class="ml-4">
                    <span class="line-clamp line-clamp-1">{{match.caste}}</span>
                  </div>
                </li>

                <li v-if="match.occupation" class="text-dark ng-scope">
                  <span class="label-width">Occupation</span>
                  <div class="ml-4">
                    <span class="line-clamp line-clamp-1">{{match.occupation}}</span>
                  </div>
                </li>

                <li class="text-dark ng-scope">
                  <span class="label-width">Address</span>
                  <div class="ml-4">
                    <span
                      class="line-clamp line-clamp-1"
                    >{{match.p_add_line1}}, {{match.p_add_line2}} {{match.p_add_city}}, {{match.p_add_state}}, {{match.p_add_country}}</span>
                  </div>
                </li>
              </ul>
            </div>
          </div>
          <!-- /.Vendor meta -->
        </div>
        <!-- /.Vendor Content -->
      </div>
    </div>
  </div>
</template>

<script>
/**
 * Description: List each matched user.
 * Version: 1.0.0
 * Author: Synsoft Global
 * Author URI: https://www.synsoftglobal.com/
 *
 */

import { IMAGE_URL } from "@/common/config";

export default {
  name: "UserItemPreview",
  components: {},
  data() {
    return {
      IMAGE_URL: IMAGE_URL
    };
  },
  props: {
    match: { type: Object, required: true }
  },
  computed: {}
};
</script>
