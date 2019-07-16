import React, { Component } from "react";
import styled from "styled-components";
import { connect } from "react-redux";
import { Link } from "react-router-dom";

import * as action from "../redux/action";
import IMG from "../statics/22.jpg";
import IMG1 from "../statics/1.png";
import IMG2 from "../statics/2.png";
import IMG3 from "../statics/3.png";
import IMG4 from "../statics/4.png";
import IMG5 from "../statics/erweima.png";

const HomeWrappe = styled.div`
  width: 960px;
  margin: 0 auto;
  display: flex;
`;

const HomeLeft = styled.div`
  width: 650px;
  .img {
    margin-top: 30px;
    width: 625px;
    height: 270px;
    margin-bottom: 10px;
  }
`;

const HomeRight = styled.div`
  width: 300px;
`;
const HomeLeftList = styled.div`
  margin-top: 30px;
  width: 650px;
  display: flex;
`;
const HomeListLeft = styled.div`
  width: 460px;
`;
const HomeListLeftTitle = styled.div`
  display: inherit;
  font-size: 18px;
  font-weight: 700;
  line-height: 1.5;
`;
const HomeListLeftText = styled.div`
  margin: 0 0 8px;
  font-size: 13px;
  line-height: 24px;
  color: #999;
`;
const HomeListRight = styled.div`
  width: 180px;
  .img1 {
    width: 150px;
    height: 100px;
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
    background-color: RGB(241, 243, 244);
    border-radius: 4px;
    margin-left: 15px;
  }
`;

const HomeLeftBtn = styled.div`
  margin-top: 30px;
  width: 625px;
  height: 40px;
  line-height: 40px;
  border-radius: 20px;
  background-color: #a5a5a5;
  text-align: center;
  color: #fff;
  cursor: pointer;
`;
const HomeRightImg = styled.div`
  margin-top: 30px;
  img {
    width: 280px;
    height: 50px;
  }
`;
const TwoDimensionCode = styled.div`
  margin-top: 10px;
  padding: 10px;
  border: 1px solid #f0f0f0;
  width: 280px;
  height: 82px;
  img {
    position: absolute;
    width: 60px;
    height: 60px;
  }
  .text1 {
    margin-left: 70px;
    margin-top: 12px;
    margin-bottom: 8px;
  }
  .text2 {
    font-size: 14px;
    margin-left: 70px;
  }
`;
const HomeRightList = styled.div`
  width: 280px;
  position: relative;
  margin-top: 20px;
  .listTitle {
    width: 280px;
    display: flex;
    justify-content: space-between;
    margin-bottom: 20px;

    span {
      display: flex;
    }
  }
  .listList {
    display: flex;
    width: 280px;
    height: 48px;
    margin-bottom: 20px;
    .listImg {
      width: 48px;
      height: 48px;
      border: 1px solid #ddd;
      border-radius: 50%;
    }
    .listText {
      margin: 8px 0 0 8px;
      .text {
        font-size: 14px;
      }
      .text1 {
        margin-top: 6px;
        font-size: 12px;
        color: #969696;
      }
    }
  }
  .listGuanzhu {
    margin-top: 8px;
    position: absolute;
    right: 0;
    font-size: 13px;
    color: #42c02e;
    cursor: pointer;
  }
`;
const HomeRightBtn = styled.div`
  margin-top: 30px;
  width: 280px;
  height: 35px;
  line-height: 35px;
  border-radius: 5px;
  text-align: center;
  font-size: 13px;
  color: #787878;
  background-color: #f7f7f7;
  border: 1px solid #dcdcdc;
  border-radius: 4px;
  cursor: pointer;
`;
const BackTop = styled.div`
  position: fixed;
  right: 100px;
  bottom: 100px;
  width: 60px;
  height: 60px;
  line-height: 60px;
  border: 1px solid #ccc;
  font-size: 14px;
  text-align: center;
  cursor: pointer;
`;

class Home extends Component {
  componentDidMount = () => {
    this.props.newList();
    this.props.newList1();
    this.bindEvents();
  };
  componentWillUnmount() {
    window.removeEventListener("scroll", this.props.changeScrollTopShow);
  }
  bindEvents() {
    window.addEventListener("scroll", this.props.changeScrollTopShow);
  }
  handleScrollTop() {
    window.scrollTo(0, 0);
  }

  render() {
    const { getMoreList, page, list, list1, Show, getDetailList } = this.props;
    return (
      <HomeWrappe>
        <HomeLeft>
          <img className="img" src={IMG} alt="" />
          {list.map(item => {
            return (
              <Link
                key={item.id}
                style={{ color: "#333" }}
                to={"/detail/" + item.id}
              >
                <HomeLeftList onClick={getDetailList(item.id)}>
                  <HomeListLeft>
                    <HomeListLeftTitle>{item.title}</HomeListLeftTitle>
                    <HomeListLeftText>{item.desc}</HomeListLeftText>
                  </HomeListLeft>
                  <HomeListRight>
                    <img
                      className="img1"
                      src={require(`../statics/${item.imgUrl}`)}
                      alt=""
                    />
                  </HomeListRight>
                </HomeLeftList>
              </Link>
            );
          })}

          <HomeLeftBtn onClick={() => getMoreList(page)}>阅读更多</HomeLeftBtn>
        </HomeLeft>
        <HomeRight>
          <HomeRightImg>
            <img src={IMG1} alt="" />
            <img src={IMG2} alt="" />
            <img src={IMG3} alt="" />
            <img src={IMG4} alt="" />
          </HomeRightImg>
          <TwoDimensionCode>
            <img src={IMG5} alt="" />
            <div className="text1">下载简书App></div>
            <div className="text2">随时随的的发现和创造内容</div>
          </TwoDimensionCode>
          <HomeRightList>
            <div className="listTitle">
              <span>推荐作者</span>
              <span>换一批</span>
            </div>

            {list1.map(item => {
              return (
                <div className="listList" key={item.id}>
                  <img
                    className="listImg"
                    src={require(`../statics/touxiang/${item.imgUrl}`)}
                    alt=""
                  />
                  <div className="listText">
                    <div className="text">{item.title}</div>
                    <div className="text1">
                      写了{item.num}字，{item.num1}人喜欢
                    </div>
                  </div>
                  <div className="listGuanzhu">+关注</div>
                </div>
              );
            })}
          </HomeRightList>
          <HomeRightBtn>查看全部</HomeRightBtn>
        </HomeRight>
        {Show ? <BackTop onClick={this.handleScrollTop}>顶部</BackTop> : null}
      </HomeWrappe>
    );
  }
}

const mapStateToProps = state => {
  return {
    list: state.home.list,
    list1: state.home.list1,
    page: state.home.page,
    Show: state.home.Show
  };
};

const mapDispathToProps = dispatch => {
  return {
    newList() {
      dispatch(action.newList());
    },
    newList1() {
      dispatch(action.newList1());
    },
    getMoreList(page) {
      dispatch(action.getMoreList(page));
    },
    changeScrollTopShow() {
      if (document.documentElement.scrollTop > 100) {
        dispatch(action.changeScrollTopShow(true));
      } else {
        dispatch(action.changeScrollTopShow(false));
      }
    },
    getDetailList(id) {
      dispatch(action.getDetailList(id));
    }
  };
};

export default connect(
  mapStateToProps,
  mapDispathToProps
)(Home);
