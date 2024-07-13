import { Link } from "react-router-dom"
import ProductCard from "../components/ProductCard"

const Home = () => {

    const addToCartHandler = () => {

    }

    return (
        <div className="home">
            <section>
                {/* for background Image */}
            </section>


            <h1>
                Latest Products
                <Link to={"/search"} className="findmore">More</Link>
            </h1>

            {/* product card */}
            <main>
                <ProductCard
                    productId="Random_Product_Id"
                    name="Laptop"
                    price={1213}
                    stock={132}
                    handler={addToCartHandler}
                    photo="https://cdn.mos.cms.futurecdn.net/XXzWLdqVL7V6dP4UkUJ6bK-1024-80.jpg.webp" />
            </main>
        </div>
    )
}

export default Home
