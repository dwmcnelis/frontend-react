import { createStyleSheet } from 'jss-theme-reactor'

export const styleSheet = createStyleSheet('Button', (theme) => {
  //const { palette, shadows, transitions } = theme;
  const { palette, transitions } = theme;

  return {

    link: {
      maxWidth: 700,
      color: palette.text.primary,
      margin: '1.5rem 1rem 1.5rem 0',
      display: 'inline-block',
      textDecoration: 'none',
      fontWeight: 'bold',
      transition: '.2s opacity ease',
      ':hover': {
        opacity: 0.6
      }
    },

    activeLink: {
      color: palette.accent.A200
    }
  }
})
