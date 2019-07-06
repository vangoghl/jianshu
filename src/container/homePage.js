import React, { Component } from "react";
import styled from "styled-components";
import axios from "axios";

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
  width: 610px;
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
  constructor(props) {
    super(props);
    this.state = {
      list: [],
      urlList: []
    };
  }

  componentDidMount = () => {
    axios.get("/constendList.json").then(res => {
      console.log(res);
      const newList = res.data;
      if (Array.isArray(newList)) {
        this.setState({
          list: newList
        });
      }
    });
    axios.get("/constendImgUrl.json").then(res => {
      const newUrlList = res.data;
      if (Array.isArray(newUrlList)) {
        this.setState({
          urlList: newUrlList
        });
      }
    });
  };
  render() {
    return (
      <HomeWapper>
        <HomeLift style={{ margin: 20 }}>
          <HomeLiftImg>
            <img
              src="http://upload.jianshu.io/admin_banners/web_images/4660/224da83c76e01d5deff07e163615921233af5c82.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/1250/h/540"
              alt=""
            />
          </HomeLiftImg>
          <HomeLifeList>
            {this.state.list.map(item => {
              return (
                <div
                  key={item.id}
                  style={{
                    display: "flex",
                    flexDirection: "row",
                    margin: "40px 0 10px 0",
                    borderBottom: "1px solid #f0f0f0"
                  }}
                >
                  <div>
                    <div
                      style={{
                        fontSize: 18,
                        fontWeight: 700,
                        margin: "8px 0 "
                      }}
                    >
                      {item.title}
                    </div>
                    <div>{item.desc}</div>
                  </div>
                  <div>
                    <img
                      style={{ width: 150, height: 100 }}
                      className="constendImg"
                      src={item.imgUrl}
                      alt=""
                    />
                  </div>
                </div>
              );
            })}
          </HomeLifeList>
          <button
            style={{ width: 610, height: 40, borderRadius: 20, marginTop: 20 }}
          >
            查看更多
          </button>
        </HomeLift>
        <HomeRight style={{ margin: 20 }}>
          <HomeRightTag>
            {this.state.urlList.map(item => {
              return (
                <img
                  style={{ width: 310, margin: 6 }}
                  key={item.id}
                  src={item.url}
                  alt=""
                />
              );
            })}{" "}
          </HomeRightTag>
          <HomeRightImg>
            <div
              style={{
                display: "flex",
                margin: "6px",
                width: 300,
                height: 80,
                border: "1px solid #f0f0f0",
                borderRadius: 6,
                backgroundColor: "#fff"
              }}
            >
              <img
                style={{ width: 60, height: 60 }}
                src="//cdn2.jianshu.io/assets/web/download-index-side-qrcode-cb13fc9106a478795f8d10f9f632fccf.png"
                alt=""
              />
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "center",
                  marginLeft: 10
                }}
              >
                <div>下载简书手机App ></div>
                <div>随时随地发现和创作内容</div>
              </div>
            </div>
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                padding: 10,
                fontSize: 14
              }}
            >
              <div style={{ fontSize: 16 }}>推荐作者</div>
              <div>换一批</div>
            </div>
            <div style={{ display: "flex", margin: 10 }}>
              <img
                style={{
                  width: 48,
                  height: 48,
                  border: "1px solid #ddd",
                  borderRadius: "50%"
                }}
                src="//upload.jianshu.io/users/upload_avatars/4790772/388e473c-fe2f-40e0-9301-e357ae8f1b41.jpeg?imageMogr2/auto-orient/strip|imageView2/1/w/96/h/96/format/webp"
                alt=""
              />
              <div
                style={{
                  flex: 1,
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "center",
                  marginLeft: 10
                }}
              >
                <div style={{ fontSize: 16 }}>茶点故事</div>
                <div>写了456.9k字·11.8k喜欢</div>
              </div>
              <div>+关注</div>
            </div>
            <button
              style={{
                width: 300,
                height: 30,
                borderRadius: 15,
                marginTop: 10
              }}
            >
              查看全部
            </button>
          </HomeRightImg>
        </HomeRight>
      </HomeWapper>
    );
  }
}
