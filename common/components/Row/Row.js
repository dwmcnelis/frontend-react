import React, { Component, PropTypes } from 'react'
import classNames from 'classnames'
import { flexBoxGridStyleSheet } from '../../styles/flexBoxGrid'

const RowType = PropTypes.oneOf(['xs', 'sm', 'md', 'lg'])
const rowKeys = ['start', 'center', 'end', 'top', 'middle', 'bottom', 'around', 'between', 'first', 'last']

function mergeClassNames (props, classes) {
  const classKeys = [classes.row]

  for (var key of rowKeys) {
    let value = props[key]
    if (value) {
      value = value.replace(/\b\w/g, l => l.toUpperCase())
      classKeys.push(classes[`${key}${value}`])
    }
  }

  if (props.reverse) {
    classKeys.push(classes.rowReverse)
  }

  return classNames(props.className, classKeys)
}

export default class Row extends Component {
  static propTypes = {
    around: RowType,
    between: RowType,
    bottom: RowType,
    center: RowType,
    children: PropTypes.node,
    className: PropTypes.string,
    end: RowType,
    first: RowType,
    last: RowType,
    middle: RowType,
    reverse: PropTypes.bool,
    start: RowType,
    tagName: PropTypes.string,
    top: RowType
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
    rowKeys.forEach(key => {
      delete rest[key]
    })

    const classes = this.context.styleManager.render(flexBoxGridStyleSheet)
    const Tag = `${tagName}`

    return (
      <Tag className={mergeClassNames(this.props, classes)} {...rest}>
        {children}
      </Tag>
    )
  }
}
