import React, { useState } from "react";
import { tasks } from "../tasks";
import SingleTask from "./singleTask";

function List({todos, removeTodo}) {
    
    if (todos.length <= 0 ) {
      return (
        <>
          <h1 className="uppercase">La Lista è vuota</h1>
        </>
      )
    }
    
    return (
      <>
        {todos.map((task) => (
          <SingleTask taskObj={task} key={task.id} removeTodo={removeTodo}></SingleTask>
        ))}
      
      </>
    )  



}

export default List
