import React from 'react'
import PureRenderMixin from 'react-addons-pure-render-mixin'
import './style.less'


class LoadMore extends React.Component {
    constructor(props, context) {
        super(props, context);
        this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this);
    }
    loadHandle(){
        //调用父组件函数
        this.props.loadMoreFun();
    }
    componentDidMount() {
        const loadMoreFun = this.props.loadMoreFun;
        const wrapper = this.refs.wrapper;
        let timeOutId;

        function callBack(){
            const top = wrapper.getBoundingClientRect().top; // 元素距离顶部的距离
            const screenHeight = window.screen.height; // 视窗高度

            if (top && top < screenHeight) {
                console.log('零界点');
                loadMoreFun();
            }
        }

        window.addEventListener('scroll',function(){
            if (this.props.isLoadMore) {
                return
            }

            if (timeOutId) {
                clearTimeout(timeOutId);
            }
            timeOutId = setTimeout(callBack, 50);
        }.bind(this) , false)
    }
    render() {
        return (
            <div className="loadMoreCp">
            	{
            		this.props.loadMoreFun
            		? <div className="loadBtn" ref="wrapper" onClick={this.loadHandle.bind(this)}>加载更多</div>
            		: <div className="loadBtn">加载中。。。</div>
            	}
            </div>
        )
    }
}



export default LoadMore