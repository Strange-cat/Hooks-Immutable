import { axiosInstance } from "./config";

// 轮播图
export const getBannerRequest = () => {
  return axiosInstance.get("/banner");
};

// 推荐列表
export const getRecommendListRequest = () => {
  return axiosInstance.get("/personalized");
};

// 热门歌手列表
export const getHotSingerListRequest = (count) => {
  return axiosInstance.get(`/top/artists?offset=${count}`);
};

// 歌手列表
export const getSingerListRequest = (category, alpha, count) => {
  return axiosInstance.get(
    `/artist/list?cat=${category}&initial=${alpha.toLowerCase()}&offset=${count}`
  );
};

// 排行榜列表
export const getRankListRequest = () => {
  return axiosInstance.get(`/toplist/detail`);
};

// 歌单详情
export const getAlbumDetailRequest = (id) => {
  return axiosInstance.get(`/playlist/detail?id=${id}`);
};
