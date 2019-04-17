<template>
  <div class="row mt-5 text-left">
    <!--Grid column-->
    <div class="col-lg-5 col-md-6 ml-auto mb-4">
      <section class="form-elegant">
        <!--Form without header-->
        <div class="card">
          <div class="card-body mx-4">
            <!--Header-->
            <div class="text-center">
              <h3 class="dark-grey-text mb-5">
                <strong>Sign in</strong>
              </h3>
            </div>

            <!--Body-->
            <div class="md-form">
              <input type="text" id="Form-email1" class="form-control">
              <label for="Form-email1">Your email</label>
            </div>

            <div class="md-form pb-3">
              <input type="password" id="Form-pass1" class="form-control">
              <label for="Form-pass1">Your password</label>
              <p class="font-small blue-text d-flex justify-content-end">
                Forgot
                <a href="#" class="blue-text ml-1">Password?</a>
              </p>
            </div>

            <div class="text-center mb-3">
              <button
                type="button"
                class="btn blue-gradient btn-block btn-rounded z-depth-1a waves-effect waves-light"
              >Sign in</button>
            </div>
            <p
              class="font-small dark-grey-text text-right d-flex justify-content-center mb-3 pt-2"
            >or Sign in with:</p>

            <div class="row my-3 d-flex justify-content-center">
              <!--Facebook-->
              <button
                type="button"
                class="btn btn-white btn-rounded mr-md-3 z-depth-1a waves-effect waves-light"
              >
                <i class="fab fa-facebook-f blue-text text-center"></i>
              </button>
              <!--Twitter-->
              <button
                type="button"
                class="btn btn-white btn-rounded mr-md-3 z-depth-1a waves-effect waves-light"
              >
                <i class="fab fa-twitter blue-text"></i>
              </button>
              <!--Google +-->
              <button
                type="button"
                class="btn btn-white btn-rounded z-depth-1a waves-effect waves-light"
              >
                <i class="fab fa-google-plus-g blue-text"></i>
              </button>
            </div>
          </div>

          <!--Footer-->
          <div class="modal-footer mx-5 pt-3 mb-1">
            <p class="font-small grey-text d-flex justify-content-end">
              Not a member?
              <a href="#" class="blue-text ml-1">Sign Up</a>
            </p>
          </div>
        </div>
        <!--/Form without header-->
      </section>
    </div>
    <!--Grid column-->

    <!--Grid column-->
    <div class="col-lg-5 col-md-6 mr-auto mb-4">
      <!--Section: Live preview-->
      <section class="form-dark">
        <!--Form without header-->
        <div
          class="card card-image"
          style="background-image: url('https://mdbootstrap.com/img/Photos/Others/pricing-table7.jpg')"
        >
          <div class="text-white rgba-stylish-strong py-5 px-5 z-depth-4">
            <!--Header-->
            <div class="text-center">
              <h3 class="white-text mb-5 mt-4 font-weight-bold">
                <strong>SIGN</strong>
                <a class="green-text font-weight-bold">
                  <strong>UP</strong>
                </a>
              </h3>
            </div>

            <!--Body-->
            <div class="md-form">
              <input type="text" id="Form-email5" class="form-control white-text">
              <label for="Form-email5">Your email</label>
            </div>

            <div class="md-form pb-3">
              <input type="password" id="Form-pass5" class="form-control white-text">
              <label for="Form-pass5">Your password</label>
              <div class="form-check">
                <input class="form-check-input" type="checkbox" value id="defaultCheck17">
                <label class="form-check-label white-text" for="defaultCheck17">
                  Accept the
                  <a href="#" class="green-text font-weight-bold">Terms and Conditions</a>
                </label>
              </div>
            </div>

            <!--Grid row-->
            <div class="row d-flex align-items-center mb-4">
              <!--Grid column-->
              <div class="text-center mb-3 col-md-12">
                <button
                  type="button"
                  class="btn btn-success btn-block btn-rounded z-depth-1 waves-effect waves-light"
                >Sign in</button>
              </div>
              <!--Grid column-->
            </div>
            <!--Grid row-->

            <!--Grid column-->
            <div class="col-md-12">
              <p class="font-small white-text d-flex justify-content-end">
                Have an account?
                <a href="#" class="green-text ml-1 font-weight-bold">Log in</a>
              </p>
            </div>
            <!--Grid column-->
          </div>
        </div>
        <!--/Form without header-->
      </section>
      <!--Section: Live preview-->
    </div>
    <!--Grid column-->
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
</style>