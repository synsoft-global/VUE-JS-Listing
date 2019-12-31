<template>
  <div class="row">
    <div class="col-md-3">
      <!-- drop down menu  -->
      <div class="stepwizard_box p-0">
        <ul class="megamenu mb-2">
          <li class="mega-dropdown" :class="{ 'dropdown-active': dropDownToggle === 1 }">
            <a class="megamenuSec" @click="dropDownToggle=dropDownToggle == 1 ? 0 : 1">
              Religion
              <i class="fa fa-chevron-up"></i>
            </a>
            <div class="megadrop">
              <button class="btn btn-outline-light close-drop" @click="dropDownToggle=0">
                <i class="fa fa-close"></i>
              </button>
              <div class="col-sm-12 col-md-12 col-lg-12 col-xl-12">
                <div class="row m-0 align-items-center justify-content-between">
                  <b class="text-capitalize pt-2 pb-2">religion</b>
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
                        <input
                          class="form-check-input"
                          type="checkbox"
                          v-model="preferenceData.religion"
                          v-on:click="changeSearch()"
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
          <li class="mega-dropdown" :class="{ 'dropdown-active': dropDownToggle === 2 }">
            <a class="megamenuSec" @click="dropDownToggle = dropDownToggle == 2 ? 0 : 2">
              Caste
              <i class="fa fa-chevron-up"></i>
            </a>
            <div class="megadrop">
              <button class="btn btn-outline-light close-drop" @click="dropDownToggle=0">
                <i class="fa fa-close"></i>
              </button>
              <div class="col-sm-12 col-md-12 col-lg-12 col-xl-12">
                <div class="row m-0 align-items-center justify-content-between">
                  <b class="text-capitalize pt-2 pb-2">Caste</b>
                </div>
                <hr />
                <div class="row">
                  <div
                    class="col-sm-12 col-md-4 col-lg-4 col-xl-4 mb-2"
                    v-for="(caste) in ddCaste"
                    :key="caste.index"
                  >
                    <div class="checkbox">
                      <label>
                        <input
                          class="form-check-input"
                          type="checkbox"
                          v-model="preferenceData.caste"
                          v-on:click="changeSearch()"
                          :value="caste"
                        />
                        <span class="cr">
                          <i class="cr-icon fa fa-check"></i>
                        </span>
                        {{caste}}
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
    <div class="col-md-9">
      <!-- start profile structure -->
      <div class="stepwizard_box">
        <div class="vendor-thumbnail list-view">
          <div class="d-lg-flex d-block align-items-center m-0">
            <div class="col-md-4 col-lg-3 p-0">
              <b class="text-capitalize" v-if="userCount > 1">We found {{userCount}} matches</b>
              <b class="text-capitalize" v-if="userCount == 1">We found {{userCount}} match</b>
              <b class="text-capitalize" v-if="userCount === 0">No match found</b>
            </div>
            <div class="col-md-8 col-lg-9 p-0">
              <div class="pull-right ng-scope">
                <div class="btn-group mr-3 mt-2 mb-2 mt-md-0 mb-md-0">
                  <b>Female</b>
                  <div class="cmn-switch ml-2 mr-2">
                    <input
                      v-model="genderStatus"
                      v-on:click="changeGenderType(genderStatus)"
                      class="cmn-toggle cmn-toggle-round-flat ng-valid ng-dirty ng-valid-parse ng-touched ng-not-empty"
                      type="checkbox"
                    />
                    <label for="cmn-toggle-4"></label>
                  </div>
                  <b>Male</b>
                </div>
              </div>
            </div>
          </div>
        </div>
        <!-- start vendor -->
        <div>
          <div v-if="isLoading" class="vendor-thumbnail list-view">Loading matchs...</div>
          <div v-else>
            <div v-if="users.length === 0" class="vendor-thumbnail list-view">No match found... yet.</div>
            <UserItemPreview
              v-for="(match, index) in users"
              :match="match"
              :key="match.id + index"
            />
            <div
              v-if="userCount > 0 && userCount > itemsPerPage"
              class="row justify-content-center d-flex m-0 clear_both"
            >
              <div class="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12">
                <VPagination :pages="pages" :currentPage.sync="currentPage" />
              </div>
            </div>
          </div>
        </div>
        <!-- end vendor -->
        <!-- ngIf: TotalCount > 0 && TotalCount > pageSize -->
      </div>
      <!-- end profile struture -->
    </div>
  </div>
</template>

<script>
/**
 * Description: Search List component (Show all matched profile).
 * Version: 1.0.0
 * Author: Synsoft Global
 * Author URI: https://www.synsoftglobal.com/
 *
 */
import { mapGetters } from "vuex";
import UserItemPreview from "./UserItemPreview";
import VPagination from "./VPagination";
import { FETCH_USERS } from "../store/actions.type";

export default {
  name: "SearchList",
  components: {
    UserItemPreview,
    VPagination
  },
  props: {
    genderStatus: {
      type: Boolean,
      required: false,
      default: false
    },
    type: {
      type: String,
      required: false,
      default: "all"
    },
    itemsPerPage: {
      type: Number,
      required: false,
      default: 10
    }
  },
  data() {
    return {
      currentPage: 1,
      filterData: [],
      dropDownToggle: 0,
      ddReligion: ["Jain"],
      ddCaste: ["Shwetamber", "Digamber"],
      preferenceData: {
        religion: [],
        caste: []
      }
    };
  },
  computed: {
    listConfig() {
      const { type } = this;
      const filters = {
        offset: (this.currentPage - 1) * this.itemsPerPage,
        limit: this.itemsPerPage,
        preferenceData: {
          gender: 2,
          religion: [],
          caste: []
        }
      };

      return {
        type,
        filters
      };
    },
    pages() {
      if (this.isLoading || this.userCount <= this.itemsPerPage) {
        return [];
      }
      return [
        ...Array(Math.ceil(this.userCount / this.itemsPerPage)).keys()
      ].map(e => e + 1);
    },
    ...mapGetters(["userCount", "isLoading", "users"])
  },
  watch: {
    currentPage(newValue) {
      this.listConfig.filters.offset = (newValue - 1) * this.itemsPerPage;
    },
    type() {
      this.resetPagination();
    }
  },
  mounted() {
    this.fetchUsers();
  },

  methods: {
    changeGenderType(status) {
      this.listConfig.filters.preferenceData.gender = 2;
      if (status) {
        this.listConfig.filters.preferenceData.gender = 1;
      }
      this.$store.dispatch(FETCH_USERS, this.listConfig);
    },
    fetchUsers() {
      this.$store.dispatch(FETCH_USERS, this.listConfig);
    },
    resetPagination() {
      this.listConfig.offset = 0;
      this.currentPage = 1;
    },
    changeSearch() {
      this.listConfig.filters.preferenceData.religion = this.preferenceData.religion;
      this.listConfig.filters.preferenceData.caste = this.preferenceData.caste;
      this.$store.dispatch(FETCH_USERS, this.listConfig);
    }
  }
};
</script>
