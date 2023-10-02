import React, { useState } from "react";
import { getOrders, searchOrder } from "../../Redux/Order/orderAction";
import { useDispatch } from "react-redux";
import { Button } from "@chakra-ui/react";
import { FaSearchengin } from "react-icons/fa";

const SearchOrder = ({ onSearch }) => {
  const [field, setField] = useState("");
  const [value, setValue] = useState("");
  const dispatch = useDispatch();
  const handleResultClick = () => {
    onSearch(field, value);
    dispatch(searchOrder(field, value));
  };

  return (
    <div className="container">
      <div
        className="searchContainer"
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5 }}
      >
        {/* Add inputs for field and value */}
        <select
          className="select"
          value={field}
          onChange={(e) => setField(e.target.value)}
        >
          <option value="">All Orders</option>
          <option value="paymentMethod">Payment Method</option>
          <option value="_id">Order Id</option>
          <option value="orderStatus">Order Status</option>
          <option value="shippingInfo.fullName">By Name</option>
          <option value="shippingInfo.pinCode">Pin Code</option>
          <option value="user">User Id</option>





          {/* Add more options as needed */}
        </select>
        <input
          className="input"
          type="text"
          placeholder="Value"
          value={value}
          onChange={(e) => setValue(e.target.value)}
        />

        <Button
          rightIcon={<FaSearchengin />}
          colorScheme="teal"
          variant="solid"
          className="button"
          onClick={handleResultClick}
        ></Button>
      </div>
    </div>
  );
};

export default SearchOrder;
