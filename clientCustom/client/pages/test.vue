<template>
  <div>
    <!-- jumbo -->
    <div class="mt-2">
      <!-- Jumbotron -->
      <div class="jumbotron text-center">
        <!-- Title -->
        <h4 class="card-title h4 pb-2">
          <strong>News Update</strong>
        </h4>

        <!-- Card image -->
        <div class="view overlay my-4 container">
          <img src="https://mdbootstrap.com/img/Photos/Slides/img%20(70).jpg" class="img-fluid" alt>
          <a href="#">
            <div class="mask rgba-white-slight"></div>
          </a>
        </div>

        <h5 class="indigo-text h5 mb-4">Photography</h5>

        <p
          class="card-text"
        >Sed ut perspiciatis unde omnis iste natus sit voluptatem accusantium doloremque laudantium, totam rem aperiam.</p>

        <!-- Linkedin -->
        <a class="fa-lg p-2 m-2 li-ic">
          <i class="fab fa-linkedin-in grey-text"></i>
        </a>
        <!-- Twitter -->
        <a class="fa-lg p-2 m-2 tw-ic">
          <i class="fab fa-twitter grey-text"></i>
        </a>
        <!-- Dribbble -->
        <a class="fa-lg p-2 m-2 fb-ic">
          <i class="fab fa-facebook-f grey-text"></i>
        </a>
      </div>
      <!-- Jumbotron -->
    </div>
    <!-- jumbo -->

    <!-- Card deck -->
    <div class="container">
      <div class="card-deck">
        <!-- Card -->
        <div class="card mb-4">
          <!--Card image-->
          <div class="view overlay">
            <img
              class="card-img-top"
              src="https://mdbootstrap.com/img/Photos/Others/images/16.jpg"
              alt="Card image cap"
            >
            <a href="#!">
              <div class="mask rgba-white-slight"></div>
            </a>
          </div>

          <!--Card content-->
          <div class="card-body">
            <!--Title-->
            <h4 class="card-title">Card title</h4>
            <!--Text-->
            <p
              class="card-text"
            >Some quick example text to build on the card title and make up the bulk of the card's content.</p>
            <!-- Provides extra visual weight and identifies the primary action in a set of buttons -->
            <button type="button" class="btn btn-light-blue btn-md">Read more</button>
          </div>
        </div>
        <!-- Card -->

        <!-- Card -->
        <div class="card mb-4">
          <!--Card image-->
          <div class="view overlay">
            <img
              class="card-img-top"
              src="https://mdbootstrap.com/img/Photos/Others/images/14.jpg"
              alt="Card image cap"
            >
            <a href="#!">
              <div class="mask rgba-white-slight"></div>
            </a>
          </div>

          <!--Card content-->
          <div class="card-body">
            <!--Title-->
            <h4 class="card-title">Card title</h4>
            <!--Text-->
            <p
              class="card-text"
            >Some quick example text to build on the card title and make up the bulk of the card's content.</p>
            <!-- Provides extra visual weight and identifies the primary action in a set of buttons -->
            <button type="button" class="btn btn-light-blue btn-md">Read more</button>
          </div>
        </div>
        <!-- Card -->

        <!-- Card -->
        <div class="card mb-4">
          <!--Card image-->
          <div class="view overlay">
            <img
              class="card-img-top"
              src="https://mdbootstrap.com/img/Photos/Others/images/15.jpg"
              alt="Card image cap"
            >
            <a href="#!">
              <div class="mask rgba-white-slight"></div>
            </a>
          </div>

          <!--Card content-->
          <div class="card-body">
            <!--Title-->
            <h4 class="card-title">Card title</h4>
            <!--Text-->
            <p
              class="card-text"
            >Some quick example text to build on the card title and make up the bulk of the card's content.</p>
            <!-- Provides extra visual weight and identifies the primary action in a set of buttons -->
            <button type="button" class="btn btn-light-blue btn-md">Read more</button>
          </div>
        </div>
        <!-- Card -->
      </div>
      <nav aria-label="Page navigation example ">
        <ul class="pagination pg-blue justify-content-center">
          <li class="page-item disabled">
            <a class="page-link" tabindex="-1">Previous</a>
          </li>
          <li class="page-item">
            <a class="page-link">1</a>
          </li>
          <li class="page-item active">
            <a class="page-link">
              2
              <span class="sr-only">(current)</span>
            </a>
          </li>
          <li class="page-item">
            <a class="page-link">3</a>
          </li>
          <li class="page-item">
            <a class="page-link">Next</a>
          </li>
        </ul>
      </nav>
    </div>
    <!-- Card deck -->

    <div class="container">
      <!-- Horizontal Steppers -->
      <div class="row">
        <div class="col-md-12">
          <!-- Stepers Wrapper -->
          <ul class="stepper stepper-horizontal">
            <!-- First Step -->
            <li class="completed">
              <a href="#!">
                <span class="circle">1</span>
                <span class="label">ป.ตรี</span>
              </a>
            </li>

            <!-- Second Step -->
            <li class="active">
              <a href="#!">
                <span class="circle">2</span>
                <span class="label">ป.โท</span>
              </a>
            </li>

            <!-- Third Step -->
            <li class="active">
              <a href="#!">
                <span class="circle">3</span>
                <span class="label">ป.เอก</span>
              </a>
            </li>
          </ul>
          <!-- /.Stepers Wrapper -->
        </div>
      </div>
      <!-- /.Horizontal Steppers -->

     
    </div>
  </div>
</template>

<script>
export default {
  layout: "lay"
};
</script>

<style  scoped>
</style>