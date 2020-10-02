<!--
<template>
  <div>
      <el-form :model="mgGlobalConfig" ref="mgGlobalConfig" :rules="rules" label-width="150px" size="mini"
               label-position="left">
        <el-form-item label="gName" prop="gName">
          <el-input v-model="mgGlobalConfig.gName"></el-input>
        </el-form-item>
        <el-form-item label="dbUserName" prop="dbUserName">
          <el-input v-model="mgGlobalConfig.dbUserName"></el-input>
        </el-form-item>
        <el-form-item label="dbPassword" prop="dbPassword">
          <el-input v-model="mgGlobalConfig.dbPassword" show-password></el-input>
        </el-form-item>
        <el-form-item label="dbUrl" prop="dbUrl">
          <el-input v-model="mgGlobalConfig.dbUrl"></el-input>
        </el-form-item>
        <el-form-item label="group" prop="group">
          <el-input v-model="mgGlobalConfig.group"></el-input>
        </el-form-item>
      </el-form>
  </div>
</template>

<script>
    export default {
        name: "ImportantForm",
        props:{
            mgGlobalConfig: Object
        },
        data(){
            return {
                rules: {
                    gName:{ required: true, message: '请输入全局配置名', trigger: 'blur' },
                    dbUserName:{ required: true, message: '请输入数据库用户名', trigger: 'blur' },
                    dbPassword:{ required: true, message: '请输入数据库密码', trigger: 'blur' },
                    dbUrl:{ required: true, message: '请输入url', trigger: 'blur' },
                    group:{ required: true, message: '请输入项目group', trigger: 'blur' },
                },
            }
        },

    }
</script>

<style scoped>

</style>
-->
