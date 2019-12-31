<template>
  <header id="header">
    <div class="container-fluid pdzero ng-scope">
      <nav class="navbar navbar-expand-md navbar-light fixed-top py-1">
        <a class="navbar-brand my-0 mr-md-auto font-weight-normal py-0" href="/">
          <img src="assets/img/logo.png" alt="Jain Bandhan" />
        </a>
        <button
          class="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarsExampleDefault"
          aria-controls="navbarsExampleDefault"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <img src="assets/img/menu.svg" alt="Menu" class="menu-button" />
        </button>
        <div class="collapse navbar-collapse" id="navbarsExampleDefault">
          <ul class="navbar-nav mr-auto"></ul>
          <div class="form-inline my-2 my-lg-0 menuBarSec">
            <a is-active-nav class="waves-effect waves-light nav-link" href="#">My Profile</a>
            <a is-active-nav class="waves-effect waves-light nav-link" href="#">User Managment</a>
            <a is-active-nav class="waves-effect waves-light nav-link" href="#">Settings</a>
            <a
              is-active-nav
              class="mr-sm-3 mb-2 mb-sm-0 waves-effect waves-light nav-link"
              href="#"
            >Gallery</a>
            <a
              is-active-nav
              class="mr-sm-3 mb-2 mb-sm-0 waves-effect waves-light nav-link active"
              href="#"
            >Find Match</a>
            <div class="dropdown" ng-controller="changePasswordController"></div>
            <div class="nav-item avatar dropdown user-pro">
              <a
                class="d-flex align-items-center dropdown-toggle waves-effect waves-light"
                id="navbarDropdownMenuLink-5"
                data-toggle="dropdown"
                aria-haspopup="true"
                aria-expanded="false"
              >
                <div class="userImg">
                  <img src="assets/img/admin-icon.png" class alt="admin image" />
                </div>
                <div class="username line-clamp line-clamp-1">
                  <span class="spanuser">Admin</span>
                </div>
                <span class="fa fa-angle-down"></span>
              </a>
              <div
                class="dropdown-menu dropdown-menu-right dropdown-secondary"
                aria-labelledby="navbarDropdownMenuLink-5"
              >
                <a class="dropdown-item waves-effect waves-light" href="#">Change Password</a>
                <a class="dropdown-item waves-effect waves-light" is-active-nav href="#">Logout</a>
              </div>
            </div>
          </div>
        </div>
      </nav>
    </div>
  </header>
  <!-- end #header -->
</template>

<script>
/**
 * Description: Header component.
 * Version: 1.0.0
 * Author: Synsoft Global
 * Author URI: https://www.synsoftglobal.com/
 *
 */
import { mapGetters } from "vuex";

export default {
  name: "RwvHeader",
  computed: {
    ...mapGetters(["currentUser", "isAuthenticated"])
  }
};
</script>
