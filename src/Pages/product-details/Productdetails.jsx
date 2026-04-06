import "./Productdetails.css";
import { useState,useEffect} from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import { Link } from "react-router-dom";


function Productdetails(){

    useEffect(()=>{
        axios.get(`https://fakestoreapi.com/products/${id}`).then((res)=>{
            setProduct(res.data)


        }).catch((error)=>{
            alert("data Denied");
            console(error);
        })
    },[])

    const [stateproduct,setProduct]= useState({
    id:0,
    title:"",
    price:0,
    category:"",
    rating:{
        rate:0,
        count:0
    },
    description:""
});
const {id} = useParams();



    return (
        <div className="product-details">
            <div className="product-div1">
                <img src={stateproduct.image} alt="" />

            </div>
            <div className="product-div2">
                <div className="product-div3">
                    <div style={{position:"relative", left:"30px"}}>
                        <dl>
                        <dt>ID </dt>
                        <dd>{stateproduct.id}</dd>
                    </dl>
                    </div>
                    <div style={{position:"relative", left:"30px"}}>
                        <dl>
                        <dt>Title </dt>
                        <dd>{stateproduct.title}</dd>
                        </dl>
                    </div>
                </div >
                <div className="product-div3">
                    <div style={{position:"relative", left:"30px"}}>
                        <dl>
                        <dt>Price </dt>
                        <dd>$ {stateproduct.price}</dd>
                    </dl>
                    </div>
                    <div style={{position:"relative", left:"30px"}}>
                        <dl>
                        <dt>Category </dt>
                        <dd>{stateproduct.category}</dd>
                        </dl>
                    </div>
                </div>
                <div className="product-div3">
                    <div style={{position:"relative", left:"30px"}}>
                        <dl>
                            <dt>Rating</dt>
                            <dd>{stateproduct.rating.rate}</dd>
                        </dl>
                    </div>
                    <div style={{position:"relative", left:"35px"}}>
                        <dl >
                            <dt>Count</dt>
                            <dd>{stateproduct.rating.count}</dd>
                        </dl>
                    </div>
                </div>
                <div className="product-div4">
                      <div >
                        <dl>
                            <dt>Description</dt>
                            <dd>{stateproduct.description}</dd>
                        </dl>
                      </div>
                </div>
                <div className="product-button">
                    <div className="product-button1">
                        <Link to={`/products`} style={{textDecoration:"none"}}><button >Back-To-Products</button></Link>
                    </div>
                   <div className="product-button2">
                     <button>Add-To-Cart</button>
                   </div>
                </div>
            </div>

        </div>
    )
}

export default Productdetails;