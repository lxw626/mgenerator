/*
直接更新state的多个方法的对象
*/
import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)
import {
  GET_CONTENT,
  CHANGE_DATABASEMS,
  SAVE_MGCONFIG_2_STATE
} from './mutation-types'

export default {
  [GET_CONTENT] (state, {content}) {
    state.content = content
  },
  [CHANGE_DATABASEMS] (state, {databaseMs}) {
    state.mgConfig.dbId = databaseMs.dbId
    state.mgConfig.tableName = databaseMs.tableName
  },
  [SAVE_MGCONFIG_2_STATE] (state, {mgConfig}) {
    for (let key in mgConfig){
      let value = mgConfig[key];
      if(value){
        console.log(value)
        state.mgConfig[key] = value;
      }
    }
  },

}
