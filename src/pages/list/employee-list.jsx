import React from "react";
import Table from "../../components/table/table";
import { Link } from "react-router-dom";

function EmployeeList() {
  return (
    <div>
      <h1>Employee List</h1>
      <Link to="/">View Form New Employee</Link>
      <Table />
    </div>
  );
}

export default EmployeeList;
