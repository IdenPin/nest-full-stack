<template>
  <div>
    <avue-crud
      v-if="option.column"
      :data="data.data"
      :option="option"
      :page="page"
      @row-save="create"
      @row-update="update"
      @row-del="remove"
      @on-load="chagePage"
      @sort-change="changeSort"
    ></avue-crud>
  </div>
</template>

<script lang="ts">
import { Component, Vue, Prop } from 'vue-property-decorator'
import dayjs from 'dayjs'
@Component({})
export default class Resource extends Vue {
  @Prop(String) resource: string
  data = {}
  option = {}
  page = {
    pageSizes: [2, 5, 10, 20, 30],
    currentPage: 1,
    total: 0,
    pageSize: 2,
    sort: {}
  }
  async fetchOption() {
    const res = await this.$http.get(`${this.resource}/option`)
    this.option = res.data
  }
  async fetch() {
    let query = {
      limit: this.page.pageSize
    }
    const res = await this.$http.get(`${this.resource}`, {
      params: {
        query: {
          limit: this.page.pageSize,
          page: this.page.currentPage,
          sort: this.page.sort
        }
      }
    })
    this.data = res.data
    this.page.total = res.data.total
  }

  chagePage(data) {
    this.page.currentPage = data.currentPage
    this.page.pageSize = data.pageSize
    this.fetch()
  }

  changeSort({ prop, order }) {
    if (!order) {
      this.page.sort = {
        [prop]: null
      }
    } else {
      this.page.sort = {
        [prop]: order === 'ascending' ? 1 : -1
      }
    }
    this.fetch()
  }

  async create(row, done, loading) {
    await this.$http.post(`${this.resource}`, row)
    this.$message.success('创建成功')
    this.fetch()
    done()
  }

  async update(row, index, done, loading) {
    // 解决 mongoose 数据库插入 $index 报错问题
    const data = JSON.parse(JSON.stringify(row))
    delete data.$index
    await this.$http.put(`${this.resource}/${row._id}`, data)
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
    await this.$http.delete(`${this.resource}/${row._id}`)
    this.$message.success('删除成功')
    this.fetch()
  }
  created() {
    this.fetchOption()
    this.fetch()
  }
}
</script>
