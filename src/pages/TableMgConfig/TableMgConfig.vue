<template>
  <el-dialog
    title="表级配置"
    close-on-press-escape
    :visible.sync="showTableMgConfigDialog"
    width="90%"
    top="20px"
    center>

    <el-form :model="mgConfig" inline label-width="200px">
      <el-form-item label="tableName">
        <el-input size="mini" disabled v-model="mgConfig.tableName"  placeholder="tableName"></el-input>
      </el-form-item>
      <el-form-item label="entityName">
        <el-input size="mini" v-model="mgConfig.entityName" placeholder="entityName"></el-input>
      </el-form-item>
      <el-form-item label="entityName4LowerCamel">
        <el-input size="mini" v-model="mgConfig.entityName4LowerCamel" placeholder="entityName4LowerCamel"></el-input>
      </el-form-item>
      <el-form-item label="entityName4UpperCamel">
        <el-input size="mini" v-model="mgConfig.entityName4UpperCamel" placeholder="entityName4UpperCamel"></el-input>
      </el-form-item>
      <el-form-item label="defaultSort">
        <el-input size="mini" v-model="mgConfig.defaultSort" placeholder="defaultSort"></el-input>
      </el-form-item>
    </el-form>
    <el-table :data="mgConfig.columns" style="width: 100%" max-height="350">
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
      <el-button size="mini" type="primary" @click="showTableMgConfigDialog = false">取消</el-button>
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
      }
    },
    computed: {
      ...mapState(['mgConfig'])
    },
    methods: {
      saveMgConfig2State() {
        // this.$store.dispatch("saveMgConfig2State",this.mgConfig)
        this.showTableMgConfigDialog = false
      }
    }
  }
</script>

<style scoped>

</style>
