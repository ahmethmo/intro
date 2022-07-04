import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { Card, Image } from 'semantic-ui-react'
import ProductService from '../services/productService';

export default function ProductDetail() {
  let { id } = useParams();

  const [product, setProduct] = useState({})

  useEffect(()=>{
    let productService = new ProductService();
    productService.getProductsById(id).then(result => setProduct(result.data));
  },[id])


  return (
    <Card>
      <Image src='https://thumbs.dreamstime.com/b/new-product-stamp-round-grunge-sign-label-181920855.jpg' wrapped ui={false} />
      <Card.Content>
        <Card.Header>{product.id} - {product.name}</Card.Header>
        <Card.Description>
          {product.quantityPerUnit}
        </Card.Description>
      </Card.Content>
      <Card.Content extra>
        <p>Price : {product.unitPrice}</p>
        <p>Stock : {product.unitsInStock}</p>
        <p></p>
      </Card.Content>
    </Card>
  )
}
