import React from 'react'
import PureRenderMixin from 'react-addons-pure-render-mixin'
import {Row, Col, span, Button, Card, Calendar } from 'antd'



class Heads extends React.Component {
  constructor(props, context) {
    super(props, context);
    this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this);
    this.state = {
      useFun: "<div class='animated bounce infinite'>动画</div>"
    }
  }
  render() {
    return (
      <Row gutter={16} style={{'marginBottom': '20px'}}>
        <Col span={24}>
          <Card title="Animate.css" bordered={false}>
            <p><b>简介：</b>Animation.css是一个迷人的动画库，它提供了一堆很酷的，有趣的，跨浏览器的动画，你可以在项目中调用它们。</p>
            <p><b>使用方法：</b></p>
            <ul>
              <li>1、import 'animate.css' or use cdn('https://cdnjs.cloudflare.com/ajax/libs/animate.css/3.5.2/animate.min.css')</li>
              <li>2、{this.state.useFun}</li>
            </ul>
          </Card>
        </Col>
      </Row>
      )
  }
}




export default Heads