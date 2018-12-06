# 表格

<!-- <el-table class="services-table" :data="tableData" style="width: 100%">
      <el-table-column prop="serviceName" label="服务名称"></el-table-column>
      <el-table-column prop="path" label="服务目录"></el-table-column>
      <el-table-column prop="category" label="服务类别"></el-table-column>
      <el-table-column prop="status" label="服务状态"></el-table-column>
      <el-table-column prop="remark" label="备注"></el-table-column>
      <el-table-column label="操作">
        <template slot-scope="{ $index, row }">
          <el-button size="mini" @click="handleEdit($index, row)">编辑</el-button>
          <el-button size="mini" type="danger" @click="handleDelete($index, row)">删除</el-button>
        </template>
      </el-table-column>
    </el-table> -->

# dialog

    <ServiceAddDialog :isDialogShow.sync="isDialogShow"/>
