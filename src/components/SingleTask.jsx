import React, { useState } from "react";
import PropTypes from "prop-types"

function SingleTask({taskObj, removeTodo}) {

    const [isChecked, setIsChecked] = useState(taskObj.completed);

    const handleChange = () => {
        setIsChecked(!isChecked);
    };
     
    return (
        <li className={isChecked === true ? 'flex justify-between items-center w-full p-4 ps-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-200 focus:ring-blue-500 focus:border-blue-500' : 'flex justify-between items-center w-full p-4 ps-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 '}>
            <input type="checkbox" checked={isChecked} onChange={handleChange}/>
            <p className={isChecked === true ? 'uppercase line-through' : 'uppercase'}>{taskObj.task}</p>
            <button onClick={() => removeTodo(taskObj.id)} className="text-white bg-red-600 px-2.5 py-1 rounded-md" type="button">Delete</button>
        </li>
    )

}

export default SingleTask
