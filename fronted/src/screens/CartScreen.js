import React, { useEffect } from "react";
import { useParams, useSearchParams } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addToCart } from "../redux/actions/cartActions";

export default function CartScreen() {
  const dispatch = useDispatch();
  const { id } = useParams();
  const [qty] = useSearchParams();
  const QTY = qty.get("qty") || 1;

  useEffect(() => {
    dispatch(addToCart(id, QTY));
  }, [dispatch, id, QTY]);

  return (
    <div>
      <p>CartScreen</p>
      <p>
        Add to cart : productId : {id} Qty : {QTY}
      </p>
    </div>
  );
}
