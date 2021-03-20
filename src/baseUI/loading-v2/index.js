import React from "react";
import { Loading } from "./style";
import { PropTypes } from "prop-types";

function LoadingV2(props) {
  const { show } = props;

  return show ? (
    <Loading>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <span> 拼命加载中...</span>
    </Loading>
  ) : null;
}

LoadingV2.defaultProps = {
  show: true, // 控制显示/隐藏
};

LoadingV2.propTypes = {
  show: PropTypes.bool,
};

export default React.memo(LoadingV2);
