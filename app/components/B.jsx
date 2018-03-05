import React from 'react'

class B extends React.Component {
    render() {
        return (
            <div>
                <p>{this.props.userinfo.city}</p>
                <p>{this.props.student.name}</p>
            </div>
        )
    }
}

export default B