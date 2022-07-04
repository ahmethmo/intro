import { Form, Formik } from 'formik'
import React from 'react'
import * as Yup from "yup"
import CBCTextInput from '../utilities/CBCTextInput'
import { Button } from 'semantic-ui-react'
import ProductService from '../services/productService'
import { useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify'

export default function ProductAdd() {
    const initialValues = { name: "", unitPrice: 0, categoryId: 0 }
    const navigate = useNavigate();
    const schema = Yup.object({
        name: Yup.string().required("Ürün ası zorunludur"),
        unitPrice: Yup.number().required("Ürün fiyatı zorunludur").min(10, "Min değer 10 dur"),
        categoryId: Yup.number().required("Kategori zorunludur").min(1, "Min değer 1 dir")
    })
    return (
        <Formik
            initialValues={initialValues}
            validationSchema={schema}
            onSubmit={(values) => {
                let productService = new ProductService();
                productService.addProduct(values).then(result => { toast.success("Ürün Eklendi").then(navigate("/")) });

            }}>
            <Form className='ui form'>
                <CBCTextInput name="name" placeholder="Ürün adını giriniz" />
                <CBCTextInput name="unitPrice" placeholder="Ürün fiyatını giriniz" />
                <CBCTextInput name="categoryId" placeholder="Ürün kategorisini giriniz" />
                <Button color="green" type="submit">Ekle</Button>
            </Form>
        </Formik>
    )

}