/*
 * @Author: your name
 * @Date: 2021-03-18 20:49:58
 * @LastEditTime: 2021-03-18 20:50:07
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \cloud-music\src\store\reducer.js
 */
import { combineReducers } from "redux-immutable";
import { reducer as recommendReducer } from "../application/Recommend/store/index";

export default combineReducers({
  // 之后开发具体功能模块的时候添加 reducer
  recommend: recommendReducer,
});
