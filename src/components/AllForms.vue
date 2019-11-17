<template>
  <div class="container">
    <div class="column">
      <b-form name="form" @submit="onSubmit()" @reset="onReset()" v-if="show">
        <!-- 1st section personmal detail -->
        <div class="card inception">
          <div class="tab-heading inception">
            <h3 class="text">Personal Details</h3>
          </div>
          <!--  -->
          <div class="text-left main-form-section mx-5">
            <!-- first name -->
            <b-form-group label="First Name:" label-for="firstName">
              <b-form-input
                id="firstName"
                v-model="form.firstName"
                type="text"
                required
                placeholder="Enter First Name"
              ></b-form-input>
              <div
                v-if="
                  $v.form.firstName.$error &&
                    !$v.form.firstName.required &&
                    removeText
                "
                class="error-txt"
              >
                first name is required
              </div>
            </b-form-group>

            <!-- middle name -->
            <b-form-group label="Middle Name:" label-for="middleName">
              <b-form-input
                id="middleName"
                type="text"
                v-model="form.middleName"
                required
                placeholder="Enter Last Name"
              ></b-form-input>
              <div
                v-if="
                  $v.form.middleName.$error &&
                    !$v.form.middleName.required &&
                    removeText
                "
                class="error-txt"
              >
                first name is required
              </div>
            </b-form-group>

            <!-- last name -->
            <b-form-group label="Last Name:" label-for="lastName">
              <b-form-input
                id="lastName"
                type="text"
                v-model="form.lastName"
                required
                placeholder="Enter Last Name"
              ></b-form-input>
              <div
                v-if="
                  $v.form.lastName.$error &&
                    !$v.form.lastName.required &&
                    removeText
                "
                class="error-txt"
              >
                first name is required
              </div>
            </b-form-group>
            <!-- gender -->
            <b-form-group label="Select Gender">
              <div class="d-flex">
                <div>
                  <b-form-radio
                    v-model="form.selectedGender"
                    name="some-radios"
                    value="A"
                    >Male</b-form-radio
                  >
                </div>
                <div class="ml-5">
                  <b-form-radio
                    v-model="form.selectedGender"
                    name="some-radios"
                    value="B"
                    >Female</b-form-radio
                  >
                </div>
              </div>
              <div
                v-if="
                  $v.form.selectedGender.$error &&
                    !$v.form.selectedGender.required &&
                    removeText
                "
                class="error-txt"
              >
                gender is required
              </div>
            </b-form-group>
            <!-- email -->
            <b-form-group label="Email" label-for="email">
              <b-form-input
                id="email"
                type="email"
                v-model="form.email"
                required
                placeholder="Enter Email"
              ></b-form-input>
              <div
                v-if="
                  $v.form.email.$error && !$v.form.email.required && removeText
                "
                class="error-txt"
              >
                gmail is required
              </div>
            </b-form-group>
            <!-- password -->
            <b-form-group label="Password" label-for="password">
              <b-form-input
                id="password"
                type="password"
                v-model="form.password"
                required
                placeholder="Enter Password"
              ></b-form-input>
              <div
                v-if="
                  $v.form.password.$error &&
                    !$v.form.password.required &&
                    removeText
                "
                class="error-txt"
              >
                password is required
              </div>
            </b-form-group>
            <!-- date -->
            <b-form-group label="age" label-for="age">
              <div class="d-flex w-50">
                <div class="w-50">
                  <b-form-group
                    class
                    id="calendar"
                    name="calendar"
                    label="Date Of Birth"
                    required
                  >
                    <date-picker
                      v-model="form.dob"
                      v-on:change="selectDate(form.dob)"
                      type="number"
                      :lang="'en'"
                      :first-day-of-week="1"
                      :format="'YYYY-MM-DD'"
                      class
                      :placeholder="'Select Date'"
                    ></date-picker>
                  </b-form-group>
                </div>
                <div class="ml-4 w-50">
                  <b-form-group label="age" label-for="age">
                    <b-form-input
                      id="age"
                      type="text"
                      v-model="form.age"
                      required
                      placeholder="age"
                    ></b-form-input>
                  </b-form-group>
                </div>
              </div>
              <div
                v-if="$v.form.dob.$error && !$v.form.dob.required && removeText"
                class="error-txt"
              >
                first select date
              </div>
            </b-form-group>
            <!-- mobile no -->
            <b-form-group label="Mobile No" label-for="mobileNO">
              <!-- <b-form-input
                id="mobileNO"
                type="number"
                v-model="form.mobileNO"
                required
                placeholder="Enter Mobile no  "
              ></b-form-input>-->
              <vue-tel-input
                id="mobileNO"
                type="number"
                v-model="form.mobileNO"
                required
                placeholder="Enter Mobile no  "
                class="mask-input"
              ></vue-tel-input>
              <div
                v-if="
                  $v.form.mobileNO.$error &&
                    !$v.form.mobileNO.required &&
                    removeText
                "
                class="error-txt"
              >
                mobile no is required
              </div>
            </b-form-group>

            <!-- subnit and reset button -->
            <!-- <div>
              <b-button type="submit" v-on:click="onSubmit(form)" to="#" variant="primary">Submit</b-button>
              <b-button class="ml-4" type="reset" variant="danger">Reset</b-button>
            </div>-->
          </div>
        </div>

        <!-- 2nd section file upload -->
        <div class="card inception">
          <div class="tab-heading inception">
            <h3 class="text">Upload Documents</h3>
          </div>
          <div class="text-left main-form-section mx-5">
            <!-- upload file with input box -->
            <b-form-group
              label="* Upload School ID Card or Report Card:"
              label-for="file"
            >
              <b-form-file
                class="w-50"
                v-model="form.file"
                :state="Boolean(file)"
                placeholder="Choose a file or drop it here..."
                drop-placeholder="Drop file here..."
              ></b-form-file>
              <div
                v-if="
                  $v.form.file.$error && !$v.form.file.required && removeText
                "
                class="error-txt"
              >
                select file is required
              </div>
              <div class="mt-3">
                Selected file: {{ form.file ? form.file.name : "" }}
              </div>
            </b-form-group>
            <!-- uoload file with button  -->
            <b-form-group
              label="*Upload Photograph:"
              label-for="*Upload Photograph:"
            >
              <b-form-file
                v-model="form.file2"
                class="mt-3"
                plain
              ></b-form-file>
              <div
                v-if="
                  $v.form.file2.$error && !$v.form.file2.required && removeText
                "
                class="error-txt"
              >
                select file is required
              </div>
              <div class="mt-3">
                Selected file: {{ form.file2 ? form.file2.name : "" }}
              </div>
            </b-form-group>
            <!-- select aadhar card field -->
            <b-form-group
              label=" *Upload Age Proof:"
              label-for="*Upload Age Proof:"
            >
              <b-form-select
                class="w-50"
                v-model="form.selectedAge"
                :options="docOptions"
              ></b-form-select>
              <div
                v-if="
                  $v.form.selectedAge.$error &&
                    !$v.form.selectedAge.required &&
                    removeText
                "
                class="error-txt"
              >
                select file is required
              </div>
              <b-form-file class="mt-3" plain></b-form-file>
            </b-form-group>
          </div>
        </div>

        <!-- 3rd section address -->
        <div class="card inception">
          <div class="tab-heading inception">
            <h3 class="text">Additional Details</h3>
          </div>
          <div class="text-left main-form-section mx-5">
            <!-- School Name -->
            <b-form-group label="School Name:" label-for="schoolName">
              <v-select
                v-model="form.SchoolName"
                label="text"
                :options="schoolOptions"
              ></v-select>
              <div
                v-if="
                  $v.form.SchoolName.$error &&
                    !$v.form.SchoolName.required &&
                    removeText
                "
                class="error-txt"
              >
                school name is required
              </div>
            </b-form-group>
            <!--Address section  -->

            <b-form-group label="Full Address:" label-for>
              <b-form-textarea
                id="textarea"
                v-model="form.Address"
                placeholder="Enter something..."
                rows="3"
                max-rows="6"
              ></b-form-textarea>
              <div
                v-if="
                  $v.form.Address.$error &&
                    !$v.form.Address.required &&
                    removeText
                "
                class="error-txt"
              >
                Address is required
              </div>
            </b-form-group>
            <!-- state input -->
            <b-form-group label="State" label-for="state">
              <v-select
                v-model="form.state"
                label="text"
                :options="stateOptions"
              ></v-select>
              <div
                v-if="
                  $v.form.state.$error && !$v.form.state.required && removeText
                "
                class="error-txt"
              >
                State is required
              </div>
            </b-form-group>
            <!-- city input -->
            <b-form-group label="City" label-for="city">
              <multiselect
                v-model="form.city"
                tag-placeholder="Add this as new tag"
                placeholder="Search or add a tag"
                label="name"
                track-by="code"
                class="w-50"
                :options="options"
                :multiple="true"
                :taggable="true"
                @tag="addTag"
              ></multiselect>
              <div
                v-if="
                  $v.form.city.$error && !$v.form.city.required && removeText
                "
                class="error-txt"
              >
                State is required
              </div>
            </b-form-group>
            <!-- pin code  -->
            <b-form-group label="Pin Code:" label-for="pinCode">
              <the-mask
                id="pinCode"
                v-model="form.pinCode"
                class="mask-input"
                mask="#######"
                type="text"
                masked="false"
                required
                placeholder="Enter Pin Code"
              ></the-mask>
              <div
                v-if="
                  $v.form.pinCode.$error &&
                    !$v.form.pinCode.required &&
                    removeText
                "
                class="error-txt"
              >
                pin code is required
              </div>
            </b-form-group>
          </div>
        </div>

        <!-- 4th section Bank Details -->
        <div class="card inception">
          <div class="tab-heading inception">
            <h3 class="text">Bank Details</h3>
          </div>
          <div class="text-left main-form-section mx-5">
            <!-- Bank Name -->
            <b-form-group label="Bank Name:" label-for="bankName">
              <b-form-input
                id="pinCode"
                v-model="form.bankName"
                type="text"
                required
                placeholder="Enter Bank Name"
              ></b-form-input>
              <div
                v-if="
                  $v.form.bankName.$error &&
                    !$v.form.bankName.required &&
                    removeText
                "
                class="error-txt"
              >
                bank name is required
              </div>
            </b-form-group>
            <!-- Branch Name -->
            <b-form-group label="Branch Name:" label-for="branchName">
              <b-form-input
                id="branchName"
                v-model="form.branchName"
                type="text"
                required
                placeholder="Enter Branch Name"
              ></b-form-input>
              <div
                v-if="
                  $v.form.branchName.$error &&
                    !$v.form.branchName.required &&
                    removeText
                "
                class="error-txt"
              >
                branch name is required
              </div>
            </b-form-group>
            <!-- Branch Number  -->
            <b-form-group label="Branch Number:" label-for="branchNumber">
              <the-mask
                id="branchNumber"
                v-model="form.branchNumber"
                class="mask-input"
                mask="######"
                type="text"
                masked="false"
                required
                placeholder="Enter Branch Number"
              ></the-mask>
              <div
                v-if="
                  $v.form.branchNumber.$error &&
                    !$v.form.branchNumber.required &&
                    removeText
                "
                class="error-txt"
              >
                branch name is required
              </div>
            </b-form-group>
            <!-- Branch Address -->
            <b-form-group label="Branch Address:" label-for="branchAddress">
              <b-form-textarea
                id="branchAddress"
                v-model="form.branchAddress"
                type="text"
                required
                placeholder="Enter Branch Number"
              ></b-form-textarea>
              <div
                v-if="
                  $v.form.branchAddress.$error &&
                    !$v.form.branchAddress.required &&
                    removeText
                "
                class="error-txt"
              >
                branch name is required
              </div>
            </b-form-group>
            <!-- Branch Address -->

            <b-form-group label="Account Type:">
              <b-form-radio-group
                id="radio-group-2"
                v-model="form.acoountType"
                required
                name="flavour-2"
              >
                <b-form-radio value="Saving">Saving</b-form-radio>
                <b-form-radio value="Current">Current</b-form-radio>
                <b-form-radio value="Other">Other</b-form-radio>
                <b-form-radio value="Unknown">Unknown</b-form-radio>
              </b-form-radio-group>
            </b-form-group>

            <div
              v-if="
                $v.form.acoountType.$error &&
                  !$v.form.acoountType.required &&
                  removeText
              "
              class="error-txt"
            >
              select one is required
            </div>
          </div>
        </div>

        <!-- 5th section card details -->
        <div class="card inception">
          <div class="tab-heading inception">
            <h3 class="text">Card Details</h3>
          </div>
          <div class="text-left main-form-section mx-5">
            <!-- Holder Name -->
            <b-form-group label="First Name:" label-for="firstName">
              <b-form-input
                id="firstName"
                v-model="form.firstName"
                type="text"
                required
                placeholder="Enter First Name"
              ></b-form-input>
              <div
                v-if="
                  $v.form.firstName.$error &&
                    !$v.form.firstName.required &&
                    removeText
                "
                class="error-txt"
              >
                first name is required
              </div>
            </b-form-group>

            <!--  Card Number-->
            <b-form-group label="Card Number:" label-for="cardNumber">
              <the-mask
                id="cardNumber"
                v-model="form.cardNumber"
                type="text"
                required
                placeholder="Enter Card Number"
                class="mask-input"
                :mask="['#### #### #### ####']"
              ></the-mask>

              <div
                v-if="
                  $v.form.cardNumber.$error &&
                    !$v.form.cardNumber.required &&
                    removeText
                "
                class="error-txt"
              >
                bank name is required
              </div>
            </b-form-group>
            <!-- EXPIRATION DATE -->
            <div class="d-flex">
              <div>
                <b-form-group
                  label="Expiration Date:"
                  label-for="expirationDate"
                >
                  <the-mask
                    id="cardNumber"
                    v-model="form.expirationDate"
                    class="w-100 mask-input"
                    mask="##/##"
                    type="text"
                    masked="false"
                    required
                    placeholder="mm/yy"
                  ></the-mask>
                  <div
                    v-if="
                      $v.form.expirationDate.$error &&
                        !$v.form.expirationDate.required &&
                        removeText
                    "
                    class="error-txt"
                  >
                    Expiration Date is required
                  </div>
                </b-form-group>
              </div>
              <!-- CVV code -->
              <div class="ml-5">
                <b-form-group label="CVV Code:" label-for="cvv">
                  <the-mask
                    id="cvv"
                    v-model="form.cvv"
                    class="w-100 mask-input"
                    mask="###"
                    type="password"
                    masked="false"
                    required
                    placeholder="***"
                  ></the-mask>
                  <div
                    v-if="
                      $v.form.cvv.$error && !$v.form.cvv.required && removeText
                    "
                    class="error-txt"
                  >
                    CVV is required
                  </div>
                </b-form-group>
              </div>
            </div>
          </div>
        </div>
        <!-- 6th section terms and condition -->
        <div class="card inception">
          <div class="tab-heading inception">
            <h3 class="text">Terms & Conditions</h3>
          </div>
          <div class="text-left main-form-section mx-5">
            <!-- term checkbox -->
            <b-form-group
              label="Please consult our Privacy Policy , which includes important information"
            >
              <b-form-checkbox-group
                required
                placeholder="Enter First Name"
                class="font-size-sm m-4"
                v-model="form.condition"
                :options="conditionOptions"
                stacked
              ></b-form-checkbox-group>
              <div
                v-if="
                  $v.form.condition.$error &&
                    !$v.form.condition.required &&
                    removeText
                "
                class="error-txt"
              >
                select all required
              </div>
            </b-form-group>
          </div>
        </div>

        <!-- submit and reset button -->
        <div class="mb-5 text-center">
          <b-button
            type="submit"
            v-on:click="onSubmit(form)"
            to="#"
            variant="primary"
            >Submit</b-button
          >
          <b-button
            class="ml-4"
            type="reset"
            v-on:click="ResetBtn()"
            variant="danger"
            >Reset</b-button
          >
        </div>
      </b-form>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import { required } from "vuelidate/lib/validators";
import DatePicker from "vue2-datepicker";
import { Multiselect } from "vue-multiselect";
import { TheMask } from "vue-the-mask";
import { VueTelInput } from "vue-tel-input";
import moment from "moment";
export default {
  components: { DatePicker, Multiselect, TheMask, VueTelInput },
  data() {
    return {
      options: [
        { name: "thane", code: "vu" },
        { name: "kanjur", code: "45" },
        { name: "bhandup", code: "55" },
        { name: "nahur", code: "53" },
        { name: "mulund", code: "12" },
        { name: "badlapur", code: "12" },
        { name: "diva", code: "22" }
      ],
      //
      show: true,
      errors: [],
      bootstrapBtnPromise: "",
      submitStatus: "true",
      removeText: "true",
      // data of document type
      docOptions: [
        { value: "", text: "Select Documents" },
        { value: "a", text: "Aadhar Card" },
        { value: "b", text: "Pan Card" },
        { value: "c", text: "Passport" },
        { value: "d", text: "Driving Licence " }
      ],

      // data for term and condition

      conditionOptions: [
        {
          text: "I am informed of each of the sections of the privacy policy",
          value: "one"
        },
        {
          text: "I have read and accept the Terms and Conditions",
          value: "two"
        },
        { text: "I have read and accept the Loan Agreement", value: "three" }
      ],
      // data for school names

      schoolOptions: [
        { value: "", text: "Select School" },
        { value: "a", text: "kt vidyalaya" },
        { value: "b", text: "saraswati vidyalaya" },
        { value: "c", text: "diva vidyalaya" },
        { value: "d", text: "don bosko high school" },
        { value: "e", text: "vikas high school" },
        { value: "f", text: "jk hight school" }
      ],
      // data for state names
      stateOptions: [
        { value: "", text: "Select State" },
        { value: "a", text: "Maharashtra" },
        { value: "b", text: "Gujrat" },
        { value: "c", text: "Bihar" },
        { value: "d", text: "Rajstan" },
        { value: "e", text: "Ranchi" },
        { value: "f", text: "Madya Pradesh" }
      ],

      form: {
        firstName: "",
        middleName: "",
        lastName: "",
        selectedGender: "",
        email: "",
        password: "",
        dob: "",
        age: "",
        mobileNO: "",
        file: "",
        file2: "",
        selectedAge: "",
        SchoolName: "",
        Address: "",
        state: "",
        city: [],
        pinCode: "",
        bankName: "",
        branchName: "",
        branchNumber: "",
        branchAddress: "",
        acoountType: "",
        cardNumber: "",
        expirationDate: "",
        condition: "",
        cvv: "",
        checked: []
      },

      // date picker script
      selectedGender: "",
      value: "",
      time1: "",
      time2: "",
      time3: "",
      // custom lang
      lang: {
        days: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
        months: [
          "Jan",
          "Feb",
          "Mar",
          "Apr",
          "May",
          "Jun",
          "Jul",
          "Aug",
          "Sep",
          "Oct",
          "Nov",
          "Dec"
        ],
        pickers: [
          "next 7 days",
          // "next 30 days",
          "previous 7 days",
          "previous 30 days"
        ]
      },
      // custom range shortcuts
      shortcuts: [
        {
          text: "Today",
          onClick: () => {
            this.time3 = [new Date(), new Date()];
          }
        }
      ],

      foods: [
        { text: "Select One", value: null },
        "Carrots",
        "Beans",
        "Tomatoes",
        "Corn"
      ]
    };
  },

  validations: {
    form: {
      firstName: {
        required
      },
      lastName: {
        required
      },
      middleName: {
        required
      },
      selectedGender: {
        required
      },
      email: {
        required
      },
      password: {
        required
      },
      dob: {
        required
      },
      mobileNO: {
        required
      },
      file: {
        required
      },
      file2: {
        required
      },
      selectedAge: {
        required
      },
      SchoolName: {
        required
      },
      Address: {
        required
      },
      state: {
        required
      },
      city: {
        required
      },
      pinCode: {
        required
      },
      bankName: {
        required
      },
      branchName: {
        required
      },
      branchNumber: {
        required
      },
      branchAddress: {
        required
      },
      acoountType: {
        required
      },
      cardNumber: {
        required
      },
      expirationDate: {
        required
      },
      cvv: {
        required
      },
      condition: {
        required
      }
    }
  },

  methods: {
    addTag(newTag) {
      const tag = {
        name: newTag,
        code: newTag.substring(0, 2) + Math.floor(Math.random() * 10000000)
      };
      this.options.push(tag);
      this.value.push(tag);
    },

    ResetBtn() {
      this.removeText = false;
    },

    onSubmit() {
      this.removeText = true;
      this.$v.form.$touch();
      if (this.$v.form.$error) {
        return;
      } else {
        this.$toaster.success("Your data fill succsesfully.", {
          timeout: 3000
        });
      }
    },

    onReset() {
      // evt.preventDefault();
      // Reset our form values
      this.form.firstName = "";
      this.form.middleName = "";
      this.form.lastName = "";
      this.form.selectedGender = "";
      this.form.email = "";
      this.form.password = "";
      this.form.dob = "";
      this.form.age = "";
      this.form.mobileNO = "";
      this.form.file = "";
      this.form.Address = "";
      this.form.file2 = "";
      this.form.SchoolName = "";
      this.form.selectedAge = "";
      this.form.state = "";
      this.form.pinCode = "";
      this.form.city = [];
      this.form.bankName = "";
      this.form.branchName = "";
      this.form.branchNumber = "";
      this.form.branchAddress = "";
      this.form.acoountType = "";
      this.form.cardNumber = "";
      this.form.expirationDate = "";
      this.form.cvv = "";
      this.form.condition = "";
      this.form.checked = [];
      // Trick to reset/clear native browser form validation state
      this.show = true;
      this.$nextTick(() => {
        this.show = true;
      });
    },
    selectDate: function(value) {
      this.form.age =
        moment(new Date()).format("YYYY") - moment(value).format("YYYY");
    }
  }
};
</script>
<style lang="scss">
@import "src/assets/scss/main.scss";
.mask-input {
  background-color: transparent;
  border: 1px solid $black !important;
  display: block;
  width: 50%;
  height: calc(1.5em + 0.75rem + 2px);
  padding: 0.375rem 0.75rem;
  font-size: 1rem;
  font-weight: 400;
  line-height: 1.5;
  color: #495057;
  background-clip: padding-box;
  border-radius: 0.25rem;
}
.error-txt {
  color: $red;
}

.main-form-section {
  color: $black !important;
}

.card {
  font-size: 1.1rem;
  font-weight: 400;
  margin-left: 0px;
  margin-right: 0px;
  margin-bottom: 3rem;
  margin-top: 7rem;
  padding: 0 0 1rem 0;
  width: 100%;
  box-shadow: 0.3rem 1.3rem 2rem 2px rgba(56, 65, 56, 0.41);
  background-color: $light-white;
  p {
    margin: 0 1rem 1rem 1rem;
    color: $light-black;
    font-size: 1.2rem;
    font-weight: 300;
    &:last-child {
      margin-bottom: 0;
    }
  }
}

.tab-heading {
  font-family: "Open Sans";
  font-weight: 600;
  border-top: 0.3rem solid $sky-blue;
  margin: 0 0 1rem 0;
  color: $fg-color;
  background-color: transparent;
  display: flex;
  justify-content: flex-start;

  position: relative;
  &:before,
  &:after {
    content: "";
    display: block;
    width: 1rem;
    height: 1rem;
    background-color: transparent;
    background-image: $inverted-corner;
    background-size: contain;
    background-repeat: no-repeat;
    margin-top: -1px;
  }
  &:before {
    margin: 0 0 0 1rem;
  }
  &:after {
    transform: rotateZ(270deg);
  }
  .text {
    display: block;
    background-color: $heading-bg-color;
    padding: 0.2rem 1rem 0.5rem;
    border-color: $heading-bg-color;
    border-bottom-right-radius: 1rem;
    border-bottom-left-radius: 1rem;
    position: relative;
    box-shadow: 0.1rem 0.4rem 0.5rem -3px $box-shadow-color;
    margin-top: -1px;
    &:before,
    &:after {
      content: "";
      display: block;
      position: absolute;
      z-index: -1;
    }
    &:before {
      bottom: 0.4rem;
      right: 0.9rem;
      width: 75%;
      height: 1.6rem;
      box-shadow: 0.8rem 0.4rem 1rem -0.9px $box-shadow-color2;
      transform: rotate(6deg);
      border-bottom-right-radius: 1rem;
    }
    &:after {
      top: -0.7rem;
      right: 0.65rem;
      transform: rotate(20deg);
      content: "(";
      color: transparent;
      font-size: 1.7rem;
      font-weight: 900;
      text-shadow: 1rem 0 0.4rem $black;
    }
  }
}
</style>
