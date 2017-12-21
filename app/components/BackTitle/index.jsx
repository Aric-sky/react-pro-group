import React from 'react'
import PureRenderMixin from 'react-addons-pure-render-mixin'
import './style.less'


class BackTitle extends React.Component {
    constructor(props, context) {
        super(props, context);
        this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this);
    }
    feedBack(){
        window.history.back();
    }
    render() {
        return (
            <div className="backTitle" onClick={this.feedBack}>
            	<i className="iconfont icon-return bkIcon"></i>
                <span>返回</span>
            </div>
        )
    }
}


module.exports = BackTitle