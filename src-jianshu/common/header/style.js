import styled from "styled-components";
import LogoPic from "../../statics/logo.png";
export const HeaderWrapper = styled.div`
  position: relative;
  height: 56px;
  border-bottom: 1px solid #f0f0f0;
`;
export const Logo = styled.a`
  height: 56px;
  position: absolute;
  top: 0px;
  left: 0px;
  display: block;
  width: 100px;
  background: url(${LogoPic});
  background-size: contain;
`;
export const Nav = styled.div`
  height: 100%;
  width: 960px;
  margin: 0 auto;
`;
export const NavItem = styled.div`
  line-height: 56px;
  padding: 0 20px;
  font-size: 17px;
  color: #333;
  &.left {
    float: left;
  }
  &.right {
    color: #969696;
    float: right;
  }
  &.active {
    color: #ea6f5a;
  }
`;
export const NavSearch = styled.input.attrs({
  placeholder: "搜索"
})`
  background: #eee;
  width: 160px;
  height: 36px;
  border: none;
  outline: none;
  border-radius: 18px;
  margin-top: 10px;
  margin-left: 20px;
  padding: 0 20px;
  box-sizing: border-box;
  &::placeholder {
  }
  &.facused {
    width: 240px;
  }
`;
export const SearchInfo = styled.div`
  position: absolute;
  z-index: 1;
  background: #fff;
  top: 58px;
  width: 260px;
  box-shadow: 0 0 8px rgba(0, 0, 0, 0.2);
  left: 30%;
  border-radius: 6px;
  box-sizing: border-box;
`;
export const SearchInfoTitle = styled.div`
  margin-top: 20px;
  position: absolute;
  left: 20px;
  line-height: 20px;
  color: #969696;
`;
export const SearchInfoChange = styled.div`
  margin-top: 20px;
  position: absolute;
  right: 20px;
  line-height: 20px;
  color: #969696;
`;
export const SearchInfoItem = styled.div`
  float: left;
  margin: 10px 20px;
  padding: 0 8px;
  border: 1px solid #ddd;
  border-radius: 3px;
  line-height: 20px;
  color: #969696;
  font-size: 12px;
`;
export const SearchInfoList = styled.div`
  margin-top: 40px;

  overflow: hidden;
`;
export const Addition = styled.div`
  height: 56px;
  top: 0;
  position: absolute;
  right: 0;
`;
export const Button = styled.div`
  float: right;
  margin-top: 10px;
  margin-right: 20px;
  padding: 0 15px;
  line-height: 36px;
  border-radius: 18px;
  border: 1px solid #ec6149;
  &.reg {
    color: #ec6149;
  }
  &.writting {
    background: #ec6149;
    color: #fff;
  }
`;
