import React, { Component } from "react";
import styled from "styled-components";

const HomeWapper = styled.div`
  width: 960px;
  margin: auto;
  display: flex;
  color: ${props => props.color};
  .home-title {
    color: red;
    p {
      color: blue;
    }
  }
`;
const HomeLift = styled.div`
  margin-top: 30px;
  width: 650px;
`;

const HomeLiftImg = styled.div`
  img {
    width: 100%;
  }
`;

const HomeLifeList = styled.div``;

const HomeRight = styled.div``;

const HomeRightTag = styled.div``;

const HomeRightImg = styled.div``;

export default class HomePage extends Component {
  render() {
    return (
      <HomeWapper>
        <HomeLift>
          <HomeLiftImg>
            <img
              src="http://upload.jianshu.io/admin_banners/web_images/4660/224da83c76e01d5deff07e163615921233af5c82.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/1250/h/540"
              alt=""
            />
          </HomeLiftImg>
          <HomeLifeList>
            <ul>
              <li>qwqdqwd</li>
              <li>scdscdsc</li>
              <li>dcdscdc</li>
            </ul>
          </HomeLifeList>
        </HomeLift>
        <HomeRight>
          <HomeRightTag>标签</HomeRightTag>
          <HomeRightImg>图片</HomeRightImg>
        </HomeRight>
      </HomeWapper>
    );
  }
}
