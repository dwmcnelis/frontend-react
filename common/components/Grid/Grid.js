import React, { Component, PropTypes } from 'react'
import classNames from 'classnames'
import { flexBoxGridStyleSheet } from '../../styles/flexBoxGrid'

function getClassNames (props, classes) {
  return classNames({
    [classes.container]: !props.fluid,
    [classes.containerFluid]: props.fluid
  }, props.className)
}

export default class Grid extends Component {
  static propTypes = {
    children: PropTypes.node,
    className: PropTypes.string,
    fluid: PropTypes.bool,
    tagName: PropTypes.string
  }

  static defaultProps = {
    tagName: 'div'
  }

  static contextTypes = {
    styleManager: PropTypes.object.isRequired
  }

  render () {
    const {
      children,
      tagName,
    } = this.props

    const classes = this.context.styleManager.render(flexBoxGridStyleSheet)
    const className = getClassNames(this.props, classes)
    const Tag = `${tagName}`

    return (
      <Tag className={className} >
        {children}
      </Tag>
    )
  }
}
