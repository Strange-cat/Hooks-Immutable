/*
 * @Author: your name
 * @Date: 2021-03-24 20:36:32
 * @LastEditTime: 2021-03-24 20:37:16
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \cloud-music\src\application\Singer\store\reducer.js
 */
import * as actionTypes from "./constants";
import { fromJS } from "immutable";

const defaultState = fromJS({
  artist: {},
  songsOfArtist: [],
  loading: true
});
// eslint-disable-next-line
export default (state = defaultState, action) => {
  switch (action.type) {
    case actionTypes.CHANGE_ARTIST:
      return state.set('artist', action.data);
    case actionTypes.CHANGE_SONGS_OF_ARTIST:
      return state.set('songsOfArtist', action.data);
    case actionTypes.CHANGE_ENTER_LOADING:
      return state.set('loading', action.data);
    default:
      return state;
  }
}