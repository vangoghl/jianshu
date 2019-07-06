import React, { Component } from "react";
import { Input } from "antd";
import Logo from "../statics/logo.png";
import styled from "styled-components";
import { NavLink } from "react-router-dom";
import axios from "axios";

const HeaderWapper = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  height: 56px;
  border-bottom: 1px solid #f0f0f0;
`;

const { Search } = Input;

const WrapSearch = styled(Search)`
  &.ant-input-affix-wrapper .ant-input:not(:last-child) {
    padding: 0 20px;
    border-radius: 20px;
    background: #eee;
  }
`;

const HeaderLift = styled.div`
  img {
    height: 56px;
    margin-right: 40px;
    background-size: contain;
  }
`;
const HeaderCentre = styled.div`
  width: 960px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: auto;
`;
const HeaderCentreRight = styled.div`
  span {
    margin-left: 30px;
  }
`;

const HeaderCentreLift = styled.div`
  span {
    margin-right: 30px;
  }
`;
const HeaderRight = styled.div`
  display: flex;
  .btnRight {
    width: 100px;
    height: 40px;
    margin: 0px 12px 0;
    border-radius: 20px;
    font-size: 15px;
    color: #fff;
    background-color: #ea6f5a;
  }
  .btnLift {
    width: 80px;
    height: 40px;
    margin: 0px 5px 0 15px;
    border: 1px solid rgba(236, 97, 73, 0.7);
    border-radius: 20px;
    font-size: 15px;
    color: #ea6f5a;
    background-color: transparent;
  }
`;
const SearchWrap = styled.div`
  position: absolute;
  z-index: 1;
  background: #fff;
  top: 60px;
  float: left;
  width: 260px;
  height: 200px;
  box-shadow: 0 0 8px rgba(0, 0, 0, 0.2);
  left: 366px;
  border-radius: 6px;
  box-sizing: border-box;
`;

export default class Header extends Component {
  constructor(props) {
    super(props);
    this.state = {
      focused: false,
      list: []
    };
  }
  componentDidMount = () => {
    axios.get("/list.json").then(res => {
      const newList = res.data;
      this.setState({
        list: newList
      });
    });
  };

  bindInputFocus = () => {
    let newFoused = true;
    this.setState({
      focused: newFoused
    });
  };
  bindInputBlur = () => {
    let newFoused = false;
    this.setState({
      focused: newFoused
    });
  };

  changeOnSearch = show => {
    if (show) {
      return (
        <SearchWrap>
          <div>
            <span>热门搜索</span>
            <span>换一批</span>
          </div>
          <div>
            {this.state.list.map((item, index) => {
              return <span key={index}>{item}</span>;
            })}
          </div>
        </SearchWrap>
      );
    }
  };
  render() {
    const url =
      "https://www.jianshu.com/apps?utm_medium=desktop&utm_source=navbar-apps";
    return (
      <HeaderWapper>
        <HeaderLift>
          <NavLink to="/home">
            <img className="headerImg" src={Logo} alt="" />
          </NavLink>
        </HeaderLift>
        <HeaderCentre>
          <HeaderCentreRight>
            <NavLink to="/home">
              <span>首页</span>
            </NavLink>
            <a href={url}>
              <span>下载APP</span>
            </a>
            <WrapSearch
              onFocus={this.bindInputFocus}
              onBlur={this.bindInputBlur}
              placeholder="搜索"
              onSearch={value => console.log(value)}
              style={this.state.focused ? { width: 260 } : { width: 200 }}
            />{" "}
            {this.changeOnSearch(this.state.focused)}
          </HeaderCentreRight>
          <HeaderCentreLift>
            <span>Aa</span>
            <span>登录</span>
          </HeaderCentreLift>
        </HeaderCentre>
        <HeaderRight>
          <button className="btnLift">注册</button>
          <button className="btnRight">写文章</button>
        </HeaderRight>
      </HeaderWapper>
    );
  }
}
