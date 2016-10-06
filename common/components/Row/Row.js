import React, { Component, PropTypes } from 'react'
import classNames from 'classnames'
import { flexBoxGridStyleSheet } from '../../styles/flexBoxGrid'

const ModificatorType = PropTypes.oneOf(['xs', 'sm', 'md', 'lg'])
const modificatorKeys = ['start', 'center', 'end', 'top', 'middle', 'bottom', 'around', 'between', 'first', 'last']

function getClassNames (props, classes) {
  const modificators = [classes.row]

  for (let i = 0; i < modificatorKeys.length; ++i) {
    let key = modificatorKeys[i]
    let value = props[key]
    if (value) {
      value = value.replace(/\b\w/g, l => l.toUpperCase())
      modificators.push(classes[`${key}${value}`])
    }
  }

  if (props.reverse) {
    modificators.push(classes.rowReverse)
  }

  return classNames(props.className, modificators)
}

export default class Row extends Component {
  static propTypes = {
    reverse: PropTypes.bool,
    start: ModificatorType,
    center: ModificatorType,
    end: ModificatorType,
    top: ModificatorType,
    middle: ModificatorType,
    bottom: ModificatorType,
    around: ModificatorType,
    between: ModificatorType,
    first: ModificatorType,
    last: ModificatorType,
    className: PropTypes.string,
    tagName: PropTypes.string,
    children: PropTypes.node
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
      tagName
    } = this.props

    const classes = this.context.styleManager.render(flexBoxGridStyleSheet)
    var className = getClassNames(this.props, classes)
    const Tag = `${tagName}`

    return (
      <Tag className={className} >
        {children}
      </Tag>
    )
  }
}
