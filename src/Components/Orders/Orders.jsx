import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { getOrders } from '../../Redux/Order/orderAction';

const Orders = () => {
    const dispatch = useDispatch();
    const { orders,totalPages, totalOrders  } = useSelector((state) => state.orders);
    const [page, setPage] = useState(1);
    useEffect(() => {
   
        dispatch(getOrders(page));
      }, [dispatch, page]);

      const handlePageChange = (newPage) => {
        setPage(newPage);
      };
  return (
    <main className="mainctr">
     
      <div className="content">
        <div className="product-header">
          <div className="product-header-item-1">Orders Id</div>
          <div className="product-header-item-2">User Name</div>
          <div className="product-header-item-3"> Method</div>
          <div className="product-header-item-4">Amount</div>
          <div className="product-header-item-5">Status</div>
          <div className="product-header-item-6">Actions</div>
        </div>
        {orders && orders.length > 0 ? (
          orders.map((user) => (
            <div key={user._id} className="product-item">
              
                Hii
              
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