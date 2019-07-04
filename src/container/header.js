import React, { Component } from "react";
import { Input, Button } from "antd";
import Logo from "../statics/logo.png";
import styled from "styled-components";

const HeaderWapper = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  height: 56px;
  border-bottom: 1px solid #f0f0f0;
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
    border-radius: 18px;
    border: 1px solid #ec6149;
    color: #ec6149;
    padding: 0 15px;
    margin-right: 30px;
    height: 40px;
  }
  .btnLift {
    border-radius: 18px;
    padding: 0 15px;
    height: 40px;
    border: 1px solid #ec6149;
    margin-right: 30px;
    background: #ec6149;
    color: #fff;
  }
`;
const { Search } = Input;

export default class Header extends Component {
  render() {
    return (
      <HeaderWapper>
        <HeaderLift>
          <img className="headerImg" src={Logo} alt="" />
        </HeaderLift>
        <HeaderCentre>
          <HeaderCentreRight>
            <span>首页</span>
            <span>下载APP</span>
            <Button>ddd</Button>
            <Search
              placeholder="搜索"
              onSearch={value => console.log(value)}
              style={{ width: 300 }}
            />{" "}
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
