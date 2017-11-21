import React from 'react'
import PureRenderMixin from 'react-addons-pure-render-mixin'
import {Row, Col, span, Button, Tree } from 'antd'
const TreeNode = Tree.TreeNode;

class Trees extends React.Component {
  constructor(props, context) {
    super(props, context);
    this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this);
    this.state = {
      AnimateType:[
        {'AttentionSeekers':['bounce','flash','pulse','rubberBand','shake','swing','tada','wobble','jello']},
        {'BouncingEntrances':['bounceIn','bounceInDown','bounceInLeft','bounceInRight','bounceInUp']},
        {'BouncingExits':['bounceOut','bounceOutDown','bounceOutLeft','bounceOutRight','bounceOutUp']},
        {'FadingEntrances':['fadeIn','fadeInDown','fadeInDownBig','fadeInLeft','fadeInLeftBig','fadeInRight','fadeInRightBig','fadeInUp','fadeInUpBig']},
        {'FadingExits':['fadeOut','fadeOutDown','fadeOutDownBig','fadeOutLeft','fadeOutLeftBig','fadeOutRight','fadeOutRightBig','fadeOutUp','fadeOutUpBig']},
        {'Flippers':['flipInX','flipInY','flipOutX','flipOutY'],
              'Lightspeed':['lightSpeedIn','lightSpeedOut']},
        {'RotatingEntrances':['rotateIn','rotateInDownLeft','rotateInDownRight','rotateInUpLeft','rotateInUpRight']},
        {'RotatingExits':['rotateOut','rotateOutDownLeft','rotateOutDownRight','rotateOutUpLeft','rotateOutUpRight']},
        {'SlidingEntrances':['slideInDown','slideInLeft','slideInRight','slideInUp']},
        {'SlidingExits':['slideOutDown','slideOutLeft','slideOutRight','slideOutUp']},
        {'Specials':['hinge','rollIn','rollOut']},
        {'ZoomEntrances':['zoomIn','zoomInDown','zoomInLeft','zoomInRight','zoomInUp']},
        {'ZoomExits':['zoomOut','zoomOutDown','zoomOutLeft','zoomOutRight','zoomOutUp']}
      ]
    }
  }

  onSelect(selectedKeys, info){
    console.log(info);
    this.props.TypeHandle(selectedKeys[0])
  }


  render() {
    return (
     <div>
       <h1>点击更改动画</h1>

      <Tree
      showLine
      defaultExpandedKeys={['0-0-0']}
      onSelect={this.onSelect.bind(this)}
      >
       {
        this.state.AnimateType.map((value, index) => {
          return <TreeNode title={Object.keys(value)} key={Object.keys(value)}>
            {Object.values(value)[0].map(function(val, key){
              return <TreeNode title={val} key={val} />
              })
            }
          </TreeNode>
        })
       }
      </Tree>
    </div>
    )
  }
}




export default Trees