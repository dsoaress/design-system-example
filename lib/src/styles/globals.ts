import { globalCss, theme } from './stitches.config'

export const globalStyles = globalCss({
  '*': {
    margin: 0,
    padding: 0,
    boxSizing: 'border-box'
  },
  body: {
    fontSize: '16px',
    color: theme.colors.neutral900,
    fontFamily: 'system-ui',
    backgroundColor: theme.colors.neutral50
  }
})
