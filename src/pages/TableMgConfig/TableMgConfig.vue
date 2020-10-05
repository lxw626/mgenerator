<template>
  <el-dialog
    title="表级配置"
    close-on-press-escape
    :visible.sync="showTableMgConfigDialog"
    width="90%"
    top="20px"
    center>

    <el-form :model="tableMgConfig" inline label-width="200px">
      <el-form-item label="tableName">
        <el-input size="mini" disabled v-model="tableMgConfig.tableName" placeholder="tableName"></el-input>
      </el-form-item>
      <el-form-item label="entityName">
        <el-input size="mini" v-model="tableMgConfig.entityName" placeholder="entityName"></el-input>
      </el-form-item>
      <el-form-item label="entityName4LowerCamel">
        <el-input size="mini" v-model="tableMgConfig.entityName4LowerCamel" placeholder="entityName4LowerCamel"></el-input>
      </el-form-item>
      <el-form-item label="entityName4UpperCamel">
        <el-input size="mini" v-model="tableMgConfig.entityName4UpperCamel" placeholder="entityName4UpperCamel"></el-input>
      </el-form-item>
      <el-form-item label="defaultSort">
        <el-input size="mini" v-model="tableMgConfig.defaultSort" placeholder="defaultSort"></el-input>
      </el-form-item>
    </el-form>
    <el-table :data="tableMgConfig.columns" style="width: 100%" max-height="350">
      <el-table-column label="columnName" prop="columnName" width="180"></el-table-column>
      <el-table-column label="columnComment" prop="columnComment" width="180"></el-table-column>
      <el-table-column label="columnType" prop="columnType" width="120"></el-table-column>
      <el-table-column label="fieldName" width="180">
        <template slot-scope="scope">
          <el-input size="mini" v-model="scope.row.fieldName"/>
        </template>
      </el-table-column>
      <el-table-column label="fieldType" width="120">
        <template slot-scope="scope">
          <el-input size="mini" v-model="scope.row.fieldType"/>
        </template>
      </el-table-column>
      <el-table-column label="jdbcType" width="120">
        <template slot-scope="scope">
          <el-input size="mini" v-model="scope.row.jdbcType"/>
        </template>
      </el-table-column>
      <el-table-column label="是否主键" width="80">
        <template slot-scope="scope">
          {{scope.row.primaryKey === true ? '是':'否'}}
        </template>
      </el-table-column>
    </el-table>
    <span slot="footer" class="dialog-footer">
      <el-button size="mini" @click="saveMgConfig2State">确认</el-button>
      <el-button size="mini" type="primary" @click="revertMgConfig2State">取消</el-button>
    </span>
  </el-dialog>
</template>

<script>
  import {mapState} from 'vuex'

  export default {
    name: "TableMgConfig",
    data() {
      return {
        showTableMgConfigDialog: false,
        tableName: '',
        tableMgConfig: {},
      }
    },
    computed: {
      ...mapState(['mgConfigs'])
    },
    watch:{
      mgConfigs:{
        handler:'initTableMgConfig',
        deep:true
      }

    },
    methods: {

      revertMgConfig2State() {
        this.initTableMgConfig()
        this.showTableMgConfigDialog = false
      },
      saveMgConfig2State() {
        let tableMgConfig = this.tableMgConfig;
        let tableName = tableMgConfig.tableName;
        this.$store.dispatch("saveMgConfig2State", {tableName, mgConfig: tableMgConfig})
        this.showTableMgConfigDialog = false
      },
      initTableMgConfig() {
        let mgConfigs = JSON.parse(JSON.stringify(this.mgConfigs));
        let tableName = this.tableName;
        let mgConfig = mgConfigs[tableName];
        if (tableName != '' && mgConfig != null) {
          this.tableMgConfig = mgConfig
        }
      },
    }
  }
</script>

<style scoped>

</style>
