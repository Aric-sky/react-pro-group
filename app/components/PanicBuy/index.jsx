import React from 'react'
import PureRenderMixin from 'react-addons-pure-render-mixin'
import CountTime from '../../util/countTime.js'
import './style.less'


class PanicBuy extends React.Component {
  constructor(props, context) {
    super(props, context);
    this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this);
    this.state = {
      hour: 0,
      minute: 0,
      second: 0,
      interevalHock: ""
    }
  }
  componentDidMount() {
    let leftTime;
    let interevalHock = setInterval(function () {
      leftTime = CountTime.ShowCountDown(2018, 2, 11);
      if (leftTime) {
        this.setState({
          hour: leftTime.hour,
          minute: leftTime.minute,
          second: leftTime.second
        });
      }
    }.bind(this), 1000);
    this.setState({
      interevalHock: interevalHock
    })
  }
  componentWillUnmount() {
    //清楚定时器
    clearTimeout(this.state.interevalHock);
  }
  render() {
    return (
      <div className="PanicBuy clearfix">
        <div className="content-lf lf">
          <img src="https://gw.alicdn.com/tfs/TB1CIrZbL6H8KJjy0FjXXaXepXa-144-141.png" alt="images" />
        </div>
        <div className="content-rt rt">
          <dl>
            <dt>
              <b>一茶一坐</b>
              <span> ¥88 </span>
              <span className="discount">立减8元</span>
            </dt>
            <dd>距结束：
              <span>{this.state.hour}</span>：
              <span>{this.state.minute}</span>：
              <span>{this.state.second}</span>
            </dd>
          </dl>
        </div>
      </div>
    )
  }
}



export default PanicBuy