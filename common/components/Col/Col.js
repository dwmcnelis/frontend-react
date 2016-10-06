import React, { Component, PropTypes } from 'react'
import classNames from 'classnames'
import { flexBoxGridStyleSheet } from '../../styles/flexBoxGrid'

const ModificatorType = PropTypes.oneOfType([PropTypes.number, PropTypes.bool])
const modificatorKeys = ['xs', 'sm', 'md', 'lg', 'xsOffset', 'smOffset', 'mdOffset', 'lgOffset']

function getClassNames (props, classes) {
  const modificators = []

  for (let i = 0; i < modificatorKeys.length; ++i) {
    let key = modificatorKeys[i]
    let value = props[key]
    if (value) {
      key = key.replace(/\b\w/g, l => l.toUpperCase())
      if (Number.isInteger(value)) {
        modificators.push(classes[`col${key}${value}`])
      } else {
        modificators.push(classes[`col${key}`])
      }
    }
  }

  if (props.reverse) {
    modificators.push(classes.colReverse)
  }

  return classNames(props.className, modificators)
}


export default class Col extends Component {
  static propTypes = {
    xs: ModificatorType,
    sm: ModificatorType,
    md: ModificatorType,
    lg: ModificatorType,
    xsOffset: PropTypes.number,
    smOffset: PropTypes.number,
    mdOffset: PropTypes.number,
    lgOffset: PropTypes.number,
    reverse: PropTypes.bool,
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
      tagName,
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
