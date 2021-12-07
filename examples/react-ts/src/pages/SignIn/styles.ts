import { Button, styled, theme } from 'lib'

export const Wrapper = styled('div', {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  height: '100vh',
  padding: '1rem'
})

export const Form = styled('form', {
  display: 'flex',
  flexDirection: 'column',
  width: '500px',
  gap: '1.5rem',
  marginTop: '-4rem',
  padding: '2rem',
  borderRadius: theme.radii.default,
  boxShadow: 'rgba(0, 0, 0, 0.24) 0px 3px 8px'
})

export const SocialLinks = styled('div', {
  display: 'flex',
  gap: '1.5rem',

  '& > *': {
    flex: 1
  }
})

export const FacebookButton = styled(Button, {
  variants: {
    style: {
      facebook: {
        backgroundColor: '#3b5998',
        borderColor: '#3b5998',
        color: '#fff',

        '&:hover': {
          backgroundColor: '#3b5998',
          borderColor: '#3b5998',
          color: '#fff'
        }
      }
    }
  },

  defaultVariants: {
    style: 'facebook'
  }
})
