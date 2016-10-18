import React, { Component, PropTypes } from 'react'
import classNames from 'classnames'
import { flexBoxGridStyleSheet } from '../../styles/flexBoxGrid'

const ColumnType = PropTypes.oneOfType([PropTypes.number, PropTypes.bool])
const columnKeys = ['xs', 'sm', 'md', 'lg', 'xsOffset', 'smOffset', 'mdOffset', 'lgOffset']

function mergeClassNames (props, classes) {
  const classKeys = []

  for (var key of columnKeys) {
    let value = props[key]
    if (value) {
      key = key.replace(/\b\w/g, l => l.toUpperCase())
      if (Number.isInteger(value)) {
        classKeys.push(classes[`col${key}${value}`])
      } else {
        classKeys.push(classes[`col${key}`])
      }
    }
  }

  if (props.reverse) {
    classKeys.push(classes.colReverse)
  }

  return classNames(props.className, classKeys)
}

export default class Col extends Component {
  static propTypes = {
    children: PropTypes.node,
    className: PropTypes.string,
    lg: ColumnType,
    lgOffset: PropTypes.number,
    md: ColumnType,
    mdOffset: PropTypes.number,
    reverse: PropTypes.bool,
    sm: ColumnType,
    smOffset: PropTypes.number,
    tagName: PropTypes.string,
    xs: ColumnType,
    xsOffset: PropTypes.number
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
    columnKeys.forEach(key => {
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
