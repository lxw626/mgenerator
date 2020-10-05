/*
直接更新state的多个方法的对象
*/
import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)
import {
  SET_CONTENT,
  SAVE_MGCONFIG_2_STATE,
  SAVE_GLOBAL_MGCONFIG_2_STATE,
  GET_GLOBAL_MGCONFIG,
  GET_CONTENTS,
  REMOVE_MGCONFIG_FROM_STATE
} from './mutation-types'

export default {
  [SET_CONTENT] (state, {content}) {
    state.content = content
  },
  [GET_CONTENTS] (state, {contents}) {
    state.contents = contents
    if(Object.keys(contents).length > 0){
      let i = 0
      let contentList = []
      for(let tableName in contents){
        let content = contents[tableName]
        if(i === 0){
          state.content = content
        }
        contentList.push({tableName,content})
      }
      state.contentList = contentList
    }
  },
  [GET_GLOBAL_MGCONFIG] (state, {mgConfig}) {
    state.globalMgConfig = mgConfig
  },

  [SAVE_GLOBAL_MGCONFIG_2_STATE] (state, {mgConfig}) {
    let globalMgConfig = state.globalMgConfig;
    for (let key in mgConfig){
      let value = mgConfig[key];
      if(globalMgConfig[key] == null){
        Vue.set(globalMgConfig, key, value)
      }else {
        state.globalMgConfig[key] = value;
      }
    }
  },
  [SAVE_MGCONFIG_2_STATE](state, {mgConfig4KV}) {
    let tableName = mgConfig4KV.tableName;
    let newMgConfig = mgConfig4KV.mgConfig;
    let mgConfigs = state.mgConfigs;
    if (mgConfigs[tableName] == null) {
      Vue.set(mgConfigs, tableName, newMgConfig)
    } else {
      let mgConfig = mgConfigs[tableName];
      for (let key in newMgConfig) {
        let value = newMgConfig[key];
        if (mgConfig[key] == null) {
          Vue.set(mgConfig, key, value)
        } else {
          mgConfig[key] = value
        }
      }
    }
  },
  [REMOVE_MGCONFIG_FROM_STATE](state, {tableName}) {
    delete state.mgConfigs[tableName]
  },

}
