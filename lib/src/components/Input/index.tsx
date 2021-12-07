import React from 'react'
import { InputHTMLAttributes } from 'react'
import { IconType } from 'react-icons'

import { InputWrapper, Label, Wrapper } from './styles'

export type InputProps = InputHTMLAttributes<HTMLInputElement> & {
  label?: string
  icon?: IconType
}

export function Input({ label, icon: Icon, ...rest }: InputProps) {
  return (
    <Wrapper>
      {!!label && <Label>{label}</Label>}
      <InputWrapper>
        {!!Icon && <Icon />}
        <input {...rest} />
      </InputWrapper>
    </Wrapper>
  )
}
