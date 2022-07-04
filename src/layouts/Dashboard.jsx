import React from 'react'
import Navi from './Navi'
import Categories from './Categories'
import ProductList from '../pages/ProductList'
import ProductDetail from '../pages/ProductDetail'
import {Grid} from 'semantic-ui-react'
import { Route,Routes } from 'react-router-dom'
import ProductAdd from '../pages/ProductAdd'
import ProductUpdate from '../pages/ProductUpdate'
import { ToastContainer } from 'react-toastify'


export default function Dashboard() {
  return (
    
    <div>
        <ToastContainer position='bottom-right'>

        </ToastContainer>
        <Grid>
            <Grid.Row>
                <Grid.Column width={16}>
                    <Navi/>            
                </Grid.Column>
            </Grid.Row>
            <Grid.Row>
                <Grid.Column width={4}>
                    <Categories/>
                </Grid.Column>
                <Grid.Column width={12}>
                    <Routes>
                        <Route exact    path='/'                    element={<ProductList/>}/>
                        <Route          path='/product'             element={<ProductList/>}/>
                        <Route          path='/product/detail/:id'  element={<ProductDetail/>}/>
                        <Route          path='/product/add'         element={<ProductAdd/>}/>
                        <Route          path='/product/update/:id'  element={<ProductUpdate/>}/>
                    </Routes>
                </Grid.Column>
            </Grid.Row>
        </Grid>
    </div>
  )
}
