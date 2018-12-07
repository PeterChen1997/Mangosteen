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
      <div class="add-item edit" v-if="currentActiveStepIndex === 1">
        <el-form
          :rules="editRules"
          label-width="140px"
          label-position="right"
          ref="serviceTypeFormModel"
          :model="serviceTypeFormModel"
        >
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
      <div class="add-item upload" v-else-if="currentActiveStepIndex === 2">
        <div class="upload-progress">
          <!-- TODO: 动画采用canvas绘制 -->
          <el-progress type="circle" :percentage="downloadPercentage" :status="downloadStatus"></el-progress>
          <p>Downloading</p>
        </div>
        <!-- <div class="deploy-progress">
          <div class="deploy-step" v-for="deployStep in deploySteps" :key="deployStep.index">
            <i :class="deployStep.icon"></i>
            <span>{{deployStep.title}}</span>
          </div>
        </div>-->
      </div>
      <div class="add-item config" v-else></div>
    </div>

    <div class="btn-group">
      <el-button v-show="currentActiveStepIndex !== 1" @click="handlePreStep">上一步</el-button>
      <el-button type="primary" v-show="currentActiveStepIndex !== 3" @click="handleNextStep">下一步</el-button>
    </div>
  </div>
</template>

<script>
import { Request } from "@/utils/request.js";
import URL_COLLECTION from "../utils/url.js";

export default {
  name: "addService",
  data() {
    return {
      timerId: "",
      formValidateResult: false,
      currentActiveStepIndex: 2,
      serviceTypeFormModel: {
        addr: "https://codeload.github.com/nodegit/nodegit/zip/master",
        name: "service-test",
        type: "Node.js"
      },
      editRules: {
        addr: [{ required: true, message: "请输入项目地址", trigger: "blur" }],
        name: [
          { required: true, message: "请输入服务名称", trigger: "blur" },
          { min: 3, max: 15, message: "长度在 3 到 15 个字符", trigger: "blur" }
        ],
        type: [{ required: true, message: "请输入服务类型", trigger: "blur" }]
      },
      downloadPercentage: 50,
      downloadStatus: null,
      deploySteps: [
        { icon: "el-icon-loading", title: "服务文件完备性检查中" },
        { icon: "el-icon-time", title: "服务文件合法性检查中" },
        { icon: "el-icon-time", title: "服务部署中" }
      ]
    };
  },
  mounted() {
    this.serviceDownload();
  },
  methods: {
    handleNextStep() {
      // choose handler
      this.currentActiveStepIndex === 1
        ? this.handleServiceType()
        : this.currentActiveStepIndex === 2
        ? this.handleServiceDownload()
        : this.handleServiceConfig();

      if (this.formValidateResult) {
        this.currentActiveStepIndex += 1;
      }
    },
    handlePreStep() {
      this.currentActiveStepIndex -= 1;
    },
    handleServiceType() {
      // validate form
      this.$refs["serviceTypeFormModel"].validate(valid => {
        if (valid) {
          this.formValidateResult = true;

          // start download service file
          this.serviceDownload();
        } else {
          this.formValidateResult = false;
        }
      });
    },
    serviceDownload() {
      const handleRes = (res) => {
        console.log(res)
        if (res instanceof Error) {
          this.downloadStatus = 'exception'
        } else {
          
        }
      }

      console.log("start download");
      // start comunicate to server

      Request.get(URL_COLLECTION["DOWNLOAD_SERVICE"], this.serviceTypeFormModel, handleRes)
      // this.timerId = setInterval(
      //   () => Request.get(URL_COLLECTION["DOWNLOAD_SERVICE"], handleRes),
      //   1000
      // );

      // long
    }
  }
};
</script>


<style>
.add-steps {
  width: 50%;
  margin: 50px auto;
}

.add-item {
  width: 50%;
  margin: auto;
}

.btn-group {
  display: flex;
  justify-content: center;
}

.upload {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

.upload-progress {
  text-align: center;
}
</style>
