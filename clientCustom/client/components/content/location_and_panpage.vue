<template>
  <!--Google map-->
  <div class="container">
    <div id="map-container-google-1" class="z-depth-1-half map-container" style="height: 500px">
      <iframe
        src="https://maps.google.com/maps?q=manhatan&t=&z=13&ie=UTF8&iwloc=&output=embed"
        frameborder="0"
        style="border:0"
        allowfullscreen
      ></iframe>
    </div>
  </div>
  <!--Google Maps-->
</template>

<script>
export default {};
</script>

<style scoped>
.map-container {
  overflow: hidden;
  padding-bottom: 56.25%;
  position: relative;
  height: 0;
}
.map-container iframe {
  left: 0;
  top: 0;
  height: 100%;
  width: 100%;
  position: absolute;
}
</style>