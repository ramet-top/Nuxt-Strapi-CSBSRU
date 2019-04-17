<template>
  <div class="container text-center mt-2 mb-2">
    <button class="btn btn-outline-black" href="#">
      Download File
      <i class="fas fa-download ml-2"></i>
    </button>
    <table class="table table-striped table-responsive-md btn-table">
      <thead>
        <tr>
          <th>
            <i class="far fa-gem mr-2 grey-text" aria-hidden="true"/>#
          </th>
          <th>
            <i class="fas fa-book mr-2 grey-text" aria-hidden="true"/>File Name
          </th>
          <th>
            <i class="fas fa-leaf mr-2 teal-text" aria-hidden="true"/>Status
          </th>
          <th>
            <i class="fas fa-graduation-cap mr-2 grey-text" aria-hidden="true"/>use often
          </th>
          <th>
            <i class="fas fa-gift mr-2 grey-text" aria-hidden="true"/>
            Download Now
          </th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <th scope="row">1</th>
          <td>File CP1</td>
          <td>Otto</td>
          <td>Otto</td>
          <td>
            <button type="button" class="btn btn-outline-primary btn-sm m-0 waves-effect">
              <i class="fas fa-cloud-download-alt mr-2"/>Download
            </button>
          </td>
        </tr>
        <tr>
          <th scope="row">2</th>
          <td>File CP2</td>
          <td>Otto</td>
          <td>@fat</td>
          <td>
            <button type="button" class="btn btn-outline-primary btn-sm m-0 waves-effect">
              <i class="fas fa-cloud-download-alt mr-2"/>Download
            </button>
          </td>
        </tr>
        <tr>
          <th scope="row">3</th>
          <td>File CP3</td>
          <td>Otto</td>
          <td>the Bird</td>
          <td>
            <button type="button" class="btn btn-outline-primary btn-sm m-0 waves-effect">
              <i class="fas fa-cloud-download-alt mr-2"/>Download
            </button>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
</style>