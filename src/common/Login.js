import React, { Component } from "react";
import styled from "styled-components";
import { connect } from "react-redux";
import { Redirect } from "react-router-dom";
import * as action from "../redux/action";

const LoginWrapper = styled.div`
  width: 100%;
  height: 100%;
  min-height: 750px;
  font-size: 14px;
  text-align: center;
  background-color: #f1f1f1;
  display: flex;
  align-items: center;
  justify-content: center;
`;
const LoginLogin = styled.div`
  width: 400px;
  padding: 50px 50px 30px;
  background-color: #fff;
  border-radius: 4px;
  box-shadow: 0 0 8px rgba(0, 0, 0, 0.1);
  vertical-align: middle;
  display: inline-block;
  height: 300px;

  input {
    width: 100%;
    height: 50px;
    margin-bottom: 0;
    padding: 4px 12px 4px 35px;
    border: 1px solid #c8c8c8;
    border-radius: 0 0 4px 4px;
    background-color: hsla(0, 0%, 71%, 0.1);
    vertical-align: middle;
  }
  button {
    margin-top: 30px;
    width: 100%;
    padding: 9px 18px;
    font-size: 18px;
    border: none;
    border-radius: 25px;
    color: #fff;
    background: #42c02e;
    cursor: pointer;
    outline: none;
    display: block;
    clear: both;
  }
`;

class Login extends Component {
  render() {
    console.log("11", this.props);

    if (!this.props.focused) {
      return (
        <LoginWrapper>
          <LoginLogin>
            <input
              placeholder="账号"
              ref={input => {
                this.account = input;
              }}
            />
            <input
              placeholder="密码"
              type="password"
              ref={input => {
                this.password = input;
              }}
            />
            <button
              onClick={() =>
                this.props.bindleLogin(this.account, this.password)
              }
            >
              登录
            </button>
          </LoginLogin>
        </LoginWrapper>
      );
    } else {
      return <Redirect to="/" />;
    }
  }
}
const mapStateToProps = state => {
  return {
    focused: state.login.focused
  };
};
const mapDispacthToProps = dispacth => {
  return {
    bindleLogin(accountElm, passwordElm) {
      console.log(accountElm.value, passwordElm.value);
      dispacth(action.bindleLogin(accountElm.value, passwordElm.value));
    }
  };
};
export default connect(
  mapStateToProps,
  mapDispacthToProps
)(Login);
