import React from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { hashHistory } from 'react-router'
import PureRenderMixin from 'react-addons-pure-render-mixin'
import BackTitle from '../../components/BackTitle'
import './style.less'
import CityNames from '../../static/data/cityData.js'
import * as userInfoActionsFromOtherFile from '../../actions/userinfo.js'



class CityList extends React.Component {
  constructor(props, context) {
    super(props, context);
    this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this);
    this.state = {
      citys: ['北京', '上海', '杭州', '广州', '深圳', '福建', '厦门', '海南', '苏州', '青岛', '老余杭', '西安'],
      cityNav: [],
      curIndex: 0,
      CityNames: CityNames
    }
  }
  changeCity(index) {
    this.setState({
      curIndex: index
    })

    //将城市信息存储到Redux中
    this.props.userInfoActions.update({
      cityName: this.state.citys[index]
    })
    //去首页
    hashHistory.push('/')
  }
  componentWillMount() {
    let data = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ', newData = [];
    for (var i = 0, len = data.length; i < len; i++) {
      newData.push(data[i])
    }
    this.setState({
      cityNav: newData
    })
  }
  componentDidMount() {
    console.log(this.props.userinfo);
  }

  render() {
    return (
      <div className="cityList">
        <BackTitle></BackTitle>
        <div className="cityDetail">
          <p className="gps">
            {
              this.props.userinfo
                ? this.props.userinfo.cityName
                : '杭州'
            }
            <span>GPS定位</span>
          </p>
          <p className="cityDetail-title">国内热门城市：</p>
          <ul className="clearfix hotCity">
            {
              this.state.citys.map(function (value, index) {
                return <li key={index} onClick={this.changeCity.bind(this, index)}>
                  <span className={value == this.props.userinfo.cityName ? "curIndex" : null}>{value}</span>
                </li>
              }.bind(this))
            }
          </ul>
          <ul className="cityNav">
            <li>热门</li>
            {
              this.state.cityNav.map(function (value, index) {
                return <li key={index}>{value}</li>
              })
            }
          </ul>
          <div className="cityGroup">
            {
              this.state.CityNames.provinces.map(function (value, index) {
                return <div key={index} className="cityGroup-wrapper">
                  <p>{value.provinceName}</p>
                  <ul>
                    {
                      value.citys.map((item, key) =>
                        <li key={key}>{item.citysName}</li>
                      )
                    }
                  </ul>
                </div>
              })
            }
          </div>
        </div>
      </div>
    )
  }
}


function mapStateToProps(state) {
  return {
    userinfo: state.userinfo
  }
}


function mapDisPatchToProps(dispatch) {
  return {
    userInfoActions: bindActionCreators(userInfoActionsFromOtherFile, dispatch)
  }
}


export default connect(
  mapStateToProps,
  mapDisPatchToProps
)(CityList)