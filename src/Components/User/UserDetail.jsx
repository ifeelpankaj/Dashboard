import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { getUserDetails } from '../../Redux/Auth/AuthAction';

const UserDetail = () => {

    const dispatch = useDispatch();

    const { user } = useSelector((state) => state.userInfo);

    console.log(user)

    const { id } = useParams();


    useEffect(() => {
        dispatch(getUserDetails(id));
      }, [dispatch, id]);

  return (
    <div className="user-profile">
      <div className="avatar">
        <img src={user.avatar.url} alt="User Avatar" />
      </div>
      <div className="user-info">
        <h2>{user.name}</h2>
        <p>Email: {user.email}</p>
        <p>Role: {user.role}</p>
        <p>Member Since: {new Date(user.createdAt).toLocaleDateString()}</p>
        {user.cart.length > 0 && (
          <div className="cart-info">
            <h3>Shopping Cart</h3>
            <ul>
              {user.cart.map((item) => (
                <li key={item.productId}>
                  {item.productName} - Quantity: {item.quantity}
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </div>
  )
}

export default UserDetail