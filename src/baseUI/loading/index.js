import React from "react";
import { PropTypes } from "prop-types";
import { LoadingWrapper } from "./style";

function Loading(props) {
  const { show } = props;

  return show ? (
    <LoadingWrapper>
      <div></div>
      <div></div>
    </LoadingWrapper>
  ) : null;
}

Loading.defaultProps = {
  show: true, // 控制显示/隐藏
};

Loading.propTypes = {
  show: PropTypes.bool,
};

export default React.memo(Loading);
