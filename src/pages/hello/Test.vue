<!--
<template>
    <div>
      <el-form :model="mgGlobalConfig" ref="mgGlobalConfig" label-width="200px" size="mini">
        <el-row>
          <el-col :span="8">
            <el-form-item label="数据库用户名" prop="dbUserName">
              <el-input v-model="mgGlobalConfig.dbUserName"></el-input>
            </el-form-item>
          </el-col>
          <el-col :span="8">
            <el-form-item label="数据库密码" prop="dbPassword">
              <el-input v-model="mgGlobalConfig.dbPassword"></el-input>
            </el-form-item>
          </el-col>
          <el-col :span="8">
            <el-form-item label="数据库类型" prop="dbType">
              <el-select v-model="mgGlobalConfig.dbType" placeholder="请选择数据库类型">
                <el-option label="Mysql" value="Mysql"></el-option>
                <el-option label="Oracle" value="Oracle"></el-option>
              </el-select>
            </el-form-item>
          </el-col>
        </el-row>
        <el-row>
          <el-col>
            <el-form-item label="url" prop="url">
              <el-input v-model="mgGlobalConfig.url"></el-input>
            </el-form-item>
          </el-col>
        </el-row>
        <el-row>
          <el-col :span="8">
            <el-form-item label="group" prop="group">
              <el-input v-model="mgGlobalConfig.group"></el-input>
            </el-form-item>
          </el-col>
          <el-col :span="8">
            <el-form-item label="作者" prop="author">
              <el-input v-model="mgGlobalConfig.author"></el-input>
            </el-form-item>
          </el-col>
          <el-col :span="8">
            <el-form-item label="创建时间格式" prop="createTimeFormat">
              <el-input v-model="mgGlobalConfig.createTimeFormat"></el-input>
            </el-form-item>
          </el-col>
        </el-row>

        <el-row>
          <el-col :span="12">
            <el-form-item label="entityPackage" prop="entityPackage">
              <el-input v-model="mgGlobalConfig.entityPackage"></el-input>
            </el-form-item>
          </el-col>
          <el-col :span="12">
            <el-form-item label="controllerPackage" prop="controllerPackage">
              <el-input v-model="mgGlobalConfig.controllerPackage"></el-input>
            </el-form-item>
          </el-col>
        </el-row>

        <el-row>
          <el-col :span="12">
            <el-form-item label="servicePackage" prop="servicePackage">
              <el-input v-model="mgGlobalConfig.servicePackage"></el-input>
            </el-form-item>
          </el-col>
          <el-col :span="12">
            <el-form-item label="mapperPackage" prop="mapperPackage">
              <el-input v-model="mgGlobalConfig.mapperPackage"></el-input>
            </el-form-item>
          </el-col>
        </el-row>
        <el-row>
          <el-col :span="3">
            <el-radio label="isLombok" v-model="mgGlobalConfig.isLombok"></el-radio>
          </el-col>
          <el-col :span="3">
            <el-radio label="isFieldComment" v-model="mgGlobalConfig.isFieldComment"></el-radio>
          </el-col>
          <el-col :span="3">
            <el-radio label="isToString" v-model="mgGlobalConfig.isToString"></el-radio>
          </el-col>
          <el-col :span="3">
            <el-radio label="isSort" v-model="mgGlobalConfig.isSort"></el-radio>
          </el-col>
          <el-col :span="3">
          </el-col>
          <el-col :span="6">
            <el-form-item label="sortInfo" prop="sortInfo">
              <el-input v-model="mgGlobalConfig.sortInfo"></el-input>
            </el-form-item>
          </el-col>
        </el-row>
        <el-row>
          <el-col :span="6">
            <el-form-item label="basicEntity" prop="basicEntity">
              <el-input v-model="mgGlobalConfig.basicEntity"></el-input>
            </el-form-item>
          </el-col>
          <el-col :span="6">
            <el-form-item label="numberType" prop="numberType">
              <el-input v-model="mgGlobalConfig.numberType"></el-input>
            </el-form-item>
          </el-col>
          <el-col :span="6">
            <el-form-item label="pageSizes" prop="pageSizes">
              <el-input v-model="mgGlobalConfig.pageSizes"></el-input>
            </el-form-item>
          </el-col>
          <el-col :span="6">
            <el-form-item label="pageSize" prop="pageSize">
              <el-input v-model="mgGlobalConfig.pageSize"></el-input>
            </el-form-item>
          </el-col>
        </el-row>
        <el-row>
          <el-col :span="6">
            <el-form-item label="addName" prop="addName">
              <el-input v-model="mgGlobalConfig.addName"></el-input>
            </el-form-item>
          </el-col>
          <el-col :span="6">
            <el-form-item label="deleteName" prop="deleteName">
              <el-input v-model="mgGlobalConfig.deleteName"></el-input>
            </el-form-item>
          </el-col>
          <el-col :span="6">
            <el-form-item label="updateName" prop="updateName">
              <el-input v-model="mgGlobalConfig.updateName"></el-input>
            </el-form-item>
          </el-col>
          <el-col :span="6">
            <el-form-item label="selectName" prop="selectName">
              <el-input v-model="mgGlobalConfig.selectName"></el-input>
            </el-form-item>
          </el-col>
        </el-row>
        <el-row>
          <el-col :span="8">
            <el-form-item label="addNote" prop="addNote">
              <el-input v-model="mgGlobalConfig.addNote"></el-input>
            </el-form-item>
          </el-col>
          <el-col :span="8">
            <el-form-item label="findNote" prop="findNote">
              <el-input v-model="mgGlobalConfig.findNote"></el-input>
            </el-form-item>
          </el-col>
          <el-col :span="8">
            <el-form-item label="findByPageNote" prop="findByPageNote">
              <el-input v-model="mgGlobalConfig.findByPageNote"></el-input>
            </el-form-item>
          </el-col>
        </el-row>
        <el-row>
          <el-col :span="8">
            <el-form-item label="findByPrimaryKeyNote" prop="findByPrimaryKeyNote">
              <el-input v-model="mgGlobalConfig.findByPrimaryKeyNote"></el-input>
            </el-form-item>
          </el-col>
          <el-col :span="8">
            <el-form-item label="updateByPrimaryKeyNote" prop="updateByPrimaryKeyNote">
              <el-input v-model="mgGlobalConfig.updateByPrimaryKeyNote"></el-input>
            </el-form-item>
          </el-col>
          <el-col :span="8">
            <el-form-item label="deleteByPrimaryKeyNote" prop="deleteByPrimaryKeyNote">
              <el-input v-model="mgGlobalConfig.deleteByPrimaryKeyNote"></el-input>
            </el-form-item>
          </el-col>
        </el-row>

        <el-form-item label="mResponseNameFull" prop="mResponseNameFull">
          <el-input v-model="mgGlobalConfig.mResponseNameFull"></el-input>
        </el-form-item>

        <el-form-item label="extraMethodNote" prop="extraMethodNote">
          <el-input v-model="mgGlobalConfig.extraMethodNote"></el-input>
        </el-form-item>
        <el-form-item>
          <el-button type="primary" @click="submitForm('mgGlobalConfig')">立即创建</el-button>
          <el-button @click="resetForm('mgGlobalConfig')">重置</el-button>
        </el-form-item>
      </el-form>
    </div>
</template>

<script>
  import {getMgGlobalConfig} from '../../api'
    export default {
        name: "Test",
        data(){
            return {
                mgGlobalConfig:{},
                rules:[]
            }
        },
        mounted() {
            this.getMgGlobalConfig();

        },
        methods:{
            async getMgGlobalConfig(){
                this.mgGlobalConfig = await getMgGlobalConfig()
            }
        }
    }
</script>

<style scoped>

</style>
-->
