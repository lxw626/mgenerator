<template>
  <div id="app">
    <el-row style="border: 1px solid #000">
      <el-tabs value="connect">
        <el-tab-pane label="connect" name="connect" style="height: 600px;">
          <el-row>
            <el-col :span="4" style="border: 1px solid #000">
              <DatabaseMs></DatabaseMs>
            </el-col>
            <el-col :span="20" style="border: 1px solid #000">
              <el-form inline :model="globalMgConfig" label-width="80px">
                <!--                <el-form-item label="作者">-->
                <!--                  <el-input v-model="globalMgConfig.author" placeholder="作者" @change="saveGlobalMgConfig2State"></el-input>-->
                <!--                </el-form-item>-->
                <el-form-item label="group">
                  <el-input v-model="globalMgConfig.group" placeholder="group"
                            @change="saveGlobalMgConfig2State"></el-input>
                </el-form-item>
                <el-form-item>
                  <el-button @click="showGlobalMgConfigDialog">更多全局配置</el-button>
                </el-form-item>
                <el-form-item>
                  <el-button @click="getContents">一键生成</el-button>
                </el-form-item>
                <el-form-item label="生成文件列表" v-if="contentList.length > 1" label-width="auto">
                  <el-select v-model="content" value-key="tableName" @change="contentChange">
                    <el-option
                      v-for="item in contentList"
                      :key="item.tableName"
                      :label="item.tableName"
                      :value="item">
                    </el-option>
                  </el-select>
                </el-form-item>
              </el-form>
              <GlobalMgConfig ref="GlobalMgConfig"></GlobalMgConfig>
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
  import GlobalMgConfig from './pages/GlobalMgConfig/GlobalMgConfig.vue'
  import ContentView from './pages/ContentView/ContentView.vue'
  import {mapState} from 'vuex'


  export default {
    name: 'App',
    data() {
      return {
        centerDialogVisible: false,
        globalMgConfig: {
          author: '九转成圣',
          group: 'com.example.demo',
        },
        content: ''

      }
    },
    computed: {
      ...mapState(['contentList'])
    },
    mounted() {
      this.saveGlobalMgConfig2State();
    },
    methods: {
      showGlobalMgConfigDialog() {
        // this.$store.dispatch('getGlobalMgConfig', {group: this.globalMgConfig.group})
        this.$refs.GlobalMgConfig.showGlobalMgConfigDialog = true;
      },
      getContents() {
        this.$store.dispatch("getContents")
      },
      saveGlobalMgConfig2State() {
        this.$store.dispatch("getGlobalMgConfig", this.globalMgConfig)
      },
      contentChange(){
        this.$store.dispatch('getGlobalMgConfig', {group: this.globalMgConfig.group})
        // this.$store.dispatch("setContent", this.content.content)
      }
    },
    components: {
      DatabaseMs,
      GlobalMgConfig,
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
