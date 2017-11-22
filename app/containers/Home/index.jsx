import React from 'react'
import PureRenderMixin from 'react-addons-pure-render-mixin'
import PCIndex from '../../components/PC/pc_index.js';
import {connect} from 'react-redux'
import {Row, Col, span, Button, Card } from 'antd'



class Home extends React.Component {
  constructor(props, context) {
    super(props, context);
    this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this);
    this.state = {
      animateElem: ' '
    }

  };

  TypeHandle(value){
    this.setState({
      animateElem: value
    })
  };

  render() {
    return (
      <PCIndex></PCIndex>
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