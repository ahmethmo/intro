import React, {  useState } from 'react'
import { Container, Menu } from 'semantic-ui-react'
import CartSummary from './CartSummary.jsx'
import SignedIn from './SignedIn.jsx'
import SignedOut from './SignedOut.jsx'

export default function Navi() {
  const [isAuthenticated, setIsAuthenticated] = useState(true)
  
  function handleSignOut(params){
    setIsAuthenticated(false);
  }

  function handleSignIn(params){
    setIsAuthenticated(true);
  }

  return (
    <div>
      <Menu inverted fixed='top'>
        <Container>
          <Menu.Item name='upcomingEvents'> deneme</Menu.Item>
          <Menu.Item name='upcomingEvents'> deneme</Menu.Item>
          <Menu.Item name='upcomingEvents'> deneme</Menu.Item>
          <Menu.Menu position='right'>
            <CartSummary />
            {
              isAuthenticated ? <SignedIn signOut={handleSignOut} someData="1"/> : <SignedOut signIn={handleSignIn}/>
            }
          </Menu.Menu>
        </Container>
      </Menu>
    </div>
  )
}
