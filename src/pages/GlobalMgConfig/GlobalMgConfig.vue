<template>
  <div>
    <el-dialog
      title="更多全局配置"
      :visible.sync="showGlobalMgConfigDialog"
      width="60%"
      center>

      <el-form :model="globalMgConfig" label-width="200px">
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
          <el-input v-model="globalMgConfig.author"></el-input>
        </el-form-item>
        <el-form-item label="entityPackage">
          <el-input v-model="globalMgConfig.entityPackage"></el-input>
        </el-form-item>
        <el-form-item label="controllerPackage">
          <el-input v-model="globalMgConfig.controllerPackage"></el-input>
        </el-form-item>
        <el-form-item label="servicePackage">
          <el-input v-model="globalMgConfig.servicePackage"></el-input>
        </el-form-item>
        <el-form-item label="mapperPackage">
          <el-input v-model="globalMgConfig.mapperPackage"></el-input>
        </el-form-item>
        <el-form-item label="basicEntity">
          <el-input v-model="globalMgConfig.basicEntity"></el-input>
        </el-form-item>
        <el-form-item label="sortInfo">
          <el-input v-model="globalMgConfig.sortInfo"></el-input>
        </el-form-item>
        <el-form-item label="sortCode">
          <el-input v-model="globalMgConfig.sortCode"></el-input>
        </el-form-item>
        <div style="margin-bottom: 22px;">
          <label class="myLabel">lombok</label>
          <el-checkbox v-model="globalMgConfig.lombok" style="float: left;"/>
          <label class="myLabel">fieldComment</label>
          <el-checkbox v-model="globalMgConfig.fieldComment" style="float: left;"/>
          <label class="myLabel">toStringMethod</label>
          <el-checkbox v-model="globalMgConfig.toStringMethod" style="float: left;"/>
        </div>
        <el-form-item label="createTimeFormat">
          <el-input v-model="globalMgConfig.createTimeFormat"></el-input>
        </el-form-item>
        <el-form-item label="mResponseNameFull">
          <el-input v-model="globalMgConfig.mResponseNameFull"></el-input>
        </el-form-item>
        <el-form-item label="numberType">
          <el-input v-model="globalMgConfig.numberType"></el-input>
        </el-form-item>
        <el-form-item label="pageSizes">
          <el-input v-model="globalMgConfig.pageSizes"></el-input>
        </el-form-item>
        <el-form-item label="pageSize">
          <el-input v-model="globalMgConfig.pageSize"></el-input>
        </el-form-item>
      </el-form>
      <span slot="footer" class="dialog-footer">
        <el-button @click="saveGlobalMgConfig2State">确认</el-button>
        <el-button @click="showGlobalMgConfigDialog = false">保存配置</el-button>
        <el-button @click="showGlobalMgConfigDialog = false">设为默认配置</el-button>
        <el-button type="primary" @click="showGlobalMgConfigDialog = false">取消</el-button>
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
    methods: {
      saveGlobalMgConfig2State() {
        this.$store.dispatch("saveGlobalMgConfig2State", this.globalMgConfig)
        this.showGlobalMgConfigDialog = false
      }
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
