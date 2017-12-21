import React from 'react'
import PureRenderMixin from 'react-addons-pure-render-mixin'
import ReactSwipe from 'react-swipe'
import { Link } from 'react-router'

import './style.less'

class SwipeContent extends React.Component {
	constructor(props, context) {
		super(props, context);
		this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this);
		this.state = {
			index: 0,
			arr1: [
				{ title: '购物', img: 'iconfont icon-gouwu' },
				{ title: '学习', img: 'iconfont icon-xuexi3' },
				{ title: '健身', img: 'iconfont icon-jianshen1' },
				{ title: '培训', img: 'iconfont icon-peixun' },
				{ title: '外卖', img: 'iconfont icon-waimai' },
				{ title: '摄影', img: 'iconfont icon-sheying' },
				{ title: '电影', img: 'iconfont icon-movie' },
				{ title: '温泉', img: 'iconfont icon-wenquan' }
			],
			arr2: [
				{ title: '健身', img: 'iconfont icon-jianshen' },
				{ title: '家装', img: 'iconfont icon-jiazhuangjiancai' },
				{ title: '门票', img: 'iconfont icon-menpiao' },
				{ title: '饮料', img: 'iconfont icon-xuexi1' },
				{ title: 'IDear', img: 'iconfont icon-xuexi' },
				{ title: 'SPA', img: 'iconfont icon-spa' },
				{ title: 'Football', img: 'iconfont icon-paysport' },
				{ title: 'KTV', img: 'iconfont icon-baoji' }
			],
			arr3: [
				{ title: '游泳', img: 'iconfont icon-youyong' },
				{ title: '餐饮', img: 'iconfont icon-canyin' },
				{ title: 'outting', img: 'iconfont icon-shan' },
				{ title: 'outting04', img: 'iconfont icon-shan' },
				{ title: 'outting05', img: 'iconfont icon-shan' },
				{ title: 'outting06', img: 'iconfont icon-shan' },
				{ title: 'outting07', img: 'iconfont icon-shan' },
				{ title: 'outting08', img: 'iconfont icon-shan' }
			]
		}
	}

	showDetail(toPath) {
		console.log(toPath)
	}

	randomColor(){
		var r = Math.floor(Math.random()*255);
		var g = Math.floor(Math.random()*255);
		var b = Math.floor(Math.random()*255);
		return `rgb(${r}, ${g}, ${b})`
	}

	render() {
		const opt = {
			auto: 2500,
			callback: function (index) {
				// 更新当前轮播图的index
				this.setState({ index: index });
			}.bind(this)
		}
		return (<div className="swip-wrapper">
			<div className="SwipeContent">
				<ReactSwipe swipeOptions={opt}>
					<div className="carousel-item">
						<ul className="clearfix out">
							{this.state.arr1.map(function (value, index) {
								return <li key={index} >
								 <Link to={"/detail/"+value.title}>
									<dl>
										<dt style={{background: this.randomColor() || '#e4393c'}}>
											<i className={value.img}></i>
										</dt>
										<dd>{value.title}</dd>
									</dl>
									</Link>
								</li>
							}.bind(this))}
						</ul>
					</div>
					<div className="carousel-item">
						<ul className="clearfix out">
							{this.state.arr2.map(function (value, index) {
								return <li key={index}>
								 <Link to={"/detail/"+value.title}>
									<dl>
										<dt style={{background: this.randomColor() || '#e4393c'}}>
											<i className={value.img}></i>
										</dt>
										<dd>{value.title}</dd>
									</dl>
									</Link>
								</li>
							}.bind(this))}
						</ul>
					</div>
					<div className="carousel-item">
						<ul className="clearfix out">
							{this.state.arr3.map(function (value, index) {
								return <li key={index}>
								 <Link to={"/detail/"+value.title}>
									<dl>
										<dt style={{background: this.randomColor() || '#e4393c'}}>
											<i className={value.img} ></i>
										</dt>
										<dd>{value.title}</dd>
									</dl>
									</Link>
								</li>
							}.bind(this))}
						</ul>
					</div>
				</ReactSwipe>
			</div>
			<div className="swipePoint">
				<ul>
					<li className={this.state.index == 0 ? "selectd" : ""}></li>
					<li className={this.state.index == 1 ? "selectd" : ""}></li>
					<li className={this.state.index == 2 ? "selectd" : ""}></li>
				</ul>
			</div>

		</div>
		)
	}
}


export default SwipeContent