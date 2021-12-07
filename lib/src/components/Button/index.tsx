import { VariantProps } from '@stitches/react'
import React from 'react'
import { IconType } from 'react-icons'

import { Wrapper } from './styles'

export type ButtonProps = VariantProps<typeof Wrapper> & {
  label: string
  leftIcon?: IconType
  rightIcon?: IconType
}

export function Button({ label, leftIcon: LeftIcon, rightIcon: RightIcon, ...rest }: ButtonProps) {
  return (
    <Wrapper {...rest}>
      {!!LeftIcon && <LeftIcon />}
      {label}
      {!!RightIcon && <RightIcon />}
    </Wrapper>
  )
}
