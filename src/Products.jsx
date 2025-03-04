import React, { useEffect, useState } from "react";
import SingleProduct from "./SingleProduct";

const Products = () => {
  const api = "https://dummyjson.com/products";
  const [products, setProducts] = useState([]);
  const [filteredData, setFilteredData] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    const getProducts = async () => {
      const response = await fetch(api);
      const data = await response.json();
      setProducts(data.products);
      setFilteredData(data.products);
    };
    getProducts();
  }, []); 


  useEffect(() => {
    const filtered = products.filter((item) =>
      item.title.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setFilteredData(filtered);
  }, [searchTerm, products]);

  return (
    <>
      <div className="w-full md:w-[60%] lg:w-[50%] xl:w-[40%] p-3 m-3 shadow-xl mx-auto">
        <label>Search Products</label>
        <input
          type="text"
          placeholder="Search..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="w-full border p-2 rounded-md mt-2"
        />
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 p-4">
        {filteredData.length > 0 ? (
          filteredData.map((item, index) => <SingleProduct {...item} key={index} />)
        ) : (
          <p className="col-span-full text-center text-red-500">No products found</p>
        )}
      </div>
    </>
  );
};

export default Products;
