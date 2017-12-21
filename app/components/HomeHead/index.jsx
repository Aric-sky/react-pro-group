import React from 'react'
import { hashHistory } from 'react-router'
import PureRenderMixin from 'react-addons-pure-render-mixin'
import './style.less'
import Search from '../Search/index.jsx'


class HeaderDom extends React.Component {
  constructor(props, context) {
    super(props, context);
    this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this);
  }
  cityClick(){
    //跳转至城市选择页面
    hashHistory.push('CityList');
  }
  render() {
    return (
      <div className="header-wrapper clearfix out">
        <div className="header-lf lf" onClick={this.cityClick}>
          <span className="cityName">{this.props.cityName} </span>
          <i className="iconfont icon-unfold"></i>
        </div>
        <div className="header-rt rt">
          <i className="iconfont icon-mine_fill"></i>
        </div>

        <Search></Search>

      </div>
    )
  }
}


export default HeaderDom

