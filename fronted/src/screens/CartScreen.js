import React from "react";
import { useParams, useSearchParams } from "react-router-dom";

export default function CartScreen() {
  const { id } = useParams();
  const [qty] = useSearchParams();
  const QTY = qty.get("qty") || 1;

  return (
    <div>
      <p>CartScreen</p>
      <p>
        Add to cart : productId : {id} Qty : {QTY}
      </p>
    </div>
  );
}
