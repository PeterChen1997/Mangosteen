<template>
  <div class="services">
    <ViewsTitleInfo title="Services 服务列表" detail="管理当前已部署的web服务，可对web服务的运行状态与参数进行配置"/>

    <div class="services-control">
      <el-button type="primary" size="small" @click="() => this.isDialogShow = true">新增服务</el-button>
    </div>

    <el-table class="services-table" :data="tableData" style="width: 100%">
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
    </el-table>

    <ServiceAddDialog v-show="isDialogShow"/>
  </div>
</template>

<script>
import servicesData from "@/mock/servicesData";
import ViewsTitleInfo from "@/components/ViewsTitleInfo";
import ServiceAddDialog from '@/components/ServiceAddDialog'

export default {
  name: "services",
  components: {
    ViewsTitleInfo,
    ServiceAddDialog
  },
  data() {
    return {
      tableData: servicesData,
      isDialogShow: false
    };
  },
  methods: {
    addService() {

    },
    handleEdit(index, row) {
      console.log(index, row);
    },
    handleDelete(index, row) {
      console.log(index, row);
    }
  }
};
</script>

<style>
.services-info h2 {
  font-weight: 400;
  color: #1f2f3d;
  font-size: 28px;
  margin: 0;
}

.services-info p {
  font-size: 14px;
  color: #5e6d82;
  line-height: 1.5em;
}

.services-table {
  margin-top: 10px;
}
</style>
