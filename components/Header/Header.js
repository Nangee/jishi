import React, { Component } from 'react';
import './App.css';
class Header extends Component {
  render() {
    return (
    	<div className="lheader">
      <div className="lheaderc">
        {/*头部中间左边部分*/}
        <div className="lheadercl">
        <b>School <span>Design</span></b>
        </div>
        <div className="lheadercr">
       <span>全国招生线</span>
       <div className="lp"><p>020-00000000</p></div>
        </div>
      </div>
      </div>
    );
  }
}

export default Header;
