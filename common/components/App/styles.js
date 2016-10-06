import { createStyleSheet } from 'jss-theme-reactor'

export const styleSheet = createStyleSheet('Button', (theme) => {
  const { palette, shadows, transitions } = theme;

  return {

    root: {
      maxWidth: 700,
      color: palette.text.primary,
      margin: '2rem auto',
      padding: '0 1rem'
    },

    title: {
      color: palette.text.primary,
      fontWeight: 'bold',
      fontSize: 56
    },

    footer: {
      margin: '4rem auto',
      textAlign: 'center',
      color: palette.text.primary
    },

    footerLink: {
      display: 'inline-block',
      color: palette.text.primary,
      textDecoration: 'none'
    }

  }
})
