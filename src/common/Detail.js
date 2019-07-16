import React, { Component } from "react";
import styled from "styled-components";
import { connect } from "react-redux";
import * as action from "../redux/action";

const DetailWrapper = styled.div`
  width: 625px;
  margin: 0 auto;
  img {
    width: 100%;
    margin: 30px 0;
  }
  p {
    font-size: 15px;
    line-height: 30px;
  }
`;
const DetailHeader = styled.div`
  margin-top: 50px;
  h1 {
    font-size: 25px;
    margin-bottom: 30px;
  }
`;
class Detail extends Component {
  componentWillUnmount() {
    this.props.unPage();
  }
  render() {
    return (
      <DetailWrapper>
        {this.props.list.map(item => {
          if (item.id === this.props.match.params.id) {
            return (
              <DetailHeader key={item.id}>
                <h1>{item.title}</h1>
                <img src={require(`../statics/${item.imgUrl}`)} alt="" />
                <p>{item.desc}</p>
              </DetailHeader>
            );
          } else {
            return null;
          }
        })}
      </DetailWrapper>
    );
  }
}
const mapStateToProps = state => {
  return {
    list: state.home.list,
    id: state.detail.id
  };
};

const mapDispathToProps = dispatch => {
  return {
    unPage() {
      dispatch(action.unPage());
    }
  };
};

export default connect(
  mapStateToProps,
  mapDispathToProps
)(Detail);
