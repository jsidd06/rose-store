import React, { useEffect, useState } from "react";
import Product from "../components/Product";
import * as EndPoint from "../Api/services";
import Axios from "../Api/Axios";

export default function HomeScreen() {
  const [allDataProduct, setAllDataProduct] = useState([]);

  useEffect(() => {
    Axios.get(EndPoint.ALL_PRODUCT_LIST)
      .then((res) => {
        setAllDataProduct(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <div className="row center">
      {allDataProduct.map((product) => (
        <Product product={product} key={product._id} />
      ))}
    </div>
  );
}
