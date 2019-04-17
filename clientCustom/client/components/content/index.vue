<template>
  <!-- Content Import  -->
  <div>
    <!-- vision วิสัยทัศน์  Default In Page Home-->
    <!-- <Vision/> -->

    <!-- news ข่าวประกาศ / ภาพกิจกรรม -->
    <News/>

    <!-- Course หลักสูตร -->
    <Course/>

    <!-- computer information ข้อมูลห้องเรียนและเครื่องคอมพิวเตอร์ -->
    <ComputerInformation/>

    <!-- Teacher Information ข้อมูลอาจารย์ -->
    <TeacherInformation/>

    <!-- Download เอกสาร -->
    <Download/>

    <!-- Location Map & panpage -->
    <LocationAndPanpage/>
    
  </div>
</template>

<script>
import Vision from "~/components/content/vision.vue"
import News from "~/components/content/news.vue"
import Course from "~/components/content/course.vue"
import ComputerInformation from "~/components/content/computer_information.vue"
import TeacherInformation from "~/components/content/teacher_information.vue"
import Download from "~/components/content/download.vue"
import LocationAndPanpage from "~/components/content/location_and_panpage.vue"


export default {
  components: {
    Vision,
    News,
    Course,
    ComputerInformation,
    TeacherInformation,
    Download,
    LocationAndPanpage
  }
};
</script>

<style scoped>
</style>