import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

function Products() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    axios
      .get("https://test-ecommerce-gamma.vercel.app/products")
      .then((response) => {
        setProducts(response.data);
      })
      .catch((error) => {
        console.log("ErrorL ", error);
      });
  }, []);

  return (
    <div className="grid grid-cols-4" >
      {products.map((p) => (
        <Link to={`/products/${p.id}`} key={p.id}>
          <img src={p.img} alt={p.title} />
          <p>{p.title}</p>
        </Link>
      ))}
    </div>
  );
}

export default Products;
