import React from 'react'
import PureRenderMixin from 'react-addons-pure-render-mixin'
import FoodListItem from '../../../components/FoodListItem'
import FoodListData from '../../../../mock/search/list.js'
import LoadMore from '../../../components/LoadMore'
import { getListData } from '../../../fetch/home/home'

// import './style.less'


class FoodList extends React.Component {
  constructor(props, context) {
    super(props, context);
    this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this);
    this.state = {
      FoodListData: [],
      hasMore: false,
      isLoadMore: false,
      page: 0
    }
  }
  render() {
    return (
      <div className="FoodList">

        {
          this.state.FoodListData
            ? <FoodListItem FoodData={this.state.FoodListData} />
            : <div>loading...... </div>
        }

        {
          this.state.hasMore
            ? <LoadMore isLoadMore={this.state.isLoadMore} loadMoreFun={this.loadMoreFun.bind(this)} />
            : " "
        }
      </div>
    )
  }
  componentDidMount() {

    //初始化时，加载数据
    this.requestHandle(this.props.cityName, 0);

  }
  //按钮点击，加载更多
  loadMoreFun() {
    // 记录状态
    this.setState({ isLoadMore: true })

    let pageNum = this.page + 1;
    let addressStr = this.props.cityName;
    this.requestHandle(addressStr, pageNum);

    // 增加 page
    this.setState({
      page: pageNum,
      isLoadMore: false
    })
  }

  //请求数据，统一操作
  requestHandle(address, page) {

    getListData(address, page).then(data => {
      return data.json()
    }).then(data2 => {

      this.setState({
        hasMore: data2.hasMore,
        FoodListData: this.state.FoodListData.concat(data2.data)
      });
    });
  }
}



export default FoodList