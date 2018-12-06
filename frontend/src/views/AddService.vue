<template>
  <div class="add-service">
    <el-breadcrumb separator-class="el-icon-arrow-right">
      <el-breadcrumb-item :to="{ path: '/services' }">Services 服务列表</el-breadcrumb-item>
      <el-breadcrumb-item>新增服务</el-breadcrumb-item>
    </el-breadcrumb>

    <el-steps :active="currentActiveStepIndex" class="add-steps" align-center>
      <el-step title="选择项目类型" icon="el-icon-edit"></el-step>
      <el-step title="项目上传" icon="el-icon-upload"></el-step>
      <el-step title="运行参数配置" icon="el-icon-picture"></el-step>
    </el-steps>

    <div class="add-form">
      <div class="add-edit" v-if="currentActiveStepIndex === 1">
        <el-form :rules="editRules" label-width="140px" 
          label-position="right" 
          ref="serviceTypeFormModel"
          :model="serviceTypeFormModel">
          <el-form-item label="项目地址(github)" prop="addr">
            <el-input v-model="serviceTypeFormModel.addr"></el-input>
          </el-form-item>
          <el-form-item label="服务名称" prop="name">
            <el-input v-model="serviceTypeFormModel.name"></el-input>
          </el-form-item>
          <el-form-item label="服务类别" prop="type">
            <el-input v-model="serviceTypeFormModel.type"></el-input>
          </el-form-item>
        </el-form>
      </div>
      <div class="add-upload" v-else-if="currentActiveStepIndex === 2">

      </div>
      <div class="add-config" v-else></div>
    </div>

    <div class="btn-group">
      <el-button v-show="currentActiveStepIndex !== 1"
        @click="handlePreStep"
      >上一步</el-button>
      <el-button type="primary" v-show="currentActiveStepIndex !== 3"
        @click="handleNextStep"
      >下一步</el-button>
    </div>
  </div>
</template>

<script>
export default {
  name: "addService",
  data() {
    return {
      formValidateResult: false,
      currentActiveStepIndex: 1,
      serviceTypeFormModel: {
        addr: "git@github.com:PeterChen1997/Mangosteen.git",
        name: "service-test",
        type: "Node.js"
      },
      editRules: {
        addr: [
          { required: true, message: '请输入项目地址', trigger: 'blur' }
        ],
        name: [
          { required: true, message: '请输入服务名称', trigger: 'blur' },
          { min: 3, max: 15, message: '长度在 3 到 15 个字符', trigger: 'blur' }
        ],
        type: [
          { required: true, message: '请输入服务类型', trigger: 'blur' }
        ],
      }
    };
  },
  methods: {
    handleNextStep() {
      // choose handler
      this.currentActiveStepIndex === 1 
        ? this.handleServiceType()
        : this.currentActiveStepIndex === 2
          ? this.handleServiceUpload()
          : this.handleServiceConfig()

      if (this.formValidateResult) {
        this.currentActiveStepIndex += 1
      }
    },
    handlePreStep() {
      this.currentActiveStepIndex -= 1
    },
    handleServiceType() {
      // validate form
      this.$refs['serviceTypeFormModel'].validate((valid) => {
          if (valid) {
            this.formValidateResult = true

            // start download service file
            this.downloadServiceFile()
          } else {
            this.formValidateResult = false
          }
        });
    },
    downloadServiceFile() {
      // check addr

      // check space

      // download

      // check file type

      // complete
    }
  }
};
</script>


<style>
.add-steps {
  width: 50%;
  margin: 50px auto;
}

.add-edit {
  width: 50%;
  margin: auto;
}

.btn-group {
  display: flex;
  justify-content: center;
}
</style>
