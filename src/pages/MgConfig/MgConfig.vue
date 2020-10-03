<template>
  <div>
    <el-dialog
      title="更多配置"
      :visible.sync="showMgConfigDialog"
      width="60%"
      center>

      <el-form :model="mgConfig" label-width="200px">
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
        <el-form-item label="tableName">
          <el-input v-model="mgConfig.tableName" disabled placeholder="tableName"></el-input>
        </el-form-item>
        <el-form-item label="entityName">
          <el-input v-model="mgConfig.entityName" placeholder="entityName"></el-input>
        </el-form-item>
        <el-form-item label="entityName4LowerCamel">
          <el-input v-model="mgConfig.entityName4LowerCamel" placeholder="entityName4LowerCamel"></el-input>
        </el-form-item>
        <el-form-item label="entityName4UpperCamel">
          <el-input v-model="mgConfig.entityName4UpperCamel" placeholder="entityName4UpperCamel"></el-input>
        </el-form-item>
        <el-form-item label="defaultSort">
          <el-input v-model="mgConfig.defaultSort" placeholder="defaultSort"></el-input>
        </el-form-item>
      </el-form>
      <span slot="footer" class="dialog-footer">
        <el-button @click="saveMgConfig2State">确认</el-button>
        <el-button @click="showMgConfigDialog = false">保存配置</el-button>
        <el-button @click="showMgConfigDialog = false">设为默认配置</el-button>
        <el-button type="primary" @click="showMgConfigDialog = false">取消</el-button>
      </span>
    </el-dialog>
  </div>
</template>

<script>
  export default {
    name: "MgConfig",
    data() {
      return {
        showMgConfigDialog: false,
        mgConfig: {},
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
    methods:{
      saveMgConfig2State(){
        this.$store.dispatch("saveMgConfig2State",this.mgConfig)
        this.showMgConfigDialog = false
      }
    }
  }
</script>

<style scoped>

</style>
