import React from "react";

const AdminLayout = ({ children }) => {
  return (
    <div className="flex min-h-screen">
      <aside className="bg-slate-200 p-5 ">Admin sidebar</aside>
      <div>{children}</div>
    </div>
  );
};

export default AdminLayout;
