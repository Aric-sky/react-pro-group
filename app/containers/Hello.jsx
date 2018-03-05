import React from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

import * as userinfoActions from '../redux/actions/userinfo'
import * as stuActions from '../redux/actions/student'

import A from '../components/A'
import B from '../components/B'
import C from '../components/C'


class Hello extends React.Component {
    render() {
        return (
            <div>
                <p>hello world</p>
                <hr/>
                <A userinfo={this.props.userinfo}/>
                <hr/>
                <B userinfo={this.props.userinfo} student = {this.props.student}/>
                <hr/>
                <C actions={this.props.userinfoActions} stu = {this.props.stuActions}/>
            </div>
        )
    }
    componentDidMount() {
        // 模拟登陆
        this.props.userinfoActions.login({
            userid: 'abc',
            city: 'beijing'
        })

        this.props.stuActions.getName({
            name: 'lilei'
        })
    }
}

function mapStateToProps(state) {
    return {
        userinfo: state.userinfo,
        student: state.student
    }
}

function mapDispatchToProps(dispatch) {
    return {
        userinfoActions: bindActionCreators(userinfoActions, dispatch),
        stuActions: bindActionCreators(stuActions, dispatch)        
    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Hello)