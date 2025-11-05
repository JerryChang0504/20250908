<script setup>
import axios from 'axios'
import { reactive } from 'vue'

const columns = reactive([
  {
    propval: 'id',
    label: 'ID',
  },
  {
    propval: 'name',
    label: 'Name',
  },
  {
    propval: 'product_price',
    label: 'Price',
  },
  {
    propval: 'description',
    label: 'Description',
    width: 200,
  },
  {
    propval: 'image',
    label: 'Image',
  },
])

const tableData = reactive([])

let apiService = axios.create({
  baseURL: 'http://localhost:8080',
})

const queryProduct = () => {
  // GET
  apiService
    .get('/api/queryAllProducts')
    .then((response) => {
      Object.assign(tableData, response.data)
    })
    .catch((error) => console.error(error))
}

const handleEdit = (index, row) => {
  console.log(index, row)
}
const handleDelete = (index, row) => {
  console.log(index, row)
  apiService
    .delete('/api/deleteProduct/' + row.id)
    .then((response) => {
      console.log(response)
    })
    .catch((error) => console.error(error))
  queryProduct()
}
</script>

<template>
  <div>
    <el-table :data="tableData" style="width: 100%">
      <el-table-column
        v-for="(column, index) in columns"
        :prop="column.propval"
        :label="column.label"
        :key="index"
        :width="column.width"
      />
      <el-table-column label="Operations">
        <template #default="scope">
          <el-button size="small" @click="handleEdit(scope.$index, scope.row)"> Edit </el-button>
          <el-button size="small" type="danger" @click="handleDelete(scope.$index, scope.row)">
            Delete
          </el-button>
        </template>
      </el-table-column>
    </el-table>

    <el-button type="primary" @click="queryProduct()">查詢產品</el-button>
  </div>
</template>

<style scoped></style>
