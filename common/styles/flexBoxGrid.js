import { createStyleSheet } from 'jss-theme-reactor'

export const flexBoxGridStyleSheet = createStyleSheet('FlexBoxGrid', (theme) => {
  const container = {
    'margin-right': 'auto',
    'margin-left': 'auto'
  }
  const colXs = {
    'box-sizing': 'border-box',
    '-webkit-box-flex': '0',
    '-ms-flex': '0 0 auto',
    'flex': '0 0 auto',
    'padding-right': '0.5rem',
    'padding-left': '0.5rem'
  }
  const colSm = {
    'box-sizing': 'border-box',
    '-webkit-box-flex': '0',
    '-ms-flex': '0 0 auto',
    'flex': '0 0 auto',
    'padding-right': '0.5rem',
    'padding-left': '0.5rem'
  }
  const colMd = {
    'box-sizing': 'border-box',
    '-webkit-box-flex': '0',
    '-ms-flex': '0 0 auto',
    'flex': '0 0 auto',
    'padding-right': '0.5rem',
    'padding-left': '0.5rem'
  }
  const colLg = {
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
      ...colXs,
      '-webkit-box-flex': '1',
      '-ms-flex-positive': '1',
      'flex-grow': '1',
      '-ms-flex-preferred-size': '0',
      'flex-basis': '0',
      'max-width': '100%'
    },
    colXs1: {
      ...colXs,
      '-ms-flex-preferred-size': '8.33333333%',
      'flex-basis': '8.33333333%',
      'max-width': '8.33333333%'
    },
    colXs2: {
      ...colXs,
      '-ms-flex-preferred-size': '16.66666667%',
      'flex-basis': '16.66666667%',
      'max-width': '16.66666667%'
    },
    colXs3: {
      ...colXs,
      '-ms-flex-preferred-size': '25%',
      'flex-basis': '25%',
      'max-width': '25%'
    },
    colXs4: {
      ...colXs,
      '-ms-flex-preferred-size': '33.33333333%',
      'flex-basis': '33.33333333%',
      'max-width': '33.33333333%'
    },
    colXs5: {
      ...colXs,
      '-ms-flex-preferred-size': '41.66666667%',
      'flex-basis': '41.66666667%',
      'max-width': '41.66666667%'
    },
    colXs6: {
      ...colXs,
      '-ms-flex-preferred-size': '50%',
      'flex-basis': '50%',
      'max-width': '50%'
    },
    colXs7: {
      ...colXs,
      '-ms-flex-preferred-size': '58.33333333%',
      'flex-basis': '58.33333333%',
      'max-width': '58.33333333%'
    },
    colXs8: {
      ...colXs,
      '-ms-flex-preferred-size': '66.66666667%',
      'flex-basis': '66.66666667%',
      'max-width': '66.66666667%'
    },
    colXs9: {
      ...colXs,
      '-ms-flex-preferred-size': '75%',
      'flex-basis': '75%',
      'max-width': '75%'
    },
    colXs10: {
      ...colXs,
      '-ms-flex-preferred-size': '83.33333333%',
      'flex-basis': '83.33333333%',
      'max-width': '83.33333333%'
    },
    colXs11: {
      ...colXs,
      '-ms-flex-preferred-size': '91.66666667%',
      'flex-basis': '91.66666667%',
      'max-width': '91.66666667%'
    },
    colXs12: {
      ...colXs,
      '-ms-flex-preferred-size': '100%',
      'flex-basis': '100%',
      'max-width': '100%'
    },
    colXsOffset0: {
      ...colXs,
      'margin-left': '0'
    },
    colXsOffset1: {
      ...colXs,
      'margin-left': '8.33333333%'
    },
    colXsOffset2: {
      ...colXs,
      'margin-left': '16.66666667%'
    },
    colXsOffset3: {
      ...colXs,
      'margin-left': '25%'
    },
    colXsOffset4: {
      ...colXs,
      'margin-left': '33.33333333%'
    },
    colXsOffset5: {
      ...colXs,
      'margin-left': '41.66666667%'
    },
    colXsOffset6: {
      ...colXs,
      'margin-left': '50%'
    },
    colXsOffset7: {
      ...colXs,
      'margin-left': '58.33333333%'
    },
    colXsOffset8: {
      ...colXs,
      'margin-left': '66.66666667%'
    },
    colXsOffset9: {
      ...colXs,
      'margin-left': '75%'
    },
    colXsOffset10: {
      ...colXs,
      'margin-left': '83.33333333%'
    },
    colXsOffset11: {
      ...colXs,
      'margin-left': '91.66666667%'
    },
    colXsOffset12: {
      ...colXs
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
        ...colSm,
        '-webkit-box-flex': '1',
        '-ms-flex-positive': '1',
        'flex-grow': '1',
        '-ms-flex-preferred-size': '0',
        'flex-basis': '0',
        'max-width': '100%'
      },
      colSm1: {
        ...colSm,
        '-ms-flex-preferred-size': '8.33333333%',
        'flex-basis': '8.33333333%',
        'max-width': '8.33333333%'
      },
      colSm2: {
        ...colSm,
        '-ms-flex-preferred-size': '16.66666667%',
        'flex-basis': '16.66666667%',
        'max-width': '16.66666667%'
      },
      colSm3: {
        ...colSm,
        '-ms-flex-preferred-size': '25%',
        'flex-basis': '25%',
        'max-width': '25%'
      },
      colSm4: {
        ...colSm,
        '-ms-flex-preferred-size': '33.33333333%',
        'flex-basis': '33.33333333%',
        'max-width': '33.33333333%'
      },
      colSm5: {
        ...colSm,
        '-ms-flex-preferred-size': '41.66666667%',
        'flex-basis': '41.66666667%',
        'max-width': '41.66666667%'
      },
      colSm6: {
        ...colSm,
        '-ms-flex-preferred-size': '50%',
        'flex-basis': '50%',
        'max-width': '50%'
      },
      colSm7: {
        ...colSm,
        '-ms-flex-preferred-size': '58.33333333%',
        'flex-basis': '58.33333333%',
        'max-width': '58.33333333%'
      },
      colSm8: {
        ...colSm,
        '-ms-flex-preferred-size': '66.66666667%',
        'flex-basis': '66.66666667%',
        'max-width': '66.66666667%'
      },
      colSm9: {
        ...colSm,
        '-ms-flex-preferred-size': '75%',
        'flex-basis': '75%',
        'max-width': '75%'
      },
      colSm10: {
        ...colSm,
        '-ms-flex-preferred-size': '83.33333333%',
        'flex-basis': '83.33333333%',
        'max-width': '83.33333333%'
      },
      colSm11: {
        ...colSm,
        '-ms-flex-preferred-size': '91.66666667%',
        'flex-basis': '91.66666667%',
        'max-width': '91.66666667%'
      },
      colSm12: {
        ...colSm,
        '-ms-flex-preferred-size': '100%',
        'flex-basis': '100%',
        'max-width': '100%'
      },
      colSmOffset0: {
        ...colSm,
        'margin-left': '0'
      },
      colSmOffset1: {
        ...colSm,
        'margin-left': '8.33333333%'
      },
      colSmOffset2: {
        ...colSm,
        'margin-left': '16.66666667%'
      },
      colSmOffset3: {
        ...colSm,
        'margin-left': '25%'
      },
      colSmOffset4: {
        ...colSm,
        'margin-left': '33.33333333%'
      },
      colSmOffset5: {
        ...colSm,
        'margin-left': '41.66666667%'
      },
      colSmOffset6: {
        ...colSm,
        'margin-left': '50%'
      },
      colSmOffset7: {
        ...colSm,
        'margin-left': '58.33333333%'
      },
      colSmOffset8: {
        ...colSm,
        'margin-left': '66.66666667%'
      },
      colSmOffset9: {
        ...colSm,
        'margin-left': '75%'
      },
      colSmOffset10: {
        ...colSm,
        'margin-left': '83.33333333%'
      },
      colSmOffset11: {
        ...colSm,
        'margin-left': '91.66666667%'
      },
      colSmOffset12: {
        ...colSm
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
        ...colMd,
        '-webkit-box-flex': '1',
        '-ms-flex-positive': '1',
        'flex-grow': '1',
        '-ms-flex-preferred-size': '0',
        'flex-basis': '0',
        'max-width': '100%'
      },
      colMd1: {
        ...colMd,
        '-ms-flex-preferred-size': '8.33333333%',
        'flex-basis': '8.33333333%',
        'max-width': '8.33333333%'
      },
      colMd2: {
        ...colMd,
        '-ms-flex-preferred-size': '16.66666667%',
        'flex-basis': '16.66666667%',
        'max-width': '16.66666667%'
      },
      colMd3: {
        ...colMd,
        '-ms-flex-preferred-size': '25%',
        'flex-basis': '25%',
        'max-width': '25%'
      },
      colMd4: {
        ...colMd,
        '-ms-flex-preferred-size': '33.33333333%',
        'flex-basis': '33.33333333%',
        'max-width': '33.33333333%'
      },
      colMd5: {
        ...colMd,
        '-ms-flex-preferred-size': '41.66666667%',
        'flex-basis': '41.66666667%',
        'max-width': '41.66666667%'
      },
      colMd6: {
        ...colMd,
        '-ms-flex-preferred-size': '50%',
        'flex-basis': '50%',
        'max-width': '50%'
      },
      colMd7: {
        ...colMd,
        '-ms-flex-preferred-size': '58.33333333%',
        'flex-basis': '58.33333333%',
        'max-width': '58.33333333%'
      },
      colMd8: {
        ...colMd,
        '-ms-flex-preferred-size': '66.66666667%',
        'flex-basis': '66.66666667%',
        'max-width': '66.66666667%'
      },
      colMd9: {
        ...colMd,
        '-ms-flex-preferred-size': '75%',
        'flex-basis': '75%',
        'max-width': '75%'
      },
      colMd10: {
        ...colMd,
        '-ms-flex-preferred-size': '83.33333333%',
        'flex-basis': '83.33333333%',
        'max-width': '83.33333333%'
      },
      colMd11: {
        ...colMd,
        '-ms-flex-preferred-size': '91.66666667%',
        'flex-basis': '91.66666667%',
        'max-width': '91.66666667%'
      },
      colMd12: {
        ...colMd,
        '-ms-flex-preferred-size': '100%',
        'flex-basis': '100%',
        'max-width': '100%'
      },
      colMdOffset0: {
        ...colMd,
        'margin-left': '0'
      },
      colMdOffset1: {
        ...colMd,
        'margin-left': '8.33333333%'
      },
      colMdOffset2: {
        ...colMd,
        'margin-left': '16.66666667%'
      },
      colMdOffset3: {
        ...colMd,
        'margin-left': '25%'
      },
      colMdOffset4: {
        ...colMd,
        'margin-left': '33.33333333%'
      },
      colMdOffset5: {
        ...colMd,
        'margin-left': '41.66666667%'
      },
      colMdOffset6: {
        ...colMd,
        'margin-left': '50%'
      },
      colMdOffset7: {
        ...colMd,
        'margin-left': '58.33333333%'
      },
      colMdOffset8: {
        ...colMd,
        'margin-left': '66.66666667%'
      },
      colMdOffset9: {
        ...colMd,
        'margin-left': '75%'
      },
      colMdOffset10: {
        ...colMd,
        'margin-left': '83.33333333%'
      },
      colMdOffset12: {
        ...colMd
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
        ...colLg,
        '-webkit-box-flex': '1',
        '-ms-flex-positive': '1',
        'flex-grow': '1',
        '-ms-flex-preferred-size': '0',
        'flex-basis': '0',
        'max-width': '100%'
      },
      colLg1: {
        ...colLg,
        '-ms-flex-preferred-size': '8.33333333%',
        'flex-basis': '8.33333333%',
        'max-width': '8.33333333%'
      },
      colLg2: {
        ...colLg,
        '-ms-flex-preferred-size': '16.66666667%',
        'flex-basis': '16.66666667%',
        'max-width': '16.66666667%'
      },
      colLg3: {
        ...colLg,
        '-ms-flex-preferred-size': '25%',
        'flex-basis': '25%',
        'max-width': '25%'
      },
      colLg4: {
        ...colLg,
        '-ms-flex-preferred-size': '33.33333333%',
        'flex-basis': '33.33333333%',
        'max-width': '33.33333333%'
      },
      colLg5: {
        ...colLg,
        '-ms-flex-preferred-size': '41.66666667%',
        'flex-basis': '41.66666667%',
        'max-width': '41.66666667%'
      },
      colLg6: {
        ...colLg,
        '-ms-flex-preferred-size': '50%',
        'flex-basis': '50%',
        'max-width': '50%'
      },
      colLg7: {
        ...colLg,
        '-ms-flex-preferred-size': '58.33333333%',
        'flex-basis': '58.33333333%',
        'max-width': '58.33333333%'
      },
      colLg8: {
        ...colLg,
        '-ms-flex-preferred-size': '66.66666667%',
        'flex-basis': '66.66666667%',
        'max-width': '66.66666667%'
      },
      colLg9: {
        ...colLg,
        '-ms-flex-preferred-size': '75%',
        'flex-basis': '75%',
        'max-width': '75%'
      },
      colLg10: {
        ...colLg,
        '-ms-flex-preferred-size': '83.33333333%',
        'flex-basis': '83.33333333%',
        'max-width': '83.33333333%'
      },
      colLg11: {
        ...colLg,
        '-ms-flex-preferred-size': '91.66666667%',
        'flex-basis': '91.66666667%',
        'max-width': '91.66666667%'
      },
      colLg12: {
        ...colLg,
        '-ms-flex-preferred-size': '100%',
        'flex-basis': '100%',
        'max-width': '100%'
      },
      colLgOffset0: {
        ...colLg,
        'margin-left': '0'
      },
      colLgOffset1: {
        ...colLg,
        'margin-left': '8.33333333%'
      },
      colLgOffset2: {
        ...colLg,
        'margin-left': '16.66666667%'
      },
      colLgOffset3: {
        ...colLg,
        'margin-left': '25%'
      },
      colLgOffset4: {
        ...colLg,
        'margin-left': '33.33333333%'
      },
      colLgOffset5: {
        ...colLg,
        'margin-left': '41.66666667%'
      },
      colLgOffset6: {
        ...colLg,
        'margin-left': '50%'
      },
      colLgOffset7: {
        ...colLg,
        'margin-left': '58.33333333%'
      },
      colLgOffset8: {
        ...colLg,
        'margin-left': '66.66666667%'
      },
      colLgOffset9: {
        ...colLg,
        'margin-left': '75%'
      },
      colLgOffset10: {
        ...colLg,
        'margin-left': '83.33333333%'
      },
      colLgOffset11: {
        ...colLg,
        'margin-left': '91.66666667%'
      },
      colLgOffset12: {
        ...colLg
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
