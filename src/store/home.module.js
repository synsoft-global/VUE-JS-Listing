/**
 * Description: Home module Action (Define list of functions used in home module).
 * Version: 1.0.0
 * Author: Synsoft Global
 * Author URI: https://www.synsoftglobal.com/
 *
 */

import {
  UserService
} from "@/common/api.service";
import {
  FETCH_USERS
} from "./actions.type";

import {
  FETCH_START,
  FETCH_END
} from "./mutations.type";

const state = {
  users: [],
  isLoading: true,
  userCount: 0
};

const getters = {
  userCount(state) {
    return state.userCount;
  },
  users(state) {
    return state.users;
  },
  isLoading(state) {
    return state.isLoading;
  }
};


const actions = {
  [FETCH_USERS]({
    commit,
    state
  }, params) {
    commit(FETCH_START);
    return UserService.query(params.type, params.filters)
      .then(({
        data
      }) => {
        commit(FETCH_END, data);
      })
      .catch(error => {
        console.log(error);
        throw new Error(error);
      });
  }
};

/* eslint no-param-reassign: ["error", { "props": false }] */
const mutations = {
  [FETCH_START](state) {
    state.isLoading = true;
  },
  [FETCH_END](state, {
    data,
    totalCount
  }) {
    state.users = data;
    state.userCount = totalCount;
    state.isLoading = false;
  }
};

export default {
  state,
  getters,
  actions,
  mutations
};
