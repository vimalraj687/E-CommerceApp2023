import React from "react";
import Layout from "../../Components/Layout/Layout.js";
import AdminMenu from "../../Components/Layout/AdminMenu.js";

// import UserMenu from "../../Components/Layout/UserMenu.js";

const Users = () => {
  return (
    <Layout title={"Dashboard - All Users"}>
      <div className="container-fluid p-3 dashboard">
        <div className="row">
          <div className="col-md-3">
          <AdminMenu />
          </div>
          <div className="col-md-9 user1">
            <h1>All Users</h1>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Users;
