import React, { useEffect } from "react";
import Slider from "../../components/slider";
import RecommendList from "../../components/list";
import Scroll from "../../components/scroll";
import { Content } from "./style";
import { useSelector, useDispatch } from "react-redux";
import * as actionTypes from "./store/actionCreators";

function Recommend(props) {
  const bannerList = useSelector((state) => {
    return state.getIn(["recommend", "bannerList"]);
  });
  const recommendList = useSelector((state) =>
    state.getIn(["recommend", "recommendList"])
  );
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(actionTypes.getBannerList());
    dispatch(actionTypes.getRecommendList());
    //eslint-disable-next-line
  }, []);

  const bannerListJS = bannerList ? bannerList.toJS() : [];
  const recommendListJS = recommendList ? recommendList.toJS() : [];

  return (
    <Content>
      <Scroll className="list">
        <div>
          <Slider bannerList={bannerListJS}></Slider>
          <RecommendList recommendList={recommendListJS}></RecommendList>
        </div>
      </Scroll>
    </Content>
  );
}

export default React.memo(Recommend);
