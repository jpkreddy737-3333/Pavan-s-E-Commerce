import "./Products.css";
import { useEffect,useState} from "react";
import { ProductsData, filterproducts,addToCart } from "./ProductsApi.js";
import { Link } from "react-router-dom";

function Products(){


    const [state,setState] = useState([]);

    const [activeCategory,setCategory] = useState("active");
         
    const images = [
    { image: "bgimage-1", title: "All Products" },
    { image: "bgimage-2", title: "Electronics" },
    { image: "bgimage-3", title: "Jewelery" },
    { image: "bgimage-4", title: "Men's -- Women's--Wearing" }
];
    useEffect(()=>{
       ProductsData(setState);
    },[])

const [index, setIndex] = useState(0);

useEffect(() => {
    const interval = setInterval(() => {
        setIndex((prev) => (prev + 1) % images.length);
    }, 2000);

    return () => clearInterval(interval);

  
}, []);
        

    return(
        <div>
           <section className={`product-info ${images[index].image}`}>
    <div className="section-info">
        <h1>{images[index].title}</h1>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus assumenda ex, provident eius quibusdam libero optio quia porro cumque voluptatem, facere suscipit corrupti reiciendis animi consectetur accusantium ut consequuntur! Ex, nihil delectus. Fugit deleniti quos nemo dolor magni quam quidem consequuntur molestias quia fugiat dolorum, quaerat velit animi pariatur nobis facilis, illum atque eaque doloremque, cupiditate molestiae. Impedit veritatis hic vero, doloremque laboriosam mollitia temporibus, deserunt aut architecto numquam magnam incidunt dicta! Quibusdam dolor nisi aliquam corrupti facilis pariatur culpa ipsum, ipsam dolorem qui, impedit id odit ab reiciendis obcaecati iste molestiae rerum porro, laudantium vitae sapiente atque illum. Sit.

        </p>
    </div>
</section>
            <section className="product-type">
                <div onClick={()=>{
                    filterproducts(null,setState);
                    setCategory("all");
                }}
                >
                    <img  className={activeCategory === "all"? "active" : "in-active"}
                    src="https://th.bing.com/th/id/OIP.SDOKYlt1dPkpOPDOKiVkHwHaHa?w=181&h=181&c=7&r=0&o=7&dpr=1.3&pid=1.7&rm=3" alt="" width={80} height={80} />
                    <h3 className={activeCategory === "all" ? "red" : "black"}
                    >All</h3>
                </div>
                <div  onClick={()=>{
                    filterproducts("electronics",setState);
                    setCategory("electronics");
                }}>
                    <img  className={activeCategory === "electronics" ? "active" : "in-active"}
                    src="data:image/webp;base64,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" alt="" width={80} height={80} />
                    <h3 className={activeCategory === "electronics" ? "red" : "black"}
                    >Electronics</h3>
                </div>
                <div  onClick={()=>{
                    filterproducts("jewelery",setState);
                    setCategory("jewelery");
                }}>
                    <img  className={activeCategory === "jewelery" ? "active" : "in-active"}
                    src="https://th.bing.com/th?q=Dubai+Gold+Jewelry&w=120&h=120&c=1&rs=1&qlt=70&o=7&cb=1&dpr=1.3&pid=InlineBlock&rm=3&mkt=en-IN&cc=IN&setlang=en&adlt=moderate&t=1&mw=247" alt="" width={80} height={80} />
                    <h3 className={activeCategory === "jewelery" ? "red" : "black"}
                    >Jewelery</h3>
                </div>
                <div  onClick={()=>{
                    filterproducts("men's clothing",setState);
                    setCategory("mens")
                }}>
                    <img className={activeCategory === "mens" ? "active" : "in-active"}
                    src="https://tse1.mm.bing.net/th/id/OIP.APZrxC8L_biRnw4h_hfNSwAAAA?pid=ImgDet&w=184&h=149&c=7&dpr=1.3&o=7&rm=3" alt="" width={80} height={80} />
                    <h3 className={activeCategory === "mens" ? "red" : "black"}
                    >Mens-Wearing</h3>
                </div>
                <div
                 onClick={()=>{
                    filterproducts("women's clothing",setState);
                    setCategory("womens");
                }}>
                    <img className={activeCategory === "womens"? "active" : "in-active"} 
                    src="https://th.bing.com/th/id/OIP.rDWzFd5gx8s1GeCxLqTSbgHaE8?w=267&h=180&c=7&r=0&o=7&dpr=1.3&pid=1.7&rm=3" alt="" width={80} height={80} />
                    <h3 className={activeCategory === "womens" ? "red" : "black"}
                    >Womens-Wearing</h3>
                </div>

            </section>
            <section className="product-data">
                
                    {
                        state.map(function(ele){
    return (
        <div className="card" key={ele.id}>
            <img src={ele.image} alt={ele.title} height={180} />
            <h3>{ele.title}</h3> 
            <p>$ {ele.price}</p>
            <h3>{ele.category}</h3>
            <Link to={`/product-details/${ele.id}`}><button>Product-Details</button></Link>
            <button style={{backgroundColor:"greenyellow", cursor:"pointer"}} onClick={() => addToCart(ele)} >Add-To-Cart</button>
        </div>
    )
})
                    }

                
            </section>
        </div>
    )
}

export default Products;