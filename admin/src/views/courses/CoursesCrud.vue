<template>
  <div>
    <avue-crud
      v-if="option.column"
      :data="data.data"
      :option="option"
      @row-save="create"
      @row-update="update"
      @row-del="remove"
    ></avue-crud>
  </div>
</template>

<script>
import { Component, Vue } from 'vue-property-decorator'
@Component({})
export default class CoursesList extends Vue {
  data = {}
  option = {}

  async fetchOption() {
    const res = await this.$http.get('courses/option')
    this.option = res.data
  }
  async fetch() {
    const res = await this.$http.get('courses')
    this.data = res.data
  }

  async create(row, done, loading) {
    await this.$http.post(`courses`, row)
    this.$message.success('创建成功')
    this.fetch()
    done()
  }

  async update(row, index, done, loading) {
    // 解决 mongoose 数据库插入 $index 报错问题
    const data = JSON.parse(JSON.stringify(row))
    delete data.$index
    await this.$http.put(`courses/${row._id}`, data)
    this.$message.success('更新成功')
    this.fetch()
    done()
  }

  async remove(row) {
    try {
      await this.$confirm('是否确认删除')
    } catch (e) {
      return
    }
    await this.$http.delete(`courses/${row._id}`)
    this.$message.success('删除成功')
    this.fetch()
  }
  created() {
    this.fetchOption()
    this.fetch()
  }
}
</script>
