<template>
  <div id="app">
    <el-row style="border: 1px solid #000">
      <el-tabs value="connect">
        <el-tab-pane label="connect" name="connect"  style="height: 600px;">
          <el-row>
            <el-col :span="4" style="border: 1px solid #000">
              <DatabaseMs></DatabaseMs>
            </el-col>
            <el-col :span="20" style="border: 1px solid #000">
              <el-form inline :model="mgConfig" label-width="80px">
                <el-form-item label="作者">
                  <el-input v-model="mgConfig.author" placeholder="作者" @change="saveMgConfig2State"></el-input>
                </el-form-item>
                <el-form-item label="group">
                  <el-input v-model="mgConfig.group" placeholder="group" @change="saveMgConfig2State"></el-input>
                </el-form-item>
                <el-form-item>
                  <el-button @click="showMgConfigDialog">更多全局配置</el-button>
                </el-form-item>
                <el-form-item>
                  <el-button @click="getContent">一键生成</el-button>
                </el-form-item>
              </el-form>
              <MgConfig ref="MgConfig"></MgConfig>
              <ContentView></ContentView>
            </el-col>
          </el-row>
        </el-tab-pane>
        <el-tab-pane label="sql" name="sql">sql</el-tab-pane>
      </el-tabs>
    </el-row>
  </div>
</template>

<script>
  import Api from './api'
  import DatabaseMs from './pages/DatabaseMs/DatabaseMs.vue'
  import MgConfig from './pages/MgConfig/MgConfig.vue'
  import ContentView from './pages/ContentView/ContentView.vue'


  export default {
    name: 'App',
    data() {
      return {
        centerDialogVisible: false,
        mgConfig:{
          author:'九转成圣',
          group:'com.example.demo',
        },
      }
    },
    mounted(){
      this.saveMgConfig2State();
    },
    methods: {
      showMgConfigDialog() {
        this.$refs.MgConfig.showMgConfigDialog=true;
      },
      getContent(){
        this.$store.dispatch("getContent")
      },
      saveMgConfig2State(){
        this.$store.dispatch("saveMgConfig2State",this.mgConfig)
      }
    },
    components:{
      DatabaseMs,
      MgConfig,
      ContentView
    }
  }
</script>

<style>
  html, body, #app {
    /*设置内部填充为0，几个布局元素之间没有间距*/
    padding: 0px;
    /*外部间距也是如此设置*/
    margin: 0px;
    /*统一设置高度为100%*/
    height: 100%;
  }

</style>
