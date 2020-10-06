<template>
  <div>
    <el-dialog
      title="更多全局配置"
      :visible.sync="showGlobalMgConfigDialog"
      width="60%"
      center>

      <el-form :model="myGlobalMgConfig" label-width="200px">
        <el-form-item label="我的配置列表">
          <el-select v-model="value" placeholder="请选择">
            <el-option
              v-for="item in options"
              :key="item.value"
              :label="item.label"
              :value="item.value">
            </el-option>
          </el-select>
        </el-form-item>
        <el-form-item label="author">
          <el-input v-model="myGlobalMgConfig.author"></el-input>
        </el-form-item>
        <div style="margin-bottom: 22px;">
          <label class="myLabel">lombok</label>
          <el-checkbox v-model="myGlobalMgConfig.lombok" style="float: left;"/>
          <label class="myLabel">fieldComment</label>
          <el-checkbox v-model="myGlobalMgConfig.fieldComment" style="float: left;"/>
          <label class="myLabel">toStringMethod</label>
          <el-checkbox v-model="myGlobalMgConfig.toStringMethod" style="float: left;"/>
        </div>
        <el-form-item label="numberType">
          <el-select v-model="myGlobalMgConfig.numberType" placeholder="请选择">
            <el-option key="BigDecimal" label="BigDecimal" value="BigDecimal"/>
            <el-option key="Double" label="Double" value="Double"/>
          </el-select>
        </el-form-item>
        <el-form-item label="entityPackage">
          <el-input v-model="myGlobalMgConfig.entityPackage"></el-input>
        </el-form-item>
        <el-form-item label="controllerPackage">
          <el-input v-model="myGlobalMgConfig.controllerPackage"></el-input>
        </el-form-item>
        <el-form-item label="servicePackage">
          <el-input v-model="myGlobalMgConfig.servicePackage"></el-input>
        </el-form-item>
        <el-form-item label="mapperPackage">
          <el-input v-model="myGlobalMgConfig.mapperPackage"></el-input>
        </el-form-item>
        <el-form-item label="basicEntity">
          <el-input v-model="myGlobalMgConfig.basicEntity"></el-input>
        </el-form-item>
        <el-form-item label="sortInfo">
          <el-input v-model="myGlobalMgConfig.sortInfo"></el-input>
        </el-form-item>
        <el-form-item label="sortCode">
          <el-input v-model="myGlobalMgConfig.sortCode"></el-input>
        </el-form-item>
        <el-form-item label="createTimeFormat">
          <el-input v-model="myGlobalMgConfig.createTimeFormat"></el-input>
        </el-form-item>
        <el-form-item label="mResponseNameFull">
          <el-input v-model="myGlobalMgConfig.mResponseNameFull"></el-input>
        </el-form-item>
        <el-form-item label="pageSizes">
          <el-input v-model="myGlobalMgConfig.pageSizes"></el-input>
        </el-form-item>
        <el-form-item label="pageSize">
          <el-input v-model="myGlobalMgConfig.pageSize"></el-input>
        </el-form-item>
      </el-form>
      <span slot="footer" class="dialog-footer">
        <el-button @click="saveGlobalMgConfig2State">确认</el-button>
        <el-button @click="showGlobalMgConfigDialog = false">保存配置</el-button>
        <el-button @click="showGlobalMgConfigDialog = false">设为默认配置</el-button>
        <el-button type="primary" @click="revertGlobalMgConfig2State">取消</el-button>
      </span>
    </el-dialog>
  </div>
</template>

<script>
  import {mapState} from 'vuex'

  export default {
    name: "GlobalMgConfig",
    data() {
      return {
        showGlobalMgConfigDialog: false,
        myGlobalMgConfig:{},
        options: [{
          value: '选项1',
          label: '黄金糕'
        }, {
          value: '选项2',
          label: '双皮奶'
        }, {
          value: '选项3',
          label: '蚵仔煎'
        }, {
          value: '选项4',
          label: '龙须面'
        }, {
          value: '选项5',
          label: '北京烤鸭'
        }],
        value: ''
      }
    },
    computed: {
      ...mapState(['globalMgConfig'])
    },
    watch:{
      globalMgConfig:{
        handler:'initMyGlobalMgConfig',
        deep:true
      }
    },
    methods: {
      saveGlobalMgConfig2State() {
        this.$store.dispatch("saveGlobalMgConfig2State", this.myGlobalMgConfig)
        this.showGlobalMgConfigDialog = false
      },
      initMyGlobalMgConfig() {
        this.myGlobalMgConfig = JSON.parse(JSON.stringify(this.globalMgConfig));
      },
      revertGlobalMgConfig2State() {
        this.initMyGlobalMgConfig()
        this.showGlobalMgConfigDialog = false
      },
    }
  }
</script>

<style scoped>
  .myLabel {
    width: 200px;
    padding: 0 12px 22px 0;
    text-align: right;
    float: left;
  }

</style>
