import React from 'react'
import PureRenderMixin from 'react-addons-pure-render-mixin'
import Search from '../Search'
import './style.less'




class DetailHead extends React.Component {
  constructor(props, context) {
    super(props, context);
    this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this);
    this.state = {

    }
  }

  feedBack(){
    window.history.back();
  }

  render() {
    return (
      <div className="DetailHead out">
        <div className="DetailHead-lf lf" onClick={this.feedBack}>
          <i className="iconfont icon-return"></i>
        </div>
        <Search></Search>
      </div>
    )
  }
}



export default DetailHead