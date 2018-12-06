<template>
  <div class="services">
    <ViewsTitleInfo title="Services 服务列表" detail="管理当前已部署的web服务，可对web服务的运行状态与参数进行配置"/>

    <div class="services-control">
      <el-button type="primary" size="small" @click="handleAddService">新增服务</el-button>
    </div>

    <el-row :gutter="12">
      <el-col :span="8" v-for="service in tableData" :key="service.index" class="card">
        <el-card :body-style="getCardBodyStyleObj(service)" shadow="hover">
          <img class="card-img" src="@/assets/icon-logo.png">
          <div class="card-desc">
            <span class="card-title">{{service.serviceName}}</span>
            <span :class="service.status">{{service.status}}</span>
          </div>
        </el-card>
      </el-col>
    </el-row>

  </div>
</template>

<script>
import servicesData from "@/mock/servicesData";
import ViewsTitleInfo from "@/components/ViewsTitleInfo";
import { mapMutations } from 'vuex'

export default {
  name: "services",
  components: {
    ViewsTitleInfo,
  },
  data() {
    return {
      tableData: servicesData,
    };
  },
  methods: {
    ...mapMutations(['changeAsideOpenStatus']),
    addService() {},
    handleEdit(index, row) {
      console.log(index, row);
    },
    handleDelete(index, row) {
      console.log(index, row);
    },
    handleAddService() {
      this.changeAsideOpenStatus(false)
      this.$router.push({ path: '/services/addService' })
    },
    getCardBodyStyleObj(service) {
      const borderColor = service.status === 'running'
          ? '#67C23A'
          : service.status === 'stopped'
            ? '#909399'
            : '#F56C6C'

      return {
        display: 'flex',
        cursor: 'pointer',
        border: "1px solid " + borderColor
      }
    }
  }
};
</script>

<style lang="less">
.services-info h2 {
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

.card {
  margin-top: 20px;
}

.card-img {
  height: 100px;
}

.card-body {
  display: flex;
  flex-direction: row;
}

.card-desc {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 100%;
  text-align: center;

  .error {
    color: #f56c6c;
  }
  .running {
    color: #67c23a;
  }
  .stopped {
    color: #909399;
  }
}

.card-title {
  font-size: 22px;
  padding-bottom: 10px;
}
</style>
