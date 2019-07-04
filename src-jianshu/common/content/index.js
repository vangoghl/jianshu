import React, { Component } from "react";
import axios from "axios";
import {
  ConstendWapper,
  ConstendLift,
  ConstendRight,
  ConstendList,
  ConstendTitle,
  ConstendImg,
  ConstenBtn,
  ConstendRightImg,
  ConstendQRcode,
  ConstendText,
  ConstendWriiter,
  WriterTitle,
  WriterConstend,
  WriterBtn
} from "./style";

class Content extends Component {
  constructor(props) {
    super(props);
    this.state = {
      list: [],
      urlList: []
    };
  }
  componentDidMount = () => {
    axios.get("/constendList.json").then(res => {
      const list = res.data;
      this.setState({
        list: list
      });
    });
    axios.get("/constendImgUrl.json").then(res => {
      const urlList = res.data;
      console.log(urlList);
      this.setState({
        urlList: urlList
      });
    });
  };

  render() {
    return (
      <ConstendWapper>
        <ConstendLift>
          <img
            className="ConstendLiftImg"
            src="http://upload.jianshu.io/admin_banners/web_images/4660/224da83c76e01d5deff07e163615921233af5c82.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/1250/h/540"
            alt=""
          />

          {this.state.list.map(item => {
            return (
              <ConstendList key={item.id}>
                <ConstendTitle>
                  <h1>{item.title}</h1>
                  <h4>{item.desc}</h4>
                </ConstendTitle>
                <ConstendImg>
                  <img className="constendImg" src={item.imgUrl} alt="" />
                </ConstendImg>
              </ConstendList>
            );
          })}
          <ConstenBtn>显示更多</ConstenBtn>
        </ConstendLift>
        <ConstendRight>
          <ConstendRightImg>
            {this.state.urlList.map(item => {
              return <img key={item.id} src={item.url} alt="" />;
            })}
          </ConstendRightImg>
          <ConstendQRcode>
            <img
              src="//cdn2.jianshu.io/assets/web/download-index-side-qrcode-cb13fc9106a478795f8d10f9f632fccf.png"
              alt=""
            />
            <ConstendText>
              <h1>下载简书手机App ></h1>
              <h2>随时随地发现和创作内容</h2>
            </ConstendText>
          </ConstendQRcode>
          <ConstendWriiter>
            <WriterTitle>
              <h1>推荐作者</h1>
              <h2>换一批</h2>
            </WriterTitle>
            <WriterConstend>
              <img
                src="//upload.jianshu.io/users/upload_avatars/4790772/388e473c-fe2f-40e0-9301-e357ae8f1b41.jpeg?imageMogr2/auto-orient/strip|imageView2/1/w/96/h/96/format/webp"
                alt=""
              />
              <h1>茶点故事</h1>
              <h2>写了456.9k字·11.8k喜欢</h2>
              <h3>+关注</h3>
            </WriterConstend>
            <WriterBtn>查看全部</WriterBtn>
          </ConstendWriiter>
        </ConstendRight>
      </ConstendWapper>
    );
  }
}

export default Content;
