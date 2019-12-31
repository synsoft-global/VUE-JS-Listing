<template>
  <div class="col-md-3">
    <!-- drop down menu  -->
    <div class="stepwizard_box p-0">
      <ul class="megamenu mb-2">
        <li class="mega-dropdown" :class="{ 'dropdown-active': isModalOpen === true }">
          <a class="megamenuSec" @click="toggleModal">
            Religion
            <i class="fa fa-chevron-up"></i>
          </a>
          <div class="megadrop">
            <button class="btn btn-outline-light close-drop" @click="toggleModal">
              <i class="fa fa-close"></i>
            </button>
            <div class="col-sm-12 col-md-12 col-lg-12 col-xl-12">
              <div class="row m-0 align-items-center justify-content-between">
                <b class="text-capitalize pt-2 pb-2">religion</b>
                <button
                  class="btn btn-xs btn-warning my-2 my-sm-0 mr-10 ng-scope"
                  ng-click="clearSearchParams('religion', 1)"
                >Clear All</button>
              </div>
              <hr />
              <div class="row">
                <div
                  class="col-sm-12 col-md-4 col-lg-4 col-xl-4 mb-2"
                  v-for="(religion) in ddReligion"
                  :key="religion.index"
                >
                  <div class="checkbox">
                    <label>
                      {{filterData}}
                      <input
                        class="form-check-input"
                        type="checkbox"
                        :checked="changeSearch()"
                        v-model="filterData.religion"
                        :value="religion"
                      />
                      <span class="cr">
                        <i class="cr-icon fa fa-check"></i>
                      </span>
                      {{religion}}
                    </label>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
/**
 * Description: Side Bar component.
 * Version: 1.0.0
 * Author: Synsoft Global
 * Author URI: https://www.synsoftglobal.com/
 *
 */
export default {
  name: "VSidebar",
  props: {
    filterData: {
      type: Array,
      required: false
    }
  },
  data() {
    return {
      isModalOpen: false,
      ddReligion: ["Jain"],
      preferenceData: {
        religion: []
      }
    };
  },
  methods: {
    toggleModal() {
      this.isModalOpen = !this.isModalOpen;
      this.$emit("toggleModal", this.isModalOpen);
    },
    changeSearch() {
      //this.filterData = this.preferenceData;
      console.log("changeSearch", JSON.stringify(this.filterData));
      this.$emit("update:filterData", this.filterData);
    }
  }
};
</script>
