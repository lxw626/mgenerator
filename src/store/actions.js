/*
通过mutation间接更新state的多个方法的对象
 */
import {
  SET_CONTENT,
  SAVE_MGCONFIG_2_STATE,
  SAVE_GLOBAL_MGCONFIG_2_STATE,
  GET_GLOBAL_MGCONFIG,
  GET_CONTENTS,
  REMOVE_MGCONFIG_FROM_STATE
} from './mutation-types'
import Api from '../api'

export default {
  async setContent({commit},content) {
    commit(SET_CONTENT, {content})
  },
  async getContents({commit,state}) {
    let globalMgConfig = state.globalMgConfig;
    let mgConfigs = state.mgConfigs;
    for (let tableName in mgConfigs){
      let mgConfig = mgConfigs[tableName];
      for(let key in globalMgConfig){
        let value = globalMgConfig[key];
        if(value != null){
          mgConfig[key] = value;
        }
      }
    }
    // 发送异步ajax请求
    const result = await Api.getContents(mgConfigs)
    // 提交一个mutation
    if (result.success) {
      const contents = result.data
      commit(GET_CONTENTS, {contents})
    }
  },
  async getMgConfig({commit},databaseMs) {
    // 发送异步ajax请求
    const result = await Api.getMgConfig(databaseMs)
    // 提交一个mutation
    if (result.success) {
      const mgConfig = result.data
      let tableName = mgConfig.tableName;
      let mgConfig4KV = {tableName,mgConfig}
      commit(SAVE_MGCONFIG_2_STATE, {mgConfig4KV})
    }
  },
  async getGlobalMgConfig({commit},mgConfig) {
    // 发送异步ajax请求
    const result = await Api.getMgConfig(mgConfig)
    // 提交一个mutation
    if (result.success) {
      const mgConfig = result.data
      commit(GET_GLOBAL_MGCONFIG, {mgConfig})
    }
  },
  saveGlobalMgConfig2State({commit},mgConfig) {
    // 提交一个mutation
    commit(SAVE_GLOBAL_MGCONFIG_2_STATE, {mgConfig})
  },
  saveMgConfig2State({commit},mgConfig4KV) {
    // 提交一个mutation
    commit(SAVE_MGCONFIG_2_STATE, {mgConfig4KV})
  },
  removeMgConfigFromState({commit},tableName) {
    // 提交一个mutation
    commit(REMOVE_MGCONFIG_FROM_STATE, {tableName})
  },


}
