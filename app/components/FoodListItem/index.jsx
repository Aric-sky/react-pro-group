import React from 'react'
import PureRenderMixin from 'react-addons-pure-render-mixin'
import './style.less'


class FoodListItem extends React.Component {
  constructor(props, context) {
    super(props, context);
    this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this);
  }
  render() {
    return (
      <div className="FoodListItem">
        <ul>
          {
            this.props.FoodData.map(function (value, index) {
              return <li key={index} className="clearfix item-box">
                <div className="item-lf lf">
                  <img src={value.img} alt="" />
                </div>
                <div className="item-rt rt">
                  <dl>
                    <dt className="point1">
                      {value.title}
                      ({value.subTitle})
            						</dt>
                    <dd className="point2">
                      人均价格：&yen;{value.price}
                    </dd>
                    <dd className="point3 clearfix">
                      {value.title}
                      <span className="rt">距离：{value.distance}</span>
                    </dd>
                  </dl>

                </div>
              </li>
            })
          }
        </ul>
      </div>
    )
  }
  componentWillMount() {
    console.log(this.props.FoodData, 'in child components');
  }
}



export default FoodListItem