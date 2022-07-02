import React from 'react'
import { Menu, Image, Dropdown } from 'semantic-ui-react'

export default function SignedIn(props) {
    return (
        <Menu.Item>
            <Image avatar src="https://w7.pngwing.com/pngs/340/946/png-transparent-avatar-user-computer-icons-software-developer-avatar-child-face-heroes-thumbnail.png"></Image>
            <Dropdown text='Ahmet HMO'>
                <Dropdown.Menu>
                    <Dropdown.Item text="Hakkında" />
                    <Dropdown.Item onClick={props.signOut} text="Çıkış Yap" />
                </Dropdown.Menu>
            </Dropdown>
        </Menu.Item>
    )
}
