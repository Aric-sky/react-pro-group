import React from 'react'
import PureRenderMixin from 'react-addons-pure-render-mixin'
import Header from '../../components/Heads'
import Trees from '../../components/Trees'
import {connect} from 'react-redux'
import {Row, Col, span, Button, Card } from 'antd'



class Home extends React.Component {
  constructor(props, context) {
    super(props, context);
    this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this);
    this.state = {
      animateElem: 'swing'
    }

  };

  TypeHandle(value){
    this.setState({
      animateElem: value
    })
  };

  render() {
    return (
      <div style={{ background: '#ECECEC', padding: '30px' }}>
        <Header></Header>
        <Card title="Animate Example" bordered={false}>
          <Row type="flex" justify="space-around" align="middle">
            <Col span={14}>
              <Row type="flex" justify="space-around" align="middle" >
                <Col span={10}>
                  <img src="https://gw.alicdn.com/tfs/TB1NrPjlMMPMeJjy1XdXXasrXXa-301-274.png" alt="" className={'animated infinite '+this.state.animateElem}/>
                </Col>
              </Row>
            </Col>
            <Col span={10}>
              <Trees TypeHandle={this.TypeHandle.bind(this)}></Trees>
            </Col>
          </Row>
        </Card>
      </div>
    )
  }

}



function mapStateToProps(state){
  return {
    animateType: state
  }
}

function mapDisPatchToProps(dispatch){
  return {}
}


export default connect(
  mapStateToProps,
  mapDisPatchToProps
)(Home)