<!--
<template>
  <div style="padding-left: 50px;padding-right: 100px;padding-top: 10px">
        <el-select v-model="gId" placeholder="请选择全局配置" size="mini">
          <el-option v-for="(item) in mgGlobalConfigList" :label="item.gName" :value="item.gId"></el-option>
        </el-select>
        <el-button type="primary" @click="showImportantForm=true" size="mini">必填项</el-button>
        <el-button type="primary" @click="showImportantForm=false" size="mini">选填项</el-button>
    <div style="float:right">
      <el-button type="primary" @click="saveMgGlobalConfig" size="mini">保存</el-button>
      <el-button type="primary" @click="addMgGlobalConfig" size="mini">另存为</el-button>
      <el-button type="primary" @click="showAddForm=true" size="mini">新增</el-button>
    </div>
    <div style="padding-top: 45px">
      <ImportantForm :mgGlobalConfig="mgGlobalConfig" v-if="showImportantForm"></ImportantForm>
      <OtherForm :mgGlobalConfig="mgGlobalConfig" v-if="!showImportantForm"></OtherForm>
    </div>

    <el-dialog title="员工信息" :visible.sync="showAddForm">
      <el-button type="primary" @click="showImportantForm4Add=true" size="mini">必填项</el-button>
      <el-button type="primary" @click="showImportantForm4Add=false" size="mini">选填项</el-button>
      <ImportantForm :mgGlobalConfig="mgGlobalConfig4Add" v-if="showImportantForm4Add"></ImportantForm>
      <OtherForm :mgGlobalConfig="mgGlobalConfig4Add" v-if="!showImportantForm4Add"></OtherForm>
      <div slot="footer" class="dialog-footer">
        <el-button @click="addMgGlobalConfig" size="mini">确 定</el-button>
        <el-button @click="showAddForm = false" size="mini">取 消</el-button>
      </div>
    </el-dialog>

  </div>
</template>

<script>
    import {login,getMgGlobalConfigList,getMgGlobalConfig,saveMgGlobalConfig,addMgGlobalConfig} from '../../api'
    import ImportantForm from "./ImportantForm.vue";
    import OtherForm from "./OtherForm.vue";

    export default {
        name: "MgGlobalConfig",
        components: {
            ImportantForm,
            OtherForm
        },
        data() {
            return {
                showImportantForm:true,
                showImportantForm4Add:true,
                showAddForm:false,
                mgGlobalConfigList:[],
                mgGlobalConfig:{},
                mgGlobalConfig4Add: {
                    gId:undefined,
                    userName:undefined,
                    gName:undefined,
                    isEnabled:undefined,
                    dbUserName:undefined,
                    dbPassword:undefined,
                    dbType:undefined,
                    dbUrl:undefined,
                    author:undefined,
                    createTimeFormat:undefined,
                    group:undefined,
                    entityPackage:undefined,
                    controllerPackage:undefined,
                    servicePackage:undefined,
                    mapperPackage:undefined,
                    basicEntity:undefined,
                    sortInfo:undefined,
                    isSort:undefined,
                    isLombok:undefined,
                    isFieldComment:undefined,
                    isToString:undefined,
                    mResponseNameFull:undefined,
                    numberType:undefined,
                    addName:undefined,
                    deleteName:undefined,
                    updateName:undefined,
                    selectName:undefined,
                    extraMethodNote:undefined,
                    addNote:undefined,
                    deleteByPrimaryKeyNote:undefined,
                    updateByPrimaryKeyNote:undefined,
                    findByPrimaryKeyNote:undefined,
                    findByPageNote:undefined,
                    findNote:undefined,
                    pageSizes:undefined,
                    pageSize:null,
                    lastVisitTime:undefined
                },
                gId:"1",
            }
        },
        mounted() {
            this.login();
        },
        methods: {
            async login(){
               let sessionId = await login()
                console.log(sessionId)
                this.getMgGlobalConfigList();
                this.getMgGlobalConfig();
            },
            async getMgGlobalConfig(gId) {
                this.mgGlobalConfig = await getMgGlobalConfig(gId)
                console.log(this.mgGlobalConfig.isLombok)
            },
            async getMgGlobalConfigList(){
                let mgGlobalConfigList =  await getMgGlobalConfigList()
                if(mgGlobalConfigList.length>0){
                    // let gId = mgGlobalConfigList[0].gId
                    // this.gId = gId
                    this.mgGlobalConfigList = mgGlobalConfigList
                }
            },
            async saveMgGlobalConfig(){
                let result = await saveMgGlobalConfig(this.mgGlobalConfig)
                if(result.code==200){
                    this.showAddForm = false
                    this.$message({
                        message: result.msg,
                        type: 'success',
                        duration:500
                    });
                }else{
                    this.$message({
                        message: result.msg,
                        type: 'error'
                    });
                }
            },
            async addMgGlobalConfig(){
                let result = await addMgGlobalConfig(this.mgGlobalConfig4Add)
                if(result.code==200){
                    this.showAddForm = false
                    this.$message({
                        message: result.msg,
                        type: 'success',
                        duration:500
                    });
                }else{
                    this.$message({
                        message: result.msg,
                        type: 'error'
                    });
                }

            }
        }
    }
</script>

<style scoped>

</style>
-->
