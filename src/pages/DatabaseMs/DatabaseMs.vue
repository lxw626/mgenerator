<template>
  <div class="xxx">
    <el-button type="text" @click="showAddDatabaseMsDialog = true">新建连接</el-button>
    <span class="el-checkbox__label" style="margin-left: 15px">显示表级配置</span>
    <el-checkbox v-model="showTableMgConfig"/>
    <el-dialog
      title="新建连接"
      :visible.sync="showAddDatabaseMsDialog"
      width="50%"
      center>
      <el-form :model="databaseMs" label-width="80px">
        <el-form-item label="连接名">
          <el-input v-model="databaseMs.dbAlias" placeholder="连接名"></el-input>
        </el-form-item>
        <el-form-item label="url">
          <el-input v-model="databaseMs.dbUrl" placeholder="url"></el-input>
        </el-form-item>
        <el-form-item label="用户名">
          <el-input v-model="databaseMs.dbUserName" placeholder="用户名"></el-input>
        </el-form-item>
        <el-form-item label="密码">
          <el-input v-model="databaseMs.dbPassword" placeholder="密码"></el-input>
        </el-form-item>
      </el-form>
      <span slot="footer" class="dialog-footer">
        <el-button @click="testConnect">测试连接</el-button>
        <el-button @click="addDatabaseMs">确认</el-button>
        <el-button type="primary" @click="showAddDatabaseMsDialog = false">取消</el-button>
      </span>
    </el-dialog>
    <el-tree
      :props="props"
      :data="dbData"
      :load="loadNode"
      lazy
      @check="checkHandler"
      @node-contextmenu="nodeContextMenuHandler"
      show-checkbox
      style="background: #E3EDCD">
    </el-tree>
    <div v-show="showDatabaseMsMenu"
         :style="{zIndex:'100',background:'#dddddd',border:'1px solid #000',position: 'fixed',top: databaseMsMenuY + 'px',left: databaseMsMenuX + 'px'}">
      <i class="el-icon-close" style="float:right;margin: 10px" @click="showDatabaseMsMenu=false"></i>
      <div style="width: 140px;margin: 30px auto;">
        <el-button size="small" class="menu-button" @click="addDatabaseMsMenuHandler">新建连接</el-button>
        <el-button size="small" class="menu-button" @click="editDatabaseMsMenuHandler">编辑连接</el-button>
        <el-button size="small" class="menu-button" @click="deleteDatabaseMsMenuHandler">删除连接</el-button>
      </div>
    </div>
    <TableMgConfig ref="TableMgConfig"></TableMgConfig>
  </div>
</template>

<script>
  import Api from '../../api'
  import TableMgConfig from '../TableMgConfig/TableMgConfig.vue'

  export default {
    name: "DatabaseMs",
    data() {
      return {
        showAddDatabaseMsDialog: false,
        showDatabaseMsMenu: false,
        showTableMgConfig: false,
        contextMenuNode: {},
        databaseMs: {
          dbAlias: "我是别名",
          dbUrl: 'jdbc:mysql://123.57.128.136/mgenerator?useUnicode=true&characterEncoding=utf8&ssl=true&allowMultiQueries=true&zeroDateTimeBehavior=convertToNull',
          dbUserName: 'root',
          dbPassword: 'i&Z*M$lxw@9yb2#E33%Tsz'
        },
        props: {
          label: 'nodeName',
          children: 'children',
          isLeaf: 'leaf'
        },
        dbData: [],
        databaseMsMenuX: 0,
        databaseMsMenuY: 0,

      }
    },

    created() {
      this.getDatabaseMsNodes()
    },
    components: {
      TableMgConfig
    },
    methods: {
      async loadNode(node, resolve) {
        if (node.level === 0) {
          return resolve(this.dbData);
        } else {
          let res = await Api.gettableNames(node.data.nodeInfo.dbId);
          if (res.success) {
            resolve(res.data);
          }
        }
      },
      checkHandler(node, checkedInfo) {
        let checked = checkedInfo.checkedNodes.filter(item => item.nodeName == node.nodeName).length == 1;
        let tableName = node.nodeName;
        if (checked) {
          let dbId = node.nodeInfo.dbId;
          this.$store.dispatch("getMgConfig", {tableName, dbId})
          if (this.showTableMgConfig) {
            this.$refs.TableMgConfig.tableName = tableName
            this.$refs.TableMgConfig.showTableMgConfigDialog = true
          }
        } else {
          this.$store.dispatch("removeMgConfigFromState", tableName)
        }
      },
      nodeContextMenuHandler(event, node) {
        this.contextMenuNode = node
        this.databaseMsMenuX = event.clientX;
        this.databaseMsMenuY = event.clientY
        if (node.leaf === true) {
          this.showDatabaseMsMenu = false;
          this.$refs.TableMgConfig.tableName = node.nodeName
          this.$refs.TableMgConfig.showTableMgConfigDialog = true
        } else {
          this.$refs.TableMgConfig.showTableMgConfigDialog = false
          this.showDatabaseMsMenu = true;
        }
      },
      addDatabaseMsMenuHandler() {
        this.showDatabaseMsMenu = false;
        this.showAddDatabaseMsDialog = true;
      },
      editDatabaseMsMenuHandler() {
        this.showDatabaseMsMenu = false;
        this.showAddDatabaseMsDialog = true;
      },
      deleteDatabaseMsMenuHandler() {
        let node = this.contextMenuNode;
        this.showDatabaseMsMenu = false;
        this.$confirm(`确认删除${node.label}?`, '提示', {
          confirmButtonText: '确定',
          cancelButtonText: '取消',
          type: 'warning'
        }).then(() => {
          Api.deleteDatabaseMs(node.id).then(res => {
            this.$message({
              type: res.success ? 'success' : 'error',
              message: res.data
            });
          })
        }).catch(() => {
          this.$message({
            type: 'info',
            message: '已取消删除'
          });
        });
      },
      testConnect() {
        Api.testConnect(this.db).then(res => {
          this.$message({
            message: res.data,
            type: res.success ? "success" : "error",
            duration: 1000,
            showClose: true
          });
        })
      },
      addDatabaseMs() {
        Api.addDatabaseMs(this.databaseMs).then(res => {
          this.getDatabaseMsNodes()
          if (res.success) {
            this.$message({
              message: "新增成功",
              type: "success",
              duration: 1000,
              showClose: true
            });
            this.showAddDatabaseMsDialog = false;
          }
        })
      },
      async getDatabaseMsNodes() {
        const result = await Api.getDatabaseMsNodes();
        if (result.success) {
          this.dbData = result.data
        }
      },


    }
  }
</script>

<style scoped>

  .xxx {
    /*设置内部填充为0，几个布局元素之间没有间距*/
    padding: 0px;
    /*外部间距也是如此设置*/
    margin: 0px;
    /*统一设置高度为100%*/
    height: 100%;
  }

  .menu-button {
    display: block;
    margin-top: 10px;
    margin-left: 30px
  }


</style>
