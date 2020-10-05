/*
包含n个接口请求函数的模块
函数的返回值: promise对象
 */
import ajax from './ajax'
// const BASE_URL = 'http://localhost:4000'
const BASE_URL = '/api'

export default {
  login: () => ajax(BASE_URL + '/login'),
  getMgGlobalConfig: (gId) => ajax(BASE_URL + '/getMgGlobalConfig', {gId}),
  getMgGlobalConfigList: () => ajax(BASE_URL + '/getMgGlobalConfigList'),
  saveMgGlobalConfig: (mgGlobalConfig) => ajax(BASE_URL + '/saveMgGlobalConfig', mgGlobalConfig, "POST"),
  addMgGlobalConfig: (mgGlobalConfig) => ajax(BASE_URL + '/addMgGlobalConfig', mgGlobalConfig, "POST"),
  testConnect: (dataSourceMs) => ajax(BASE_URL + '/DatabaseMs/testConnect', dataSourceMs, "POST"),
  getContent: (mgConfig) => ajax(BASE_URL + '/generator/getContent', mgConfig, "POST"),
  getContents: (mgConfigs) => ajax(BASE_URL + '/generator/getContents', mgConfigs, "POST"),
  getDatabaseMsNodes: (databaseMs) => ajax(BASE_URL + '/DatabaseMs/getDatabaseMsNodes',databaseMs,"POST"),
  gettableNames: (dbId) => ajax(BASE_URL + '/DatabaseMs/gettableNames', {dbId}),
// 数据库管理
  addDatabaseMs: (databaseMs) => ajax(BASE_URL + '/DatabaseMs/addDatabaseMs', databaseMs, "POST"),
  deleteDatabaseMs: (id) => ajax(BASE_URL + '/DatabaseMs/deleteDatabaseMs', {id}),
  getMgConfig: (databaseMs) => ajax(BASE_URL + '/generator/getMgConfig',  databaseMs, "POST"),
}




