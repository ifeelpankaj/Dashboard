import React, { Fragment } from "react";
import { useSelector } from "react-redux";

const MainDash = () => {

  const { products } = useSelector((state) => state.items);

  return (
    <Fragment>
      <section className="mainDashCo">
        <div>
          <h2>DASHBOARD</h2>
        </div>
        <span className="cards">
          <div >
           
            <h3>TOTAL REVENUE</h3>
          </div>
          {/* <div>{products.length}</div> */}
          <div>TOTAL USER</div>
          <div>TOTAL ORDERS</div>
        </span>
      </section>
    </Fragment>
  );
};

export default MainDash;
