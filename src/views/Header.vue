<template>
  <div class="header">
    <nav class="navbar navbar-expand-md navbar-light bg-color">
      <router-link class="navbar-brand p-0 pointer" to="/">
        <img src="../assets/mtc-logo.png" alt="logo" width="75" />
      </router-link>
      <button
        class="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav mr-auto ml-3">
          <ul class="nav navbar-nav titillium-web-semiBold">
            <li
              v-for="menu in headerMenu"
              :key="menu.name"
              router-link-active="active"
              class="nav-item dropdown"
            >
              <router-link v-if="menu.link" :to="menu.link" class="nav-link text-uppercase">
                <!-- ui-sref="{{ menu.link }}" -->
                {{ menu.name }}
                <span v-if="menu.subnav.length>0">
                  <i class="fa fa-caret-down"></i>
                </span>
              </router-link>
              <div class="dropdown-menu" v-if="menu.subnav.length>0">
                <div v-for="submenu in menu.subnav" :key="submenu.name" ui-sref-active="active">
                  <!-- :ui-sref="{{ submenu.stateName }}({'id':submenu.id})" -->
                  <router-link v-if="submenu.stateName" class="dropdown-item">{{ submenu.name }}</router-link>
                  <!--<a herf="{{submenu.link}}" v-if="submenu.link" class="dropdown-item">{{submenu.name}}</a>-->
                </div>
              </div>
            </li>
          </ul>
        </ul>
      </div>
    </nav>
  </div>
</template>

<script>
export default {
  data() {
    return {
      headerMenu: [
        {
          name: "Home",
          classis: "active",
          link: "/",
          subnav: []
        },
        {
          name: "About us",
          classis: "active",
          link: "/about-us",
          subnav: []
        },
        {
          name: "Gallery",
          classis: "active",
          link: "/gallery",
          subnav: []
        },
        {
          name: "Past Championship",
          classis: "active",
          link: "/past-championship",
          subnav: []
        },
        {
          name: "Sponsor",
          classis: "active",
          link: "/sponsor",
          subnav: []
        },
        {
          name: "Contact us",
          classis: "active",
          link: "/contact-us",
          subnav: []
        },
        {
          name: "Login",
          classis: "active",
          link: "/login",
          subnav: []
        }
      ]
    };
  }
};
</script>

<style lang="scss">
@import "src/assets/scss/main.scss";
.header {
  font-size: $font-size-sm;
  //   position: fixed;
  width: 100%;
  z-index: 99;
  .navbar {
    padding: 0 2rem;
  }
  .navbar-light .navbar-nav {
    .nav-item {
      padding: 0;
      cursor: pointer;
      .nav-link {
        padding: 33px 22px;
        font-size: 0.93rem;
        color: $white;
        &:hover {
          background-color: #ffffff30;
          color: $header-footer-hover;
          transition: auto;
        }
      }
    }
  }
  a.nav-link.text-uppercase.router-link-exact-active.router-link-active {
    color: $white;
    background-color: #ffffff30;
    transition: auto;
  }
  .navbar-light .navbar-toggler {
    color: $white;
    border-color: $white;
  }
  .navbar-toggler:hover,
  .navbar-toggler:focus {
    outline: 0;
  }
  .navbar-toggler {
    background-color: $white;
    border: 1px solid $white;
  }
}
/* Breakpoint for medium viewport */

@media only screen and (max-width: 992px) {
  //   //For All
  //   .font-30 {
  //     font-size: 1.3rem;
  //   }
  //   .pt5,
  //   .content {
  //     padding-top: 5.3rem;
  //   }
  //   //For All End
  //Header
  .header .navbar-light .navbar-nav .nav-item .nav-link {
    padding: 33px 11px;
    font-size: 0.8rem;
  }
  //Header End
}
@media only screen and (max-width: 768px) {
  //   //For All
  //   .mb-5 {
  //     margin-bottom: 2rem !important;
  //   }
  //   .mt-5 {
  //     margin-bottom: 2rem !important;
  //   }
  //   .my-5 {
  //     margin-bottom: 2rem !important;
  //     margin-top: 2rem !important;
  //   }
  //   .font-18,
  //   .font-24 {
  //     font-size: 1rem !important;
  //   }
  //   .font-32 {
  //     font-size: 1.5rem;
  //   }
  //   .font-30 {
  //     font-size: 1.25rem;
  //   }
  //   .pt5,
  //   .content {
  //     padding-top: 4.95rem;
  //   }
  //   //For All End
  //Header
  .navbar-nav {
    width: 100%;
    margin-left: 0 !important;
  }
  header .navbar-light .navbar-nav .nav-item .nav-link {
    padding: 10px;
    text-align: center;
  }
  //Header End
}
</style>