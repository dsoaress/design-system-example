import { styled, theme } from '../../styles/stitches.config'

export const Wrapper = styled('button', {
  position: 'relative',
  display: 'flex',
  flexDirection: 'row',
  alignItems: 'center',
  justifyContent: 'center',
  gap: '10px',
  borderWidth: '2px',
  borderStyle: 'solid',
  borderRadius: theme.radii.default,
  height: '46px',
  padding: '0 1rem',
  fontSize: '14px',
  fontWeight: '500',
  lineHeight: 1,
  cursor: 'pointer',
  transition: 'all 0.2s ease-in-out',

  svg: {
    width: '1rem',
    height: '1rem'
  },

  variants: {
    style: {
      solid: {
        color: theme.colors.neutral50,
        backgroundColor: theme.colors.primary500,
        borderColor: theme.colors.primary500,

        '&:hover': {
          backgroundColor: theme.colors.primary600,
          borderColor: theme.colors.primary600
        },

        '&:active': {
          backgroundColor: theme.colors.primary700,
          borderColor: theme.colors.primary700
        }
      },

      outline: {
        color: theme.colors.primary500,
        backgroundColor: 'transparent',
        borderColor: theme.colors.primary500,

        '&:hover': {
          color: theme.colors.primary600,
          borderColor: theme.colors.primary600
        },

        '&:active': {
          color: theme.colors.primary700,
          borderColor: theme.colors.primary700
        }
      }
    }
  },

  defaultVariants: {
    style: 'solid'
  }
})
