import axios from "axios";
import { checkTargetForNewValues } from "framer-motion";


export const getOrders = (page) => async (dispatch) => {
    try {
      dispatch({
        type: "allOrderRequest",
      });
  
      const { data } = await axios.get(`/attar/v1/get-all-order?page=${page}`);
  
      dispatch({
        type: "allOrderSuccess",
        payload: data,
      });
    } catch (error) {
      dispatch({
        type: "allOrderFail",
        payload: error.response.data.message,
      });
    }
  };