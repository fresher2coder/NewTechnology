import React from "react";
import Product from "./Product";
import { ErrorBoundary } from "react-error-boundary";
import ErrorFallBack from "./ErrorFallBack";

function ProductList() {
  return (
    <>
      <ErrorBoundary FallbackComponent={ErrorFallBack}>
        <Product name="Product A" />
        <Product name="Product B" />
        {/* <Product /> */}
      </ErrorBoundary>
    </>
  );
}

export default ProductList;
