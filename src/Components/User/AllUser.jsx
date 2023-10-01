import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import UserCard from "./UserCard";
import { getUser } from "../../Redux/Auth/AuthAction";

const AllUser = () => {
  const dispatch = useDispatch();

  const { users } = useSelector((state) => state.getUser);
  // console.log(users);
  useEffect(() => {
    dispatch(getUser());
  }, [dispatch]);
  return (
    <main className="mainctr">
     
      <div className="content">
        <div className="product-header">
          <div className="product-header-item-1">Avatar</div>
          <div className="product-header-item-2">Name</div>
          <div className="product-header-item-3">Role</div>
          <div className="product-header-item-4">Cart</div>
          <div className="product-header-item-5">Wishlist</div>
          <div className="product-header-item-6">Actions</div>
        </div>
        {users && users.length > 0 ? (
          users.map((user) => (
            <div key={user._id} className="product-item">
              {user.avatar ? (
                <UserCard
                  userId={user._id}
                  name={user.name}
                  avatar={user.avatar.url}
                  role={user.role}
                  cart={user.cart.length}
                  wishlist={user.wishlist.length}
                />
              ) : (
                <span>No avatar available</span>
              )}
            </div>
          ))
        ) : (
          <h2>Loading</h2>
        )}
      </div>
    </main>
  );
};

export default AllUser;
