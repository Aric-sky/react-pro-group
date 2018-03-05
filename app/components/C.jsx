import React from 'react'

class C extends React.Component {
    render() {
        return (
            <div>
                <button onClick={this.changeUserInfo.bind(this)}>修改</button>
                <button onClick={this.changeStu.bind(this)}>student change</button>
            </div>
        )
    }
    changeUserInfo() {
        const actions = this.props.actions
        actions.login({
            userid: '123',
            city: 'nanjing'
        })
    }
    changeStu(){
        const stuAction = this.props.stu
        stuAction.getName({
            name: 'han mm'
        })
    }
}

export default C