import React from 'react'
import PureRenderMixin from 'react-addons-pure-render-mixin'
import './style.less'




class Search extends React.Component {
  constructor(props, context) {
    super(props, context);
    this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this);
  }
  render() {
    return (
      <div className="Search out">
        <i className="iconfont icon-search"></i>
        <input type="text" placeholder="请输入内容" />
      </div>
    )
  }
}



export default Search