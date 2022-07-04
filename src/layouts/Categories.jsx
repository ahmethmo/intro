import React, { useEffect, useState } from 'react'
import CategoryService from '../services/categoryService';
import { Menu } from 'semantic-ui-react'

export default function Categories() {
  const [categories, setCategories] = useState([]);

  useEffect(()=>{
    let categoryService = new CategoryService();
    categoryService.getCategories().then(result => setCategories(result.data))
  },[]);

  return (
    <div>
      <Menu pointing vertical>
        {
          categories.map(c =>(
            <Menu.Item key={c.id} name={c.name}></Menu.Item>
          ))
        }
      </Menu>
    </div>
  )
}
