import React from 'react'
import PureRenderMixin from 'react-addons-pure-render-mixin'
import {connect} from 'react-redux'
import HomeHead from '../../components/HomeHead'
import SwipeContent from './subpage/swipe.jsx'
import PanicBuy from '../../components/PanicBuy'
import FoodList from './subpage/foodList.jsx'


class Home extends React.Component {
  constructor(props, context) {
    super(props, context);
    this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this);
  }

  render() {
    return (
      <div>
        <HomeHead cityName={this.props.userinfo.cityName} />
        <SwipeContent></SwipeContent>
        <PanicBuy></PanicBuy>
        <FoodList cityName={this.props.userinfo.cityName} />
      </div>
    )
  }

}



function mapStateToProps(state){
  return {
    userinfo: state.userinfo
  }
}

function mapDisPatchToProps(dispatch){
  return {}
}


export default connect(
  mapStateToProps,
  mapDisPatchToProps
)(Home)