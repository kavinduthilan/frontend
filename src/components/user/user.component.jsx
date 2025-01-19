import React from "react";
import "./user.component.css";
import { MyUserForm } from "./form";

function UserComponent() {
  return <div>
    <h1>User Information</h1>
    <p>This is a user component</p>
    <MyUserForm />
  </div>;
}

export default UserComponent;
