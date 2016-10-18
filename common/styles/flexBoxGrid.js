import { createStyleSheet } from 'jss-theme-reactor'

export const flexBoxGridStyleSheet = createStyleSheet('FlexBoxGrid', (theme) => {
  const container = {
    'margin-right': 'auto',
    'margin-left': 'auto'
  }
  const column = {
    'box-sizing': 'border-box',
    '-webkit-box-flex': '0',
    '-ms-flex': '0 0 auto',
    'flex': '0 0 auto',
    'padding-right': '0.5rem',
    'padding-left': '0.5rem'
  }

  return {
    container: {
      ...container
    },
    containerFluid: {
      'margin-right': 'auto',
      'margin-left': 'auto',
      'padding-right': '2rem !important',
      'padding-left': '2rem !important'
    },
    row: {
      'box-sizing': 'border-box',
      'display': 'flex',
      '-webkit-box-flex': '0',
      '-ms-flex': '0 1 auto',
      'flex': '0 1 auto',
      '-webkit-box-orient': 'horizontal',
      '-webkit-box-direction': 'normal',
      '-ms-flex-direction': 'row',
      'flex-direction': 'row',
      '-ms-flex-wrap': 'wrap',
      'flex-wrap': 'wrap',
      'margin-right': '-0.5rem',
      'margin-left': '-0.5rem'
    },
    rowReverse: {
      '-webkit-box-orient': 'horizontal',
      '-webkit-box-direction': 'reverse',
      '-ms-flex-direction': 'row-reverse',
      'flex-direction': 'row-reverse'
    },
    colReverse: {
      '-webkit-box-orient': 'vertical',
      '-webkit-box-direction': 'reverse',
      '-ms-flex-direction': 'column-reverse',
      'flex-direction': 'column-reverse'
    },
    colXs: {
      ...column,
      '-webkit-box-flex': '1',
      '-ms-flex-positive': '1',
      'flex-grow': '1',
      '-ms-flex-preferred-size': '0',
      'flex-basis': '0',
      'max-width': '100%'
    },
    colXs1: {
      ...column,
      '-ms-flex-preferred-size': '8.33333333%',
      'flex-basis': '8.33333333%',
      'max-width': '8.33333333%'
    },
    colXs2: {
      ...column,
      '-ms-flex-preferred-size': '16.66666667%',
      'flex-basis': '16.66666667%',
      'max-width': '16.66666667%'
    },
    colXs3: {
      ...column,
      '-ms-flex-preferred-size': '25%',
      'flex-basis': '25%',
      'max-width': '25%'
    },
    colXs4: {
      ...column,
      '-ms-flex-preferred-size': '33.33333333%',
      'flex-basis': '33.33333333%',
      'max-width': '33.33333333%'
    },
    colXs5: {
      ...column,
      '-ms-flex-preferred-size': '41.66666667%',
      'flex-basis': '41.66666667%',
      'max-width': '41.66666667%'
    },
    colXs6: {
      ...column,
      '-ms-flex-preferred-size': '50%',
      'flex-basis': '50%',
      'max-width': '50%'
    },
    colXs7: {
      ...column,
      '-ms-flex-preferred-size': '58.33333333%',
      'flex-basis': '58.33333333%',
      'max-width': '58.33333333%'
    },
    colXs8: {
      ...column,
      '-ms-flex-preferred-size': '66.66666667%',
      'flex-basis': '66.66666667%',
      'max-width': '66.66666667%'
    },
    colXs9: {
      ...column,
      '-ms-flex-preferred-size': '75%',
      'flex-basis': '75%',
      'max-width': '75%'
    },
    colXs10: {
      ...column,
      '-ms-flex-preferred-size': '83.33333333%',
      'flex-basis': '83.33333333%',
      'max-width': '83.33333333%'
    },
    colXs11: {
      ...column,
      '-ms-flex-preferred-size': '91.66666667%',
      'flex-basis': '91.66666667%',
      'max-width': '91.66666667%'
    },
    colXs12: {
      ...column,
      '-ms-flex-preferred-size': '100%',
      'flex-basis': '100%',
      'max-width': '100%'
    },
    colXsOffset0: {
      ...column,
      'margin-left': '0'
    },
    colXsOffset1: {
      ...column,
      'margin-left': '8.33333333%'
    },
    colXsOffset2: {
      ...column,
      'margin-left': '16.66666667%'
    },
    colXsOffset3: {
      ...column,
      'margin-left': '25%'
    },
    colXsOffset4: {
      ...column,
      'margin-left': '33.33333333%'
    },
    colXsOffset5: {
      ...column,
      'margin-left': '41.66666667%'
    },
    colXsOffset6: {
      ...column,
      'margin-left': '50%'
    },
    colXsOffset7: {
      ...column,
      'margin-left': '58.33333333%'
    },
    colXsOffset8: {
      ...column,
      'margin-left': '66.66666667%'
    },
    colXsOffset9: {
      ...column,
      'margin-left': '75%'
    },
    colXsOffset10: {
      ...column,
      'margin-left': '83.33333333%'
    },
    colXsOffset11: {
      ...column,
      'margin-left': '91.66666667%'
    },
    colXsOffset12: {
      ...column
    },
    startXs: {
      '-webkit-box-pack': 'start',
      '-ms-flex-pack': 'start',
      'justify-content': 'flex-start',
      'text-align': 'start'
    },
    centerXs: {
      '-webkit-box-pack': 'center',
      '-ms-flex-pack': 'center',
      'justify-content': 'center',
      'text-align': 'center'
    },
    endXs: {
      '-webkit-box-pack': 'end',
      '-ms-flex-pack': 'end',
      'justify-content': 'flex-end',
      'text-align': 'end'
    },
    topXs: {
      '-webkit-box-align': 'start',
      '-ms-flex-align': 'start',
      'align-items': 'flex-start'
    },
    middleXs: {
      '-webkit-box-align': 'center',
      '-ms-flex-align': 'center',
      'align-items': 'center'
    },
    bottomXs: {
      '-webkit-box-align': 'end',
      '-ms-flex-align': 'end',
      'align-items': 'flex-end'
    },
    aroundXs: {
      '-ms-flex-pack': 'distribute',
      'justify-content': 'space-around'
    },
    betweenXs: {
      '-webkit-box-pack': 'justify',
      '-ms-flex-pack': 'justify',
      'justify-content': 'space-between'
    },
    firstXs: {
      '-webkit-box-ordinal-group': '0',
      '-ms-flex-order': '-1',
      'order': '-1'
    },
    lastXs: {
      '-webkit-box-ordinal-group': '2',
      '-ms-flex-order': '1',
      'order': '1'
    },
    '@media only screen and (min-width: 48em)': {
      container: {
        ...container,
        'width': '49rem'
      },
      colSm: {
        ...column,
        '-webkit-box-flex': '1',
        '-ms-flex-positive': '1',
        'flex-grow': '1',
        '-ms-flex-preferred-size': '0',
        'flex-basis': '0',
        'max-width': '100%'
      },
      colSm1: {
        ...column,
        '-ms-flex-preferred-size': '8.33333333%',
        'flex-basis': '8.33333333%',
        'max-width': '8.33333333%'
      },
      colSm2: {
        ...column,
        '-ms-flex-preferred-size': '16.66666667%',
        'flex-basis': '16.66666667%',
        'max-width': '16.66666667%'
      },
      colSm3: {
        ...column,
        '-ms-flex-preferred-size': '25%',
        'flex-basis': '25%',
        'max-width': '25%'
      },
      colSm4: {
        ...column,
        '-ms-flex-preferred-size': '33.33333333%',
        'flex-basis': '33.33333333%',
        'max-width': '33.33333333%'
      },
      colSm5: {
        ...column,
        '-ms-flex-preferred-size': '41.66666667%',
        'flex-basis': '41.66666667%',
        'max-width': '41.66666667%'
      },
      colSm6: {
        ...column,
        '-ms-flex-preferred-size': '50%',
        'flex-basis': '50%',
        'max-width': '50%'
      },
      colSm7: {
        ...column,
        '-ms-flex-preferred-size': '58.33333333%',
        'flex-basis': '58.33333333%',
        'max-width': '58.33333333%'
      },
      colSm8: {
        ...column,
        '-ms-flex-preferred-size': '66.66666667%',
        'flex-basis': '66.66666667%',
        'max-width': '66.66666667%'
      },
      colSm9: {
        ...column,
        '-ms-flex-preferred-size': '75%',
        'flex-basis': '75%',
        'max-width': '75%'
      },
      colSm10: {
        ...column,
        '-ms-flex-preferred-size': '83.33333333%',
        'flex-basis': '83.33333333%',
        'max-width': '83.33333333%'
      },
      colSm11: {
        ...column,
        '-ms-flex-preferred-size': '91.66666667%',
        'flex-basis': '91.66666667%',
        'max-width': '91.66666667%'
      },
      colSm12: {
        ...column,
        '-ms-flex-preferred-size': '100%',
        'flex-basis': '100%',
        'max-width': '100%'
      },
      colSmOffset0: {
        ...column,
        'margin-left': '0'
      },
      colSmOffset1: {
        ...column,
        'margin-left': '8.33333333%'
      },
      colSmOffset2: {
        ...column,
        'margin-left': '16.66666667%'
      },
      colSmOffset3: {
        ...column,
        'margin-left': '25%'
      },
      colSmOffset4: {
        ...column,
        'margin-left': '33.33333333%'
      },
      colSmOffset5: {
        ...column,
        'margin-left': '41.66666667%'
      },
      colSmOffset6: {
        ...column,
        'margin-left': '50%'
      },
      colSmOffset7: {
        ...column,
        'margin-left': '58.33333333%'
      },
      colSmOffset8: {
        ...column,
        'margin-left': '66.66666667%'
      },
      colSmOffset9: {
        ...column,
        'margin-left': '75%'
      },
      colSmOffset10: {
        ...column,
        'margin-left': '83.33333333%'
      },
      colSmOffset11: {
        ...column,
        'margin-left': '91.66666667%'
      },
      colSmOffset12: {
        ...column
      },
      startSm: {
        '-webkit-box-pack': 'start',
        '-ms-flex-pack': 'start',
        'justify-content': 'flex-start',
        'text-align': 'start'
      },
      centerSm: {
        '-webkit-box-pack': 'center',
        '-ms-flex-pack': 'center',
        'justify-content': 'center',
        'text-align': 'center'
      },
      endSm: {
        '-webkit-box-pack': 'end',
        '-ms-flex-pack': 'end',
        'justify-content': 'flex-end',
        'text-align': 'end'
      },
      topSm: {
        '-webkit-box-align': 'start',
        '-ms-flex-align': 'start',
        'align-items': 'flex-start'
      },
      middleSm: {
        '-webkit-box-align': 'center',
        '-ms-flex-align': 'center',
        'align-items': 'center'
      },
      bottomSm: {
        '-webkit-box-align': 'end',
        '-ms-flex-align': 'end',
        'align-items': 'flex-end'
      },
      aroundSm: {
        '-ms-flex-pack': 'distribute',
        'justify-content': 'space-around'
      },
      betweenSm: {
        '-webkit-box-pack': 'justify',
        '-ms-flex-pack': 'justify',
        'justify-content': 'space-between'
      },
      firstSm: {
        '-webkit-box-ordinal-group': '0',
        '-ms-flex-order': '-1',
        'order': '-1'
      },
      lastSm: {
        '-webkit-box-ordinal-group': '2',
        '-ms-flex-order': '1',
        'order': '1'
      }
    },
    '@media only screen and (min-width: 64em)': {
      container: {
        ...container,
        'width': '65rem'
      },
      colMd: {
        ...column,
        '-webkit-box-flex': '1',
        '-ms-flex-positive': '1',
        'flex-grow': '1',
        '-ms-flex-preferred-size': '0',
        'flex-basis': '0',
        'max-width': '100%'
      },
      colMd1: {
        ...column,
        '-ms-flex-preferred-size': '8.33333333%',
        'flex-basis': '8.33333333%',
        'max-width': '8.33333333%'
      },
      colMd2: {
        ...column,
        '-ms-flex-preferred-size': '16.66666667%',
        'flex-basis': '16.66666667%',
        'max-width': '16.66666667%'
      },
      colMd3: {
        ...column,
        '-ms-flex-preferred-size': '25%',
        'flex-basis': '25%',
        'max-width': '25%'
      },
      colMd4: {
        ...column,
        '-ms-flex-preferred-size': '33.33333333%',
        'flex-basis': '33.33333333%',
        'max-width': '33.33333333%'
      },
      colMd5: {
        ...column,
        '-ms-flex-preferred-size': '41.66666667%',
        'flex-basis': '41.66666667%',
        'max-width': '41.66666667%'
      },
      colMd6: {
        ...column,
        '-ms-flex-preferred-size': '50%',
        'flex-basis': '50%',
        'max-width': '50%'
      },
      colMd7: {
        ...column,
        '-ms-flex-preferred-size': '58.33333333%',
        'flex-basis': '58.33333333%',
        'max-width': '58.33333333%'
      },
      colMd8: {
        ...column,
        '-ms-flex-preferred-size': '66.66666667%',
        'flex-basis': '66.66666667%',
        'max-width': '66.66666667%'
      },
      colMd9: {
        ...column,
        '-ms-flex-preferred-size': '75%',
        'flex-basis': '75%',
        'max-width': '75%'
      },
      colMd10: {
        ...column,
        '-ms-flex-preferred-size': '83.33333333%',
        'flex-basis': '83.33333333%',
        'max-width': '83.33333333%'
      },
      colMd11: {
        ...column,
        '-ms-flex-preferred-size': '91.66666667%',
        'flex-basis': '91.66666667%',
        'max-width': '91.66666667%'
      },
      colMd12: {
        ...column,
        '-ms-flex-preferred-size': '100%',
        'flex-basis': '100%',
        'max-width': '100%'
      },
      colMdOffset0: {
        ...column,
        'margin-left': '0'
      },
      colMdOffset1: {
        ...column,
        'margin-left': '8.33333333%'
      },
      colMdOffset2: {
        ...column,
        'margin-left': '16.66666667%'
      },
      colMdOffset3: {
        ...column,
        'margin-left': '25%'
      },
      colMdOffset4: {
        ...column,
        'margin-left': '33.33333333%'
      },
      colMdOffset5: {
        ...column,
        'margin-left': '41.66666667%'
      },
      colMdOffset6: {
        ...column,
        'margin-left': '50%'
      },
      colMdOffset7: {
        ...column,
        'margin-left': '58.33333333%'
      },
      colMdOffset8: {
        ...column,
        'margin-left': '66.66666667%'
      },
      colMdOffset9: {
        ...column,
        'margin-left': '75%'
      },
      colMdOffset10: {
        ...column,
        'margin-left': '83.33333333%'
      },
      colMdOffset12: {
        ...column
      },
      startMd: {
        '-webkit-box-pack': 'start',
        '-ms-flex-pack': 'start',
        'justify-content': 'flex-start',
        'text-align': 'start'
      },
      centerMd: {
        '-webkit-box-pack': 'center',
        '-ms-flex-pack': 'center',
        'justify-content': 'center',
        'text-align': 'center'
      },
      endMd: {
        '-webkit-box-pack': 'end',
        '-ms-flex-pack': 'end',
        'justify-content': 'flex-end',
        'text-align': 'end'
      },
      topMd: {
        '-webkit-box-align': 'start',
        '-ms-flex-align': 'start',
        'align-items': 'flex-start'
      },
      middleMd: {
        '-webkit-box-align': 'center',
        '-ms-flex-align': 'center',
        'align-items': 'center'
      },
      bottomMd: {
        '-webkit-box-align': 'end',
        '-ms-flex-align': 'end',
        'align-items': 'flex-end'
      },
      aroundMd: {
        '-ms-flex-pack': 'distribute',
        'justify-content': 'space-around'
      },
      betweenMd: {
        '-webkit-box-pack': 'justify',
        '-ms-flex-pack': 'justify',
        'justify-content': 'space-between'
      },
      firstMd: {
        '-webkit-box-ordinal-group': '0',
        '-ms-flex-order': '-1',
        'order': '-1'
      },
      lastMd: {
        '-webkit-box-ordinal-group': '2',
        '-ms-flex-order': '1',
        'order': '1'
      }
    },
    '@media only screen and (min-width: 75em)': {
      container: {
        ...container,
        'width': '76rem'
      },
      colLg: {
        ...column,
        '-webkit-box-flex': '1',
        '-ms-flex-positive': '1',
        'flex-grow': '1',
        '-ms-flex-preferred-size': '0',
        'flex-basis': '0',
        'max-width': '100%'
      },
      colLg1: {
        ...column,
        '-ms-flex-preferred-size': '8.33333333%',
        'flex-basis': '8.33333333%',
        'max-width': '8.33333333%'
      },
      colLg2: {
        ...column,
        '-ms-flex-preferred-size': '16.66666667%',
        'flex-basis': '16.66666667%',
        'max-width': '16.66666667%'
      },
      colLg3: {
        ...column,
        '-ms-flex-preferred-size': '25%',
        'flex-basis': '25%',
        'max-width': '25%'
      },
      colLg4: {
        ...column,
        '-ms-flex-preferred-size': '33.33333333%',
        'flex-basis': '33.33333333%',
        'max-width': '33.33333333%'
      },
      colLg5: {
        ...column,
        '-ms-flex-preferred-size': '41.66666667%',
        'flex-basis': '41.66666667%',
        'max-width': '41.66666667%'
      },
      colLg6: {
        ...column,
        '-ms-flex-preferred-size': '50%',
        'flex-basis': '50%',
        'max-width': '50%'
      },
      colLg7: {
        ...column,
        '-ms-flex-preferred-size': '58.33333333%',
        'flex-basis': '58.33333333%',
        'max-width': '58.33333333%'
      },
      colLg8: {
        ...column,
        '-ms-flex-preferred-size': '66.66666667%',
        'flex-basis': '66.66666667%',
        'max-width': '66.66666667%'
      },
      colLg9: {
        ...column,
        '-ms-flex-preferred-size': '75%',
        'flex-basis': '75%',
        'max-width': '75%'
      },
      colLg10: {
        ...column,
        '-ms-flex-preferred-size': '83.33333333%',
        'flex-basis': '83.33333333%',
        'max-width': '83.33333333%'
      },
      colLg11: {
        ...column,
        '-ms-flex-preferred-size': '91.66666667%',
        'flex-basis': '91.66666667%',
        'max-width': '91.66666667%'
      },
      colLg12: {
        ...column,
        '-ms-flex-preferred-size': '100%',
        'flex-basis': '100%',
        'max-width': '100%'
      },
      colLgOffset0: {
        ...column,
        'margin-left': '0'
      },
      colLgOffset1: {
        ...column,
        'margin-left': '8.33333333%'
      },
      colLgOffset2: {
        ...column,
        'margin-left': '16.66666667%'
      },
      colLgOffset3: {
        ...column,
        'margin-left': '25%'
      },
      colLgOffset4: {
        ...column,
        'margin-left': '33.33333333%'
      },
      colLgOffset5: {
        ...column,
        'margin-left': '41.66666667%'
      },
      colLgOffset6: {
        ...column,
        'margin-left': '50%'
      },
      colLgOffset7: {
        ...column,
        'margin-left': '58.33333333%'
      },
      colLgOffset8: {
        ...column,
        'margin-left': '66.66666667%'
      },
      colLgOffset9: {
        ...column,
        'margin-left': '75%'
      },
      colLgOffset10: {
        ...column,
        'margin-left': '83.33333333%'
      },
      colLgOffset11: {
        ...column,
        'margin-left': '91.66666667%'
      },
      colLgOffset12: {
        ...column
      },
      startLg: {
        '-webkit-box-pack': 'start',
        '-ms-flex-pack': 'start',
        'justify-content': 'flex-start',
        'text-align': 'start'
      },
      centerLg: {
        '-webkit-box-pack': 'center',
        '-ms-flex-pack': 'center',
        'justify-content': 'center',
        'text-align': 'center'
      },
      endLg: {
        '-webkit-box-pack': 'end',
        '-ms-flex-pack': 'end',
        'justify-content': 'flex-end',
        'text-align': 'end'
      },
      topLg: {
        '-webkit-box-align': 'start',
        '-ms-flex-align': 'start',
        'align-items': 'flex-start'
      },
      middleLg: {
        '-webkit-box-align': 'center',
        '-ms-flex-align': 'center',
        'align-items': 'center'
      },
      bottomLg: {
        '-webkit-box-align': 'end',
        '-ms-flex-align': 'end',
        'align-items': 'flex-end'
      },
      aroundLg: {
        '-ms-flex-pack': 'distribute',
        'justify-content': 'space-around'
      },
      betweenLg: {
        '-webkit-box-pack': 'justify',
        '-ms-flex-pack': 'justify',
        'justify-content': 'space-between'
      },
      firstLg: {
        '-webkit-box-ordinal-group': '0',
        '-ms-flex-order': '-1',
        'order': '-1'
      },
      lastLg: {
        '-webkit-box-ordinal-group': '2',
        '-ms-flex-order': '1',
        'order': '1'
      }
    }
  }
})
