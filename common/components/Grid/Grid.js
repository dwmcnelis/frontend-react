import React, { Component, PropTypes } from 'react'
import classNames from 'classnames'
import { flexBoxGridStyleSheet } from '../../styles/flexBoxGrid'

function mergeClassNames (props, classes) {
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
    let {
      children,
      tagName,
      ...rest
    } = this.props
    delete rest['fluid']

    const classes = this.context.styleManager.render(flexBoxGridStyleSheet)
    const Tag = `${tagName}`

    return (
      <Tag className={mergeClassNames(this.props, classes)} {...rest}>
        {children}
      </Tag>
    )
  }
}
