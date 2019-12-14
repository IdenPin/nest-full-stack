<template>
  <h3>课程列表</h3>
</template>

<script>
import { Component, Vue } from 'vue-property-decorator'
@Component({})
export default class CoursesList extends Vue {
  data = {}
  async fetch() {
    const res = await this.$http.get('courses')
    this.data = res.data
  }
  created() {
    this.fetch()
  }
}
</script>
