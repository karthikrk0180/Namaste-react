import { useContext } from "react";
import { CDN_URL } from "../utils/constants";
import UserContext from "../utils/UserContext";

const RestaurantCard = (props) => {
  const { resData } = props;
  const { loggedInUser } = useContext(UserContext);

  // Ensure resData and resData.info are defined before destructuring
  const { info } = resData || {};
  const { cloudinaryImageId, name, avgRating, cuisines, sla } = info || {};

  return (
    <div className="m-4 p-4 w-[240px] bg-gray-100 rounded-lg hover:bg-gray-300">
      <img
        className="rounded-lg"
        alt="food"
        src={CDN_URL + cloudinaryImageId}
      />
      <h3 className="font-bold py-4 text-lg">{name}</h3>
      <h4>{cuisines && cuisines.join(", ")}</h4>
      <h4>{avgRating}</h4>
      <h4>{sla && sla.deliveryTime} mins</h4>
      <h4>User: {loggedInUser}</h4>
    </div>
  );
};

export default RestaurantCard;
