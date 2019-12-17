<template>
  <div>
    <h3>课时列表</h3>
    <p>
      <el-button type="success" @click="$router.push('/courses/create')" size="small">创建课时</el-button>
    </p>
    <el-table :data="data.data" border stripe>
      <el-table-column
        v-for="(field, name) in fields"
        :prop="name"
        :key="name"
        :label="field.label"
        :width="field.width"
      ></el-table-column>
      <el-table-column label="操作" :width="200">
        <template v-slot="{ row }">
          <el-button
            type="success"
            size="small"
            @click="$router.push(`/courses/edit/${row._id}`)"
          >编辑</el-button>
          <el-button type="danger" size="small" @click="remove(row)">删除</el-button>
        </template>
      </el-table-column>
    </el-table>
  </div>
</template>

<script>
import { Component, Vue } from 'vue-property-decorator'
@Component({})
export default class CoursesList extends Vue {
  data = {}
  fields = {
    _id: { label: 'ID' },
    name: {
      label: '课时名称'
    },
    cover: {
      label: '课时封面图'
    }
  }
  async fetch() {
    const res = await this.$http.get('courses')
    this.data = res.data
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
    this.fetch()
  }
}
</script>
