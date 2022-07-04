import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { Icon, Menu, Table, Button } from 'semantic-ui-react'
import ProductService from '../services/productService';
import { toast } from 'react-toastify'

export default function ProductList() {

  const [products, setProducts] = useState([])
  useEffect(() => {
    let productService = new ProductService();
    productService.getProducts().then(result => setProducts(result.data))
  }, [])

  function deleteProduct(id) {
    let productService = new ProductService();
    productService.deleteProduct(id).then(result => {
      if (result.status === 200 ){
        setProducts(products.filter((item) => item.id !== id))
        toast.success("Silindi");
      }
    });
  }

  return (
    <div>
      <Table celled>
        <Table.Header>
          <Table.Row>
            <Table.HeaderCell>Id</Table.HeaderCell>
            <Table.HeaderCell>Ürün Adı</Table.HeaderCell>
            <Table.HeaderCell>Birim fiyatı</Table.HeaderCell>
            <Table.HeaderCell>Stok Adeti</Table.HeaderCell>
            <Table.HeaderCell>Açıklama</Table.HeaderCell>
            <Table.HeaderCell>Kategori</Table.HeaderCell>
            <Table.HeaderCell>Güncelle</Table.HeaderCell>
            <Table.HeaderCell>Sil</Table.HeaderCell>
          </Table.Row>
        </Table.Header>

        <Table.Body>
          {
            products.map(p => (
              <Table.Row key={p.id}>
                <Table.Cell>{p.id}</Table.Cell>
                <Table.Cell><Link to={`/product/detail/${p.id}`}>{p.name}</Link></Table.Cell>
                <Table.Cell>{p.unitPrice}</Table.Cell>
                <Table.Cell>{p.unitsInStock}</Table.Cell>
                <Table.Cell>{p.quantityPerUnit}</Table.Cell>
                <Table.Cell>{p.categoryId}</Table.Cell>
                <Table.Cell><Link to={`/product/update/${p.id}`}><Button color='blue'>Düzenle</Button></Link></Table.Cell>
                <Table.Cell><Button color="red" onClick={() => { deleteProduct(p.id); }} >Sil</Button></Table.Cell>
              </Table.Row>
            ))
          }

        </Table.Body>

        <Table.Footer>
          <Table.Row>
            <Table.HeaderCell colSpan='3'>
              <Menu floated='right' pagination>
                <Menu.Item as='a' icon>
                  <Icon name='chevron left' />
                </Menu.Item>
                <Menu.Item as='a'>1</Menu.Item>
                <Menu.Item as='a'>2</Menu.Item>
                <Menu.Item as='a'>3</Menu.Item>
                <Menu.Item as='a'>4</Menu.Item>
                <Menu.Item as='a' icon>
                  <Icon name='chevron right' />
                </Menu.Item>
              </Menu>
            </Table.HeaderCell>
          </Table.Row>
        </Table.Footer>
      </Table>
    </div>
  )
}
