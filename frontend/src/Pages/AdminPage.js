import React from "react";
import "../Css/AdminPage.css";
import AdminCategory from "../Components/Admin/AdminCategory";
import AdminSubCategory from "../Components/Admin/AdminSubCategory";

function AdminPage() {
  return (
    <div>
      <div>
        <AdminCategory/>
        <AdminSubCategory/>
        
      </div>
    </div>
  );
}

export default AdminPage;
