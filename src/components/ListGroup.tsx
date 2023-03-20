import React from "react";

export const ListGroup = () => {
  return (
    <div className="m-5 flex flex-col gap-4 border-b pb-5 text-black/70">
      <span className="text-xl font-semibold">Categories</span>
      <ul className="flex flex-col gap-4 font-medium">
        <li className="flex items-center  gap-2">
          <input type="checkbox" />
          <span>All</span>
        </li>
        <li className="flex items-center  gap-2">
          <input type="checkbox" />
          <span>Kitchen</span>
        </li>
        <li className="flex items-center  gap-2">
          <input type="checkbox" />
          <span>Books</span>
        </li>
        <li className="flex items-center  gap-2">
          <input type="checkbox" />
          <span>Electronics</span>
        </li>

        <li className="flex items-center  gap-2">
          <input type="checkbox" />
          <span>Kitchen</span>
        </li>
      </ul>
    </div>
  );
};
