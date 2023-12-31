import axios from "axios";
import { serverUrl } from "../store";

export const getAllItems = () => async (dispatch) => {
  try {
    dispatch({
      type: "allProductRequest",
    });
    const { data } = await axios.get(`/attar/v1/get-all-product`);
    dispatch({
      type: "allProductSuccess",
      payload: data,
    });
    
  } catch (error) {
    dispatch({
      type: "allProductFail",
      payload: error.response.data.message,
    });
  }
};

export const searchProducts = (keyword='') => async (dispatch) => {
  try {
    dispatch({
      type: "allProductRequest",
    });
    const { data } = await axios.get(`/attar/v1/get-all-product?search=${keyword}`);
    dispatch({
      type: "allProductSuccess",
      payload: data,
    });
    
  } catch (error) {
    dispatch({
      type: "allProductFail",
      payload: error.response.data.message,
    });
  }
};

export const createNewItem = (formData) => async (dispatch) => {
  try {
    

    dispatch({
      type: "newProductRequest",
    });

    const { data } = await axios.post(`/attar/v1/create-product`, formData, {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    });
    dispatch({
      type: "newProductSuccess",
      payload: data.message,

    });
  } catch (error) {
    dispatch({
      type: "newProductFail",
      payload: error.response.data.message,
    });
  }
};

export const getProductDetails = (id) => async (dispatch) => {
  try {
    dispatch({ type: "detailRequest" });

    const { data } = await axios.get(`/attar/v1/product/${id}`);
    dispatch({
      type: "detailSuccess",
      payload: data,
    });
    return data; 
   
  } catch (error) {
    dispatch({
      type: "detailFailure",
      payload: error.response.data.message,
    });
  }
};



export const getAllReviews = (id) => async (dispatch) => {
  try {
    dispatch({ type: "allReviewRequest" });

    const { data } = await axios.get(`${serverUrl}/product-review`);

    dispatch({
      type: "allReviewSuccess",
      payload: data.reviews,
    });
  } catch (error) {
    dispatch({
      type: "allReviewFail",
      payload: error.response.data.message,
    });
  }
};

// NEW REVIEW
export const newReview = (reviewData) => async (dispatch) => {
  try {
    dispatch({ type: "newReviewRequest" });

    // const config = {
    //   headers: { "Content-Type": "multipart/form-data" },
    // };

    const { data } = await axios.put(`${serverUrl}/review-product`, reviewData );

    dispatch({
      type: "newReviewSuccess",
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: "newReviewFail",
      payload: error.response.data.message,
    });
  }
};

// Update Product
export const updateProduct = (id, productData) => async (dispatch) => {
  try {
    dispatch({ type: 'updateProductRequest' });

    const config = {
      headers: { "Content-Type": "application/json" },
    };

    const { data } = await axios.put(
      `/api/v1/admin/product/${id}`,
      productData,
      config
    );

    dispatch({
      type: 'updateProductSuccess',
      payload: data.success,
    });
  } catch (error) {
    dispatch({
      type: 'updateProductFail',
      payload: error.response.data.message,
    });
  }
};

// Delete Product

export const deleteProduct = (id) => async (dispatch) => {
  try {
    dispatch({ type: 'deleteProductRequest' });

    const { data } = await axios.delete(`/attar/v1/delete-product/${id}`);

   

    dispatch({
      type: 'deleteProductSuccess',
      payload: data.message,
    });
  } catch (error) {
    dispatch({
      type: 'deleteProductFail',
      payload: error.response.data.message,
    });
  }
};
