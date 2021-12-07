import { styled, theme } from '../../styles/stitches.config'

export const Wrapper = styled('div')

export const Label = styled('label', {
  display: 'block',
  fontSize: '14px',
  fontWeight: '500',
  lineHeight: 1,
  marginBottom: '8px'
})

export const InputWrapper = styled('div', {
  display: 'flex',
  flexDirection: 'row',
  alignItems: 'center',
  justifyContent: 'center',
  border: `2px solid ${theme.colors.neutral300}`,
  borderRadius: theme.radii.default,
  background: theme.colors.neutral50,
  height: '46px',
  width: '100%',
  transition: 'all 0.2s ease-in-out',

  '&:focus-within': {
    borderColor: theme.colors.primary500,
    boxShadow: '0 0 5px 0 rgba(255,48,76,0.5)'
  },

  svg: {
    width: '1.2rem',
    height: '1.2rem',
    marginLeft: '1rem',
    color: theme.colors.neutral500
  },

  input: {
    border: 0,
    background: 'transparent',
    width: '100%',
    height: '100%',
    padding: '0 16px',
    fontSize: '14px',
    lineHeight: 1,

    '&:focus': {
      outline: 0
    }
  }
})
