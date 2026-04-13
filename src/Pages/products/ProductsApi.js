import {toast} from "react-toastify"
import axios from "axios";

var url = "https://fakestoreapi.com/products";
export function ProductsData(setState){
    axios.get(url).then(function(res){
             setState(res.data)

    }).catch(function(error){
        alert("Data Denied");
        console.log(error);

    })
     
}
export function filterproducts(categoryName,setState){
    if(categoryName){
         axios.get(url).then(function(res){
             setState(res.data.filter(function(product){
                return product.category  === categoryName;

             }))

    }).catch(function(error){
        alert("Data Denied");
        console.log(error);

    })

    } else{
        ProductsData(setState)
    }

}

const BASE_URL = "https://back-end-bro-mart-1.onrender.com";
export function addToCart(product) {
  axios
    .post(`${BASE_URL}/cart/add-to-cart`, product)
    .then((res) => {
      toast.success("Product added in the Cart",{
           toastId: product.id,
           autoClose: 1500
      })

    })
    .catch(() => {
      toast.error("Product failed to add in Cart");
    });
}