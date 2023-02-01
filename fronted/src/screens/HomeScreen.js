import React, { useEffect, useState } from "react";
import Product from "../components/Product";
import * as EndPoint from "../Api/services";
import Axios from "../Api/Axios";
import LoadingBox from "../components/LoadingBox";
import MessageBox from "../components/MessageBox";

export default function HomeScreen() {
  const [allDataProduct, setAllDataProduct] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  useEffect(() => {
    setLoading(true);
    Axios.get(EndPoint.ALL_PRODUCT_LIST)
      .then((res) => {
        setAllDataProduct(res.data);
        setLoading(false);
      })
      .catch((err) => {
        setError(err.message);
        setLoading(false);
      });
  }, []);

  return (
    <div className="row center">
      {loading ? (
        <LoadingBox />
      ) : error ? (
        <MessageBox variant="danger"> {error}</MessageBox>
      ) : (
        allDataProduct.map((product) => (
          <Product product={product} key={product._id} />
        ))
      )}
    </div>
  );
}
