import React from "react";
import { Link, Outlet, useLocation } from "react-router-dom";

import { BarChart } from "@mui/x-charts";
import OrderStore from "../store/orderStore/OrderStore";
function DashbordAdmin() {
    const location=useLocation()
  return (
    <OrderStore>
    <div>
      <div className="sidebar">
        <p>
          <Link to={"/admin"}>home</Link><br />
          <Link to={"/admin/orders"}>orders</Link><br />
          <Link to={"/admin/products"}>products</Link><br />
          <Link to={"/admin/addproduct"}>add product</Link>



        </p>
      </div>
      <div className="outlet">
       
     {location.pathname==="/admin"||location.pathname==="/admin/"? <BarChart
          xAxis={[
            { scaleType: "band", data: ["group A", "group B", "group C"] },
          ]}
          series={[
            { data: [4, 3, 5] },
            { data: [1, 6, 3] },
            { data: [2, 5, 6] },
            { data: [5, 5, 6] },

          ]}
          width={500}
          height={300}
        />:   <Outlet />}
      </div>
    </div>
    </OrderStore>
  );
}

export default DashbordAdmin;
