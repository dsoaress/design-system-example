import { Button, Input } from 'lib'
import { AiOutlineUser } from 'react-icons/ai'
import { BsBoxArrowRight } from 'react-icons/bs'
import { FcGoogle } from 'react-icons/fc'
import { RiFacebookBoxFill, RiLockPasswordLine } from 'react-icons/ri'

import { FacebookButton, Form, SocialLinks, Wrapper } from './styles'

export function SignIn() {
  return (
    <Wrapper>
      <Form>
        <h1>Sign In</h1>

        <Input type="email" label="Email" placeholder="Your email address" icon={AiOutlineUser} />
        <Input
          type="password"
          label="Password"
          placeholder="Your password"
          icon={RiLockPasswordLine}
        />

        <Button label="Sign in" rightIcon={BsBoxArrowRight} />

        <SocialLinks>
          <Button label="Sign in with Google" style="outline" leftIcon={FcGoogle} />
          <FacebookButton label="Sign in with Facebook" leftIcon={RiFacebookBoxFill} />
        </SocialLinks>
      </Form>
    </Wrapper>
  )
}
