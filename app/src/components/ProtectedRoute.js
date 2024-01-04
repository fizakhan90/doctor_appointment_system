import React from "react";
import { Navigate } from "react-router-dom";
import login from "../pages/login";

export default function ProtectedRoute({children}){
 if(localStorage.getItem("token")){
    return children
 }else{
    return <Navigate to="/login"/>;
 }
}
