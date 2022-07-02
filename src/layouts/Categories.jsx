import React from 'react'
import { Menu } from 'semantic-ui-react'

export default function Categories() {
  return (
    <div>
      <Menu pointing vertical>
        <Menu.Item name='Beverages'></Menu.Item>
        <Menu.Item name='Condiments'></Menu.Item>
        <Menu.Item name='Dailt Suppliers'></Menu.Item>
      </Menu>
    </div>
  )
}
