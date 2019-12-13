<template>
  <div class="footer-scss footer-css pt-5 pb-3 titillium-web-semiBold">
    <div class="container">
      <div class="row justify-content-center align-items-center mb-5" hidden>
        <div class="col-lg-3 col-md-4 col-sm-6 col-12">
          <div class="text-uppercase subscribe-head">Subscribe to our newsletter</div>
        </div>
        <div class="col-lg-4 col-md-4 col-sm-6 col-12">
          <div class>
            <form name="subscriptionForm" role="form" ng-submit="saveSubscription(subscribe)">
              <div class="input-group">
                <input
                  type="email"
                  name="email"
                  ng-model="subscribe.email"
                  class="form-control change"
                  placeholder="Your e-mail address"
                />
                <div class="input-group-append">
                  <button class="btn btn-outline-secondary" type="submit">
                    <!-- <i class="fas fa-envelope"></i> -->
                    <font-awesome-icon :icon="['fas', 'envelope']" />
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
        <!-- <div class="col-lg-12 col-md-12 col-sm-12 col-12">
          <div
            class="text-center pt-1"
            ng-if="showSubscribeValidationError"
          >Fill up all the fields with valid values.</div>
          <div
            class="text-center pt-1"
            ng-if="showSubscribeError"
          >Something went wrong. Resubmit the form.</div>
        </div>-->
      </div>

      <div class="row mb-4">
        <div class="col-lg-6 col-md-6 col-sm-6 col-12">
          <div class="footerLists social-list">
            <div>Social Handles</div>
            <div class>
              <span class="mx-4 pointer">
                <a
                  href="https://www.facebook.com/Marudharcup/?eid=ARCQSlunft_nRvREDP7W59e2gb9xoGWQCcSQx76ZczTre1ZJe0ZwDz5Nu-ptHoYSoB5c7YCsHJ4PmXVN"
                  target="_blank"
                >
                  <!-- <i class="fab fa-facebook"></i> -->
                  <font-awesome-icon :icon="['fab', 'facebook-f']" />
                </a>
              </span>
              <span class="pointer">
                <a>
                  <font-awesome-icon :icon="['fab', 'instagram']" />
                </a>
              </span>
              <!-- <span class="mx-2 pointer">
              <router-link href="#" ><i class="frouter-linkfa-twitter"></i></router-link>
            </span>
            <span class="mx-2 pointer">
              <router-link href="#" >
                  <i class="fab fa-youtube"></i>
                  <font-awesome-icon :icon="['fab', 'youtube']" />
                  </router-link>
              </span>-->
            </div>
          </div>
        </div>
        <div class="col-lg-6 col-md-6 col-sm-6 col-12">
          <div class="footerLists text-right text-uppercase">
            <ul class="list-inline">
              <li class="list-inline-item mr-3 left-section">
                <ul class="list-unstyled text-left">
                  <li>
                    <router-link to="/">Home</router-link>
                  </li>
                  <li>
                    <router-link to="/about-us">About Us</router-link>
                  </li>
                  <li>
                    <router-link to="/gallery">Gallery</router-link>
                  </li>
                </ul>
              </li>
              <li class="list-inline-item right-section">
                <ul class="list-unstyled text-left">
                  <li>
                    <router-link to="/past-championship">Past Championship</router-link>
                  </li>
                  <li>
                    <router-link to="/sponsor">Sponsor</router-link>
                  </li>
                  <li>
                    <router-link to="/contact-us">Contact Us</router-link>
                  </li>
                </ul>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div class="row">
        <div class="col-md-12 col-sm-12 col-xs-12">
          <div class="footerMain text-center">
            <div class="footerLists">
              <!-- <i class="far fa-copyright"></i> -->
              <font-awesome-icon :icon="['far', 'copyright']" class="mr-1" />2019 Copyright :
              <router-link to="/">mtcmarudharcup.com</router-link>
              <!-- <span class="listSeparator">|</span> -->
            </div>
            <!-- <div class="footerLists">
            <router-link href="#">FAQs</router-link>
            </div>-->
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss">
@import "src/assets/scss/main.scss";
.footer-scss {
  background-color: $header-footer;
  font-size: $font-size-sm;
  color: $white;
}

.footer-css {
  ::placeholder {
    color: $white !important;
    opacity: 1;
  }

  :-ms-input-placeholder {
    color: $white !important;
  }

  ::-ms-input-placeholder {
    color: $white !important;
  }
  ::-webkit-input-placeholder {
    color: $white !important;
  }

  input {
    background-color: transparent;
    color: $white;
    border-color: $white;
    &:focus {
      background-color: transparent;
      color: $white;
      border-color: $white;
    }
  }
  .btn {
    &:hover {
      background-color: $white;
      .fas {
        color: $header-footer;
      }
    }
    box-shadow: none;
    border-color: $white;
  }

  .fas {
    // font-size: 40px;
    // padding: 0 3px;
    @extend .font-24;
    line-height: 0.8;
    color: $white;
  }
}

.footerMain {
  display: flex;
  justify-content: center;
}

.footerLists {
  a {
    color: $white;
    text-decoration: none;
    &:hover {
      color: $header-footer-hover;
      text-decoration: none;
      border-bottom: 2px solid rgba(229, 193, 0, 0.29);
    }
  }
  .listSeparator {
    float: right;
    margin: 0 5px;
  }
  .left-section,
  .right-section {
    vertical-align: top;
  }
}

.social-content {
  display: inline-flex;
  background-color: $header-footer-hover;
  width: 30px;
  height: 30px;
  border-radius: 100%;
  margin: 0 16px;
  .fa {
    color: $header-footer;
    line-height: 30px;
    padding: 0 10px;
    font-size: 16px;
  }
  a:hover .fa {
    background-color: lighten(#696d88, 20%); // #696d88ab;
    color: lighten(#060d38, 10%); // #060d389c;
    border-radius: 100%;
  }
  .fa-facebook {
    padding: 0 11px;
  }
  .fa-twitter {
    padding: 0 9px;
  }
  .fa-instagram {
    padding: 0 9px;
  }
}

@media only screen and (max-width: 576px) {
  //Footer
  .subscribe-head {
    text-align: center !important;
    padding-bottom: 1rem;
  }
  .social-list {
    text-align: center !important;
    padding-bottom: 1rem;
    span {
      margin-left: 0 !important;
    }
  }

  .left-section {
    margin-right: 0 !important;
  }
  .left-section,
  .right-section {
    margin-bottom: 1rem;
  }
  .left-section {
    float: left;
  }
  .right-section {
    float: right;
  }
  //Footer End
}
</style>
