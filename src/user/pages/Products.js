import { Typography } from "@mui/material";
import React, { useState } from "react";
import useProducts from "../hooks/components/useProducts";
// import { useGetProducts } from "../hooks/api/useProduct";

const Products = () => {
  const [data, setData] = useState(useProducts);

  const filterPrice = (price) => {
    setData(data.filter((item) => item.price === price));
  };

  const filterStock = (stock) => {
    setData(data.filter((item) => item.stock > stock));
  };

  const filterItemCat = (catItem) => {
    const updatedProducts = useProducts.filter((item) => {
      return item.category.name === catItem;
    });
    setData(updatedProducts);
  };
  return (
    <div className="container" id="products-section">
      <Typography variant="h4" class="heading">
        Products
      </Typography>
      <div className="row">
        <div className="filter-section">
          <div class="dropdown">
            <button
              class="btn btn-secondary dropdown-toggle"
              type="button"
              id="dropdownMenuButton1"
              data-bs-toggle="dropdown"
              aria-expanded="false"
            >
              Category
            </button>
            <ul class="dropdown-menu" aria-labelledby="dropdownMenuButton1">
              <li>
                <button
                  class="dropdown-item"
                  onClick={() => filterItemCat("Electronics")}
                >
                  Electronics
                </button>
              </li>
              <li>
                <button
                  class="dropdown-item"
                  onClick={() => filterItemCat("Clothing")}
                >
                  Clothing
                </button>
              </li>
              <li>
                <button
                  class="dropdown-item"
                  onClick={() => filterItemCat("Groceries")}
                >
                  Groceries
                </button>
              </li>
            </ul>
          </div>
          <div class="dropdown">
            <button
              class="btn btn-secondary dropdown-toggle"
              type="button"
              id="dropdownMenuButton1"
              data-bs-toggle="dropdown"
              aria-expanded="false"
            >
              Price
            </button>
            <ul class="dropdown-menu" aria-labelledby="dropdownMenuButton1">
              <li>
                <button class="dropdown-item" onClick={() => filterPrice(1000)}>
                  Rs 0 to Rs 1000
                </button>
              </li>
              <li>
                <button class="dropdown-item" onClick={() => filterPrice(5000)}>
                  Rs 1000 to Rs 5000
                </button>
              </li>
              <li>
                <button class="dropdown-item" onClick={() => filterPrice(6000)}>
                  Rs 5000+
                </button>
              </li>
            </ul>
          </div>
          <div class="dropdown">
            <button
              class="btn btn-secondary dropdown-toggle"
              type="button"
              id="dropdownMenuButton1"
              data-bs-toggle="dropdown"
              aria-expanded="false"
            >
              Available
            </button>
            <ul class="dropdown-menu" aria-labelledby="dropdownMenuButton1">
              <li>
                <button class="dropdown-item" onClick={() => filterStock(0)}>
                  Yes
                </button>
              </li>
              <li>
                <button class="dropdown-item" onClick={() => filterStock(0)}>
                  Out of Stock
                </button>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="row gx-5">
        {data?.map((product) => (
          <div key={product.id} className="product-card col-md-3 bg-light">
            <div className="product-single">
              <img
                style={{
                  minWidth: "160px",
                  maxWidth: "200px",
                  minHeight: "160px",
                  maxHeight: "100%",
                }}
                src={product?.images && product?.images?.url}
                alt="img"
              />
              <div className="product-content">
                <Typography>{product?.name}</Typography>
                <Typography>Category: {product?.category?.name}</Typography>
                <Typography>Price: {product?.price}</Typography>
                <Typography>Stock: {product?.stock}</Typography>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Products;
