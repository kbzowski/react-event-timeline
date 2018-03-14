import React, {Component} from 'react'
import PropTypes from 'prop-types'
import s from './styles'

class Timeline extends Component {
  render () {
    const { orientation = 'left', children, style = {}, ...otherProps } = this.props
	
	let filteredChildren = []
	if(Array.isArray(children))
		filteredChildren = children.filter(child => child !== null)
	else 
		filteredChildren = children
	
    const childrenWithProps = React.Children.map(filteredChildren, child => React.cloneElement(child, { orientation }))
    const leftOrRight = (orientation === 'right') ? {...s['containerBefore--right']} : {...s['containerBefore--left']}
    return (
      <div>
        <section style={{...s.container, ...style}} {...otherProps}>
          <div style={{...s.containerBefore, ...leftOrRight}} />
          {childrenWithProps}
          <div style={s.containerAfter} />
        </section >
      </div>
    )
  }
}

Timeline.propTypes = {
  children: PropTypes.node.isRequired,
  orientation: PropTypes.string,
  style: PropTypes.object
}

export default Timeline
