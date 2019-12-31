/**
 * Description: API Services (Handle all API request).
 * Version: 1.0.0
 * Author: Synsoft Global
 * Author URI: https://www.synsoftglobal.com/
 *
 */

import Vue from "vue";
import axios from "axios";
import VueAxios from "vue-axios";
import {
  API_URL
} from "@/common/config";

const ApiService = {
  init() {
    Vue.use(VueAxios, axios);
    Vue.axios.defaults.baseURL = API_URL;
  },

  setHeader() {
    Vue.axios.defaults.headers.common[
      "Authorization"
    ] = `Token ${JwtService.getToken()}`;
  },

  query(resource, params) {
    return Vue.axios.get(resource, params).catch(error => {
      throw new Error(`[RWV] ApiService ${error}`);
    });
  },

  get(resource, slug = "") {
    return Vue.axios.get(`${resource}/${slug}`).catch(error => {
      throw new Error(`[RWV] ApiService ${error}`);
    });
  },

  post(resource, params) {
    return Vue.axios.post(`${resource}`, params);
  },

  update(resource, slug, params) {
    return Vue.axios.put(`${resource}/${slug}`, params);
  },

  put(resource, params) {
    return Vue.axios.put(`${resource}`, params);
  },

  delete(resource) {
    return Vue.axios.delete(resource).catch(error => {
      throw new Error(`[RWV] ApiService ${error}`);
    });
  }
};

export default ApiService;

/**
 * Define User services.
 */
export const UserService = {
  query(type, params) {
    var fd = new FormData();
    fd.append('preferenceData', JSON.stringify(params.preferenceData));
    fd.append('pageNo', params.offset + 1);
    fd.append('pageSize', params.limit);
    return ApiService.post("user/search_match_test", fd);
  },
  get(slug) {
    return ApiService.get("user", slug);
  },
  create(params) {
    return ApiService.post("user", {
      params: params
    });
  },
  update(slug, params) {
    return ApiService.update("user", slug, {
      params: params
    });
  },
  destroy(slug) {
    return ApiService.delete(`user/${slug}`);
  }
};
