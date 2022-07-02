import React from 'react'
import { Menu,Button } from 'semantic-ui-react'

export default function SignedOut(props) {
  return (
    <Menu.Item>
        <Button onClick={props.signIn}>Giriş yap</Button>
        <Button primary>Kayıt Ol</Button>
    </Menu.Item>
  )
}
