import React, { Component } from "react";
import { connect } from "react-redux";
import { CSSTransition } from "react-transition-group";
import styled from "styled-components";
import { Link } from "react-router-dom";

import Logo from "../statics/logo.png";
import "../statics/iconfont/iconfont.css";
import * as action from "../redux/action";

const HeaderWrapper = styled.div`
  position: relative;
  height: 56px;
  border-bottom: 1px solid #f0f0f0;
`;
const HeaderLift = styled.div`
  position: absolute;
  left: 0;
  top: 0;
  img {
    width: 100px;
    height: 56px;
    background-size: contain;
  }
`;
const HeaderNav = styled.div`
  width: 960px;
  height: 100%;
  box-sizing: border-box;
  margin: 0 auto;
`;
const NavItem = styled.div`
  line-height: 56px;
  padding: 0 15px;
  font-size: 16px;
  color: #333;
  cursor: pointer;

  &.left {
    float: left;
  }
  &.right {
    float: right;
    color: #969696;
  }
`;
const HeaderRight = styled.div`
  position: absolute;
  right: 0;
  top: 0;
  height: 56px;
`;
const SearchWrapper = styled.div`
  float: left;
  position: relative;

  .iconfont {
    position: absolute;
    right: 5px;
    bottom: 5px;
    width: 30px;
    line-height: 30px;
    border-radius: 15px;
    text-align: center;
    &.focused {
      background: #777;
      color: #fff;
    }
  }
`;
const NavSearch = styled.input.attrs({
  placeholder: "搜索"
})`
  width: 160px;
  height: 38px;
  padding: 0 30px 0 20px;
  margin-top: 9px;
  margin-left: 20px;
  box-sizing: border-box;
  border: none;
  outline: none;
  border-radius: 19px;
  background: #eee;
  font-size: 14px;
  &::placeholder {
    color: #999;
  }
  &.focused {
    width: 240px;
  }
  &.slide-enter {
    transition: all 0.2s ease-out;
  }
  &.slide-enter-active {
    width: 240px;
  }
  &.slide-exit {
    transition: all 0.2s ease-out;
  }
  &.slide-exit-:active {
    width: 160px;
  }
`;
const Button = styled.div`
  float: right;
  line-height: 38px;
  margin-top: 9px;
  border: 1px solid #ec6149;
  margin-right: 20px;
  padding: 0 20px;
  border-radius: 19px;
  cursor: pointer;

  &.reg {
    color: #ec6149;
  }
  &.writting {
    color: #fff;
    background: #ec6149;
  }
`;

const SearchInfo = styled.div`
  z-index: 1;
  background: #fff;
  position: absolute;
  left: 0;
  top: 56px;
  width: 280px;
  padding: 0 20px;
  box-shadow: 0 0 8px rgba(0, 0, 0, 0.2);
`;
const SearchInfoTitle = styled.div`
  display: flex;
  font-size: 14px;
  color: #969696;
  justify-content: space-between;
  margin-top: 16px;
`;
const SearchInfoItem = styled.div`
  overflow: hidden;
  display: flex;
  flex-flow: wrap;
  margin-top: 15px;
  span {
    margin-bottom: 15px;
    margin-right: 10px;
    line-height: 20px;
    padding: 0 5px;
    font-size: 12px;
    border: 1px solid #ddd;
    color: #787878;
    cursor: pointer;
  }
`;

class Header extends Component {
  getListArea = show => {
    const {
      list,
      page,
      handleMouseEnter,
      handleMouseLeave,
      mouseIn,
      handleChangePage,
      totalPage
    } = this.props;
    const pageList = [];
    const newList = list;
    if (newList.length) {
      for (let i = (page - 1) * 10; i < page * 10; i++) {
        pageList.push(<span key={newList[i]}>{newList[i]}</span>);
      }
    }
    if (show || mouseIn) {
      return (
        <SearchInfo
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        >
          <SearchInfoTitle>
            <span>热门搜索</span>
            <span
              onClick={() => handleChangePage(page, totalPage)}
              style={{ cursor: "pointer" }}
            >
              换一批
            </span>
          </SearchInfoTitle>
          <SearchInfoItem>{pageList}</SearchInfoItem>
        </SearchInfo>
      );
    } else {
      return null;
    }
  };
  render() {
    return (
      <HeaderWrapper>
        <HeaderLift>
          <a href="/">
            <img src={Logo} alt="" />
          </a>
        </HeaderLift>
        <HeaderNav>
          <Link to="/">
            <NavItem className="left">首页</NavItem>
          </Link>
          <Link to="/download">
            <NavItem className="left">下载App</NavItem>
          </Link>
          <SearchWrapper>
            <CSSTransition
              in={this.props.focused}
              timeout={200}
              classNames="slide"
            >
              <NavSearch
                className={this.props.focused ? "focused" : ""}
                onFocus={this.props.bindleFocus}
                onBlur={this.props.bindleBlur}
              />
            </CSSTransition>
            <i className={this.props.focused ? "focused iconfont" : "iconfont"}>
              &#xe600;
            </i>
            {this.getListArea(this.props.focused)}
          </SearchWrapper>
          {this.props.Focused ? (
            <NavItem onClick={this.props.outFocused} className="right">
              退出
            </NavItem>
          ) : (
            <Link to="/login">
              <NavItem onClick={this.props.loginFocused} className="right">
                登录
              </NavItem>
            </Link>
          )}

          <NavItem className="right">
            <i className="iconfont">&#xe602;</i>
          </NavItem>
        </HeaderNav>
        <HeaderRight>
          <Link to="/write">
            <Button className="writting">
              <i className="iconfont">&#xe616;</i>
              写文章
            </Button>
          </Link>
          <Link to="/register">
            <Button className="reg">注册</Button>
          </Link>
        </HeaderRight>
      </HeaderWrapper>
    );
  }
}

const mapStateToProps = state => {
  return {
    focused: state.header.focused,
    list: state.header.list,
    page: state.header.page,
    mouseIn: state.header.mouseIn,
    totalPage: state.header.totalPage,
    Focused: state.login.focused
  };
};
const mapDispathToProps = dispatch => {
  return {
    bindleFocus() {
      dispatch(action.getList());
      dispatch(action.searchFocus());
    },
    bindleBlur() {
      dispatch(action.searchBlur());
    },
    handleMouseEnter() {
      dispatch(action.mouseEnter());
    },
    handleMouseLeave() {
      dispatch(action.mouseLeave());
    },
    handleChangePage(page, totalPage) {
      if (page < totalPage) {
        dispatch(action.changePage(page + 1));
      } else {
        dispatch(action.changePage(1));
      }
    },
    loginFocused() {
      dispatch(action.loginFocused());
    },
    outFocused() {
      dispatch(action.outFocused());
    }
  };
};

export default connect(
  mapStateToProps,
  mapDispathToProps
)(Header);
