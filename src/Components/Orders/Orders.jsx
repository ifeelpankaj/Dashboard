import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { getOrders } from '../../Redux/Order/orderAction';
import OrderCard from './OrderCard';
import SearchOrder from './SearchOrder';
import toast from 'react-hot-toast';

const Orders = () => {
    const dispatch = useDispatch();
    const { orders,totalPages  } = useSelector((state) => state.orders);
    const { error,message } = useSelector((state) => state.process);

    useEffect(() => {
      if (error) {
        toast.error(error);
        dispatch({ type: "clearError" });
      }
      if (message) {
        toast.success(message);
        dispatch({ type: "clearMessage" });
        
        
      }
    }, [error, message, dispatch]);


    const [page, setPage] = useState(1);
    useEffect(() => {
   
        dispatch(getOrders(page));
      }, [dispatch, page]);

      const handlePageChange = (newPage) => {
        setPage(newPage);
      };
      const handleSearch = (query) => {};
  return (
    <main className="mainctr">
     <div className="fixed-search-bar">
          <SearchOrder onSearch={handleSearch} />
        </div>
      <div className="content">
        <div className="order-header">
          <div className="order-header-item-1">Orders Id</div>
          <div className="order-header-item-2">Method</div>
          <div className="order-header-item-3">Amount</div>
          <div className="order-header-item-4">Status</div>
          <div className="order-header-item-5">Actions</div>
        </div>
        {orders && orders.length > 0 ? (
          orders.map((order) => (
            <div key={order._id} className="product-item">
              
              <OrderCard
                  orderId={order._id}
                  username={order.user}
                  paymentMethod={order.paymentMethod}
                  totalAmount={order.totalAmount}
                  orderStatus={order.orderStatus}
                />
              
            </div>
          ))
        ) : (
          <h2>Loading</h2>
        )}
      </div>
      <div className="pagination">
          <button onClick={() => handlePageChange(page - 1)} disabled={page === 1}>
            Previous
          </button>
          <span>
            Page {page} of {totalPages}
          </span>
          <button onClick={() => handlePageChange(page + 1)} disabled={page === totalPages}>
            Next
          </button>

          
        </div>
    </main>
  )
}

export default Orders