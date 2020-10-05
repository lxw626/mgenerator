<template>
  <el-tabs v-model="activeName">
    <el-tab-pane label="table" name="table">
      <el-input
        type="textarea"
        autosize
        placeholder="请输入内容"
        @change="changeHandler"
        v-model="xxx"
      >
      </el-input>
    </el-tab-pane>
    <el-tab-pane label="entity" name="entity">
      <el-input
        type="textarea"
        autosize
        placeholder="请输入内容"
        v-model="content.entityContent.join('\n')">
      </el-input>
    </el-tab-pane>
    <el-tab-pane label="xml" name="xml">
      <el-input
        type="textarea"
        autosize
        placeholder="请输入内容"
        v-model="content.xmlContent.join('\n')">
      </el-input>
    </el-tab-pane>
    <el-tab-pane label="service" name="service">
      <el-input
        type="textarea"
        autosize
        placeholder="请输入内容"
        v-model="content.serviceContent.join('\n')">
      </el-input>

    </el-tab-pane>
    <el-tab-pane label="impl" name="impl">
      <el-input
        type="textarea"
        autosize
        placeholder="请输入内容"
        v-model="content.serviceImplContent.join('\n')">
      </el-input>
    </el-tab-pane>
    <el-tab-pane label="controller" name="controller">
      <el-input
        type="textarea"
        autosize
        placeholder="请输入内容"
        v-model="content.controllerContent.join('\n')">
      </el-input>
    </el-tab-pane>
    <el-tab-pane label="vueContent" name="vueContent">
      <el-input
        type="textarea"
        autosize
        placeholder="请输入内容"
        v-model="content.vueContent.join('\n')">
      </el-input>
    </el-tab-pane>
  </el-tabs>
</template>

<script>
  import {mapState} from 'vuex'

  export default {
    name: "ContentView",
    computed: {
      ...mapState(['content','contents']),
    },

    data() {
      return {
        activeName: 'entity',
        names:['张三','李四'],
        xxx:''
      }
    },
    methods:{
      changeHandler(){
        let strings = this.xxx.split("\n");

      }
    }
  }
</script>

<style>

</style>
