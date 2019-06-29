import React, { Component } from "react";
import { IconStyle } from "../../statics/iconfont/iconfont";
import { connect } from "react-redux";

import {
  HeaderWrapper,
  Logo,
  Nav,
  NavItem,
  NavSearch,
  Addition,
  Button,
  SearchInfo,
  SearchInfoTitle,
  SearchInfoChange,
  SearchInfoItem,
  SearchInfoList
} from "./style";

class Header extends Component {
  getListArea = show => {
    if (show) {
      return (
        <SearchInfo>
          <SearchInfoTitle>热门搜索</SearchInfoTitle>
          <SearchInfoChange>换一批</SearchInfoChange>
          <SearchInfoList>
            <SearchInfoItem>李晨范冰冰分手</SearchInfoItem>
            <SearchInfoItem>湖人总冠军</SearchInfoItem>
            <SearchInfoItem>宋慧乔分手</SearchInfoItem>
            <SearchInfoItem>詹姆斯换号</SearchInfoItem>
            <SearchInfoItem>卡哇伊有意湖人</SearchInfoItem>
          </SearchInfoList>
        </SearchInfo>
      );
    } else {
      return null;
    }
  };
  render() {
    return (
      <HeaderWrapper>
        <Logo href="/" />
        <Nav>
          <NavItem className="left active">首页</NavItem>
          <NavItem className="left">下载App</NavItem>
          <NavItem className="right">
            <IconStyle />
            <i className="iconfont">&#xe602;</i>
          </NavItem>
          <NavItem className="right">登录</NavItem>
          <NavSearch
            className={this.props.focused ? "facused" : ""}
            onFocus={this.props.bindInputFocus}
            onBlur={this.props.bindInputBlur}
          />
          <i className="iconfont">&#xe600;</i>
          {this.getListArea(this.props.focused)}
        </Nav>
        <Addition>
          <Button className="reg">
            <i className="iconfont">&#xe616;</i>
            写文章
          </Button>
          <Button className="writting">注册</Button>
        </Addition>
      </HeaderWrapper>
    );
  }
}
const mapStateToProps = state => {
  return {
    focused: state.focused
  };
};
const mapDispathToProps = dispatch => {
  return {
    bindInputFocus() {
      const action = {
        type: "search_focus"
      };
      dispatch(action);
    },
    bindInputBlur() {
      const action = {
        type: "search_blur"
      };
      dispatch(action);
    }
  };
};
export default connect(
  mapStateToProps,
  mapDispathToProps
)(Header);
