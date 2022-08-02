import React from "react";
import { Demo } from "../product/Demo";
import { Indi } from "../product/Indi";
// import { AddTodo } from "../addTodo/AddTodo";
// import { ShowTodo } from "../showTodo/ShowTodo";
// import "./Home.css";

export const Home = () => {
  
  return (
    <div className="homeContainer">
      <Demo/>
      <Indi/>
    </div>
  );
};
