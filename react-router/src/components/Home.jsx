import React, { useEffect, useState } from "react";
import axios from "axios";
import ProductCard from "./ProductCard";

const Home = () => {
  const [products, setProducts] = useState(null);

  const fetchProducts = async () => {
    try {
      let res = await axios.get("https://fakestoreapi.com/products");
      if (res) {
        setProducts(res.data);
      }
    } catch (error) {
      console.log("error in fetching products api", error);
    }
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  return (
    <div className="p-4 flex gap-4 flex-wrap">
      {products?.map((elem) => {
        return <ProductCard key={elem.id} elem={elem} />;
      })}
    </div>
  );
};

export default Home;
