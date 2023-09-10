import React, { Fragment, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAllItems } from "../../Redux/Actions/ItemAction";
import ProductCard from "./ProductCard";
import SearchBar from "./SearchBar";

const AllProducts = () => {
  const dispatch = useDispatch();

  const { products } = useSelector((state) => state.items);

  useEffect(() => {
    dispatch(getAllItems());
  }, [dispatch]);
  const handleSearch = (query) => {};

  return (
    <Fragment>
      <main className="mainctr">
        <div className="fixed-search-bar">
          <SearchBar onSearch={handleSearch} />
        </div>
        <div className="content">
          <div className="product-header">
            <div className="product-header-item-1">Images</div>
            <div className="product-header-item-2">Name</div>
            <div className="product-header-item-3">Price</div>
            <div className="product-header-item-4">Category</div>
            <div className="product-header-item-5">Stock</div>
            <div className="product-header-item-6">Actions</div>

          </div>
          {products && products.length > 0 ? (
            products.map((product) => (
              <div key={product._id} className="product-item">
                <ProductCard
                  productId={product._id}
                  name={product.name}
                  avatar={product.images[0].url}
                  price={product.price}
                  stock={product.Stock}
                  category={product.category}
                  Stock={product.Stock}
                />
              </div>
            ))
          ) : (
            <h2>Loading</h2>
          )}
        </div>
      </main>
    </Fragment>
  );
};

export default AllProducts;
