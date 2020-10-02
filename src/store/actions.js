/*
通过mutation间接更新state的多个方法的对象
 */
import {
  GET_CONTENT,
  CHANGE_DATABASEMS,
  SAVE_MGCONFIG_2_STATE
} from './mutation-types'
import Api from '../api'

export default {
  // 异步获取地址
  async getContent({commit,state}) {
    // 发送异步ajax请求
    const result = await Api.getContent(state.mgConfig)
    // 提交一个mutation
    if (result.success) {
      const content = result.data
      commit(GET_CONTENT, {content})
    }
  },
  async changeDatabaseMs({commit},databaseMs) {
    // 提交一个mutation
    commit(CHANGE_DATABASEMS, {databaseMs})
  },
  saveMgConfig2State({commit},mgConfig) {
    // 提交一个mutation
    commit(SAVE_MGCONFIG_2_STATE, {mgConfig})
  },


}
