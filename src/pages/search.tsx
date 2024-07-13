import { useState } from "react"
import ProductCard from "../components/ProductCard";

const Search = () => {


    const [search, setSearch] = useState("");
    const [sort, setSort] = useState("");
    const [maxPrice, setMaxPrice] = useState(1000000);
    const [category, setCategory] = useState("");
    const [page, setPage] = useState(1);

    const addToCartHandler = () => {

    };
    const IsNextPage = true;
    const IsPrevPage = true;

    return (
        <div className="product-search-page">

            <aside>
                <h2>Filters</h2>

                {/* Sort */}
                <div>
                    <h4>Sort</h4>
                    <select
                        value={sort}
                        onChange={e => setSort(e.target.value)}>

                        <option value="">None</option>
                        <option value="asc">Price (Low to High)</option>
                        <option value="dsc">Price (High to Low)</option>
                    </select>
                </div>

                {/* Price Range */}
                <div>
                    <h4>Max Price:{maxPrice || ""}</h4>
                    <input
                        value={maxPrice}
                        type="range"
                        min={100}
                        max={1000000}
                        onChange={e => setMaxPrice(Number(e.target.value))}>
                    </input>
                </div>

                {/* Category */}
                <div>
                    <h4>Category</h4>
                    <select
                        value={category}
                        onChange={e => setCategory(e.target.value)}>

                        <option value="">All</option>
                        <option value="">Sample1</option>
                        <option value="">Sample2 </option>
                    </select>
                </div>
            </aside>
            <main>

                <h1>Products</h1>
                <input type="text" placeholder="Search by name..." value={search} onChange={e => setSearch(e.target.value)} />

                <div className="search-product-list">
                    <ProductCard productId="Random_Product_Id"
                        name="Laptop"
                        price={1213}
                        stock={132}
                        handler={addToCartHandler}
                        photo="https://cdn.mos.cms.futurecdn.net/XXzWLdqVL7V6dP4UkUJ6bK-1024-80.jpg.webp" />
                </div>

                <article>
                    <button
                        disabled={page <= 1}
                        onClick={() => setPage(prev => prev - 1)}>
                        Prev
                    </button>
                    <span>
                        {page} of {4}
                    </span>
                    <button
                        disabled={!IsNextPage}
                        onClick={() => setPage(prev => prev + 1)}>
                        Next
                    </button>
                </article>
            </main>
        </div >
    )
}

export default Search
