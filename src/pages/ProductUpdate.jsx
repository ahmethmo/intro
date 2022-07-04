import React, { useEffect, useState } from 'react'
import { Form, Formik } from 'formik'
import * as Yup from "yup"
import CBCTextInput from '../utilities/CBCTextInput'
import { Button } from 'semantic-ui-react'
import ProductService from '../services/productService'
import { useParams,useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify'

export default function ProductUpdate() {
    const navigate = useNavigate();
    let { id } = useParams();
    const [product, setProduct] = useState({id : 0,name : '', unitPrice: 0, categoryId : 0})

    useEffect(() => {
        let productService = new ProductService();
        productService.getProductsById(id).then(p => setProduct(p.data));
    }, [id])
    
    const schema = Yup.object({
        id: Yup.number().required(),
        name: Yup.string().required("Ürün ası zorunludur"),
        unitPrice: Yup.number().required("Ürün fiyatı zorunludur").min(10, "Min değer 10 dur"),
        categoryId: Yup.number().required("Kategori zorunludur").min(1, "Min değer 1 dir")
    })

    return (
        <Formik
            enableReinitialize
            initialValues={product}
            validationSchema={schema}
            onSubmit={(values) => {
                console.log(values);
                let productService = new ProductService();
                productService.updateProduct(values).then(result => { toast.success("Düzenlendi").then(navigate("/")) });
                navigate("/");
            }}>
            <Form className='ui form'>
                <CBCTextInput name="id" disabled />
                <CBCTextInput name="name" placeholder="Ürün adını giriniz" />
                <CBCTextInput name="unitPrice" placeholder="Ürün fiyatını giriniz" />
                <CBCTextInput name="categoryId" placeholder="Ürün kategorisini giriniz" />
                <Button color="blue" type="submit">Düzenle</Button>
            </Form>
        </Formik>

    )

}