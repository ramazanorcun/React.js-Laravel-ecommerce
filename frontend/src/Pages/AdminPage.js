import React from "react";
import "../Css/AdminPage.css";
import AdminAddCategory from "../Components/AdminAddCategory";
import AdminSubCategoryTable from "../Components/AdminAddSubCategory";

function AdminPage() {
  return (
    <div>
      <div>
        <AdminAddCategory />
        <AdminSubCategoryTable />
      </div>
    </div>
  );
}

export default AdminPage;
