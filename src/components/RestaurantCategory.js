import { useState } from "react";
import ItemList from "./ItemList";

const RestaurantCategory = ({ data, showItems, setShowIndex }) => {
  const handlClick = () => {
    setShowIndex();
  };

  return (
    <div>
      {/*Header */}
      <div className="w-6/12 m-auto my-4 bg-gray-200 shadow-lg p-5 ">
        <div
          className="flex justify-between cursor-pointer"
          onClick={handlClick}
        >
          <span className="font-bold text-lg">
            {data.title} ({data.itemCards.length})
          </span>
          <span>⬇️</span>
        </div>
        {showItems && <ItemList items={data.itemCards} />}
      </div>
    </div>
  );
};

export default RestaurantCategory;
