import { fullBlack, grey500 } from 'material-ui/styles/colors'

export default {

  link: {
    maxWidth: 700,
    color: grey500,
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
    color: fullBlack
  }

}
