import axios from "axios";

export default class ProductService{
    url = "http://localhost:3000/products/";

    getProducts(){
        return axios.get(this.url);
    }

    getProductsById(id){
        return axios.get(this.url+id);
    }

    addProduct(product){
        return axios.post(this.url,product);
    }

    updateProduct(product){
        return axios.put(this.url+product.id, product);
    }

    deleteProduct(id){
        return axios.delete(this.url+id);
    }
}