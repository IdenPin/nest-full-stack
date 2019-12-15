<template>
  <div>
    <h3>{{ isNew ? "创建" : "编辑" }}课程</h3>
    <ele-form :form-data="data" :form-desc="fields" :request-fn="submit"></ele-form>
  </div>
</template>

<script lang="ts">
import { Component, Vue, Prop } from 'vue-property-decorator'
@Component({})
export default class CoursesList extends Vue {
  @Prop(String) id!: string

  data = {}
  fields = {
    name: {
      label: '课程名称',
      type: 'input'
    },
    cover: {
      label: '课程封面图',
      type: 'input'
    }
  }

  get isNew() {
    return !this.id
  }

  async submit(data) {
    this.data = {}
    const url = this.isNew ? 'courses' : `course/${this.id}`
    const methods = this.isNew ? 'post' : 'put'
    await this.$http[methods](url, data)
    this.$message.success('保存成功')
    this.$router.go(-1)
  }

  async fetch() {
    const res = await this.$http.get(`courses/${this.id}`)
    this.data = res.data
  }

  created() {
    !this.isNew && this.fetch()
  }
}
</script>
