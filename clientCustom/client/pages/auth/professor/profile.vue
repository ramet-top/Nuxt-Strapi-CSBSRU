<template>
  <div class="container mb-3">
    <div class="text-center grey-text">
      For teachers
      <hr>
      <a href="#">
        <img
          src="https://mdbootstrap.com/img/Photos/Avatars/img%20(10).jpg"
          alt="photo profile"
          class="rounded-circle float-center mb-3"
          height="160"
          width="160"
        >
      </a>

      <h4 class="grey-text">Hello : {{ username }}</h4>
      <hr>
      <!-- <nuxt-link class="btn btn-outline-danger btn-rounded waves-effect" to="#" role="button">
        Log out
        <i class="fas fa-sign-out-alt ml-2"></i>
      </nuxt-link>-->

      <!-- Button trigger modal-->
      <button
        type="button"
        class="btn btn-outline-danger btn-rounded waves-effect"
        data-toggle="modal"
        data-target="#modalConfirmDelete"
      >
        Log out
        <i class="fas fa-sign-out-alt ml-2"></i>
      </button>

      <!--Modal: modalConfirmDelete-->
      <div
        class="modal fade"
        id="modalConfirmDelete"
        tabindex="-1"
        role="dialog"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div class="modal-dialog modal-sm modal-notify modal-danger" role="document">
          <!--Content-->
          <div class="modal-content text-center">
            <!--Header-->
            <div class="modal-header d-flex justify-content-center">
              <p class="heading">Are you sure logout?</p>
            </div>

            <!--Body-->
            <div class="modal-body">
              <i class="fas fa-times fa-4x animated rotateIn"></i>
            </div>

            <!--Footer-->
            <div class="modal-footer flex-center">
              <a href="/login" @click="logout" class="btn btn-outline-danger">Yes</a>
              <a class="btn btn-outline-info waves-effect" data-dismiss="modal">No</a>
            </div>
          </div>
          <!--/.Content-->
        </div>
      </div>
      <!--Modal: modalConfirmDelete-->
    </div>

    <ul class="nav nav-tabs nav-justified md-tabs mt-3" id="myTab" role="tablist">
      <li class="nav-item">
        <a
          class="nav-link active"
          id="home-tab"
          data-toggle="tab"
          href="#home"
          role="tab"
          aria-controls="home"
          aria-selected="true"
        >
          Home
          <i class="fab fa-accusoft ml-2"></i>
        </a>
      </li>
      <li class="nav-item">
        <a
          class="nav-link"
          id="profile-tab"
          data-toggle="tab"
          href="#profile"
          role="tab"
          aria-controls="profile"
          aria-selected="false"
        >
          Profile
          <i class="fas fa-edit ml-2"></i>
        </a>
      </li>
      <li class="nav-item">
        <a
          class="nav-link"
          id="contact-tab"
          data-toggle="tab"
          href="#contact"
          role="tab"
          aria-controls="contact"
          aria-selected="false"
        >
          Manegement
          <i class="fas fa-file-signature ml-2"></i>
        </a>
      </li>
    </ul>

    <div class="tab-content" id="myTabContent">
      <div class="tab-pane fade show active" id="home" role="tabpanel" aria-labelledby="home-tab">
        <div class="card text-center">
          <div class="card-header">Featured ทำอะไรได้</div>
          <div class="card-body">
            <h5 class="card-title">Detail</h5>
            <p
              class="card-text"
            >With supporting text below as a natural lead-in to additional content.</p>
            <a href="#!" class="btn btn-outline-info waves-effect">Go somewhere</a>
          </div>
          <div class="card-footer text-muted">2 days ago</div>
        </div>
      </div>
      <div class="tab-pane fade" id="profile" role="tabpanel" aria-labelledby="profile-tab">
        <div class="card border-primary mb-3" style="max-width: 100rem;">
          <div class="card-header">Profile Detail</div>
          <div class="card-body text-primary">
            <div class="container">
              <div
                id="mdb-panel-tab-content-loader"
                class="tab-content pt-5"
                style="display: none;"
              >
                <div class="progress primary-color-dark">
                  <div class="indeterminate"></div>
                </div>
              </div>

              <div style id="mdb-panel-tab-content" class="tab-content pt-3">
                <!--Grid row-->
                <div class="row mb-4">
                  <!--Grid column-->
                  <div class="col-md-6 mb-4">
                    <!--Card-->
                    <div class="card">
                      <div
                        id="mdb-settings-public-preloader"
                        class="checkout-preloader-container"
                        style="display: none;"
                      >
                        <div class="preloader-wrapper big active">
                          <div class="spinner-layer spinner-blue-only">
                            <div class="circle-clipper left">
                              <div class="circle"></div>
                            </div>
                            <div class="gap-patch">
                              <div class="circle"></div>
                            </div>
                            <div class="circle-clipper right">
                              <div class="circle"></div>
                            </div>
                          </div>
                        </div>
                      </div>

                      <!-- Card header -->
                      <div class="card-header">Public info</div>

                      <!--Card content-->
                      <div class="card-body">
                        <!-- Form -->
                        <form id="edit-user-form" name>
                          <!--Input Name-->
                          <input
                            value
                            type="text"
                            id="edit-first-name"
                            class="form-control mb-3"
                            placeholder="First name"
                          >

                          <!--Input Name-->
                          <input
                            value
                            type="text"
                            id="edit-last-name"
                            class="form-control mb-3"
                            placeholder="Last name"
                          >

                          <!--Input Name-->
                          <input
                            value
                            type="text"
                            id="edit-company"
                            class="form-control mb-3"
                            placeholder="Company name"
                          >

                          <!--Input Name-->
                          <input
                            value
                            type="text"
                            id="edit-position"
                            class="form-control mb-3"
                            placeholder="Position"
                          >

                          <!--Input Name-->
                          <input
                            value
                            type="text"
                            id="edit-website"
                            class="form-control mb-3"
                            placeholder="Company website"
                          >

                          <!--Input Name-->
                          <input
                            value
                            type="text"
                            id="edit-country"
                            class="form-control mb-3"
                            placeholder="Country"
                          >

                          <!--Input Name-->
                          <input
                            value
                            type="text"
                            id="edit-city"
                            class="form-control mb-3"
                            placeholder="City"
                          >

                          <!--Input Name-->
                          <input
                            value
                            type="text"
                            id="edit-facebook"
                            class="form-control mb-3"
                            placeholder="Facebook"
                          >

                          <!--Input Name-->
                          <input
                            value
                            type="text"
                            id="edit-twitter"
                            class="form-control mb-3"
                            placeholder="Twitter"
                          >

                          <!--Input Name-->
                          <input
                            value
                            type="text"
                            id="edit-linkedIn"
                            class="form-control mb-3"
                            placeholder="LinkeIn"
                          >

                          <!--Input Name-->
                          <input
                            value
                            type="text"
                            id="edit-dribbble"
                            class="form-control mb-3"
                            placeholder="Dribbble"
                          >

                          <!-- Textarea -->
                          <textarea></textarea>

                          <!-- Action button -->
                          <div class="text-center">
                            <button
                              id="edit-user"
                              type="submit"
                              class="btn btn-outline-info waves-effect btn-md"
                            >Save changes</button>
                          </div>
                        </form>
                        <!-- Form -->
                      </div>
                    </div>
                    <!--/.Card-->
                  </div>
                  <!--Grid column-->

                  <!--Grid column-->
                  <div class="col-md-6 mb-4">
                    <!--Card-->
                    <div class="card mb-4">
                      <div
                        id="mdb-settings-password-preloader"
                        class="checkout-preloader-container"
                        style="display: none;"
                      >
                        <div class="preloader-wrapper big active">
                          <div class="spinner-layer spinner-blue-only">
                            <div class="circle-clipper left">
                              <div class="circle"></div>
                            </div>
                            <div class="gap-patch">
                              <div class="circle"></div>
                            </div>
                            <div class="circle-clipper right">
                              <div class="circle"></div>
                            </div>
                          </div>
                        </div>
                      </div>

                      <!-- Card header -->
                      <div class="card-header">Password change</div>

                      <!--Card content-->
                      <div class="card-body">
                        <!-- Form -->
                        <form id="user-reset-password-form" name>
                          <!--Input Name-->
                          <input
                            type="password"
                            id="current_password"
                            class="form-control mb-3"
                            placeholder="Current password"
                          >

                          <!--Input Name-->
                          <input
                            type="password"
                            id="new_password"
                            class="form-control mb-3"
                            placeholder="New password"
                          >

                          <!--Input Name-->
                          <input
                            type="password"
                            id="confirm_new_password"
                            class="form-control mb-3"
                            placeholder="Confirm new password"
                          >

                          <!-- Action button -->
                          <div class="text-center">
                            <button
                              id="user-reset-password"
                              class="btn btn-md btn-outline-info waves-effect"
                            >Reset password</button>
                          </div>
                        </form>
                        <!-- Form -->
                      </div>
                    </div>
                    <!--/.Card-->
                  </div>
                  <!--Grid column-->
                </div>
                <!--Grid row-->
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="tab-pane fade" id="contact" role="tabpanel" aria-labelledby="contact-tab">
        <div class="card border-primary mb-3" style="max-width: 100rem;">
          <div class="card-header">Profile Manegement</div>
          <div class="card-body text-primary">
            <h5 class="card-title">Project (จัดการไฟล์)</h5>
            <p
              class="card-text"
            >Some quick example text to build on the panel title and make up the bulk of the panel's content.</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapMutations } from "vuex";
export default {
  middleware: ["isAuth"],
  data() {
    return {
      active: false
    };
  },
  computed: {
    username() {
      return this.$store.getters["auth/username"];
    }
  },
  methods: {
    ...mapMutations({
      logout: "auth/logout"
    }),
    mouseOver: function() {
      this.active = !this.active;
    }
  }
};
</script>

<style scoped>
</style>