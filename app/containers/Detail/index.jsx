import React from 'react'
import PureRenderMixin from 'react-addons-pure-render-mixin'
import DetailHead from '../../components/DetailHead'
import './style.less'




class Detail extends React.Component {
  constructor(props, context) {
    super(props, context);
    this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this);
  }
  componentWillMount(){
    console.log(this.props.params.category)
    
  }

  render() {
    return (
      <div className="Detail">
        <DetailHead></DetailHead>
        <h2>
          you are in {this.props.params.category}
        </h2>
      </div>
    )
  }
}



export default Detail