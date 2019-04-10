<template>
  <!-- Content Import  -->
  <div>
    <!-- vision วิสัยทัศน์ -->
    <Vision/>

    <!-- news ข่าวประกาศ / ภาพกิจกรรม -->
    <News/>

    <!-- course หลักสูตร -->

    <!-- Classroom and computer information ข้อมูลห้องเรียนและเครื่องคอมพิวเตอร์ -->

    <!-- Teacher Information ข้อมูลอาจารย์ -->

    <!-- Download เอกสาร -->

    <!-- Location Map & panpage -->

    
  </div>
</template>

<script>
import Vision from "~/components/content/vision.vue";
import News from "~/components/content/news.vue";

export default {
  components: {
    Vision,
    News
  }
};
</script>

<style scoped>
</style>