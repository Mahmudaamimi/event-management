import React from "react";
import { Link } from "react-router-dom";

const Card = ({ card }) => {
  const { id, image, title, description } = card;

  const truncatedDescription =
    description.length > 200 ? description.slice(0, 200) + "..." : description;

  return (
    <Link to={`/serviceDetails/${id}`} className="card bg-base-100 shadow-xl">
      <figure>
        <img src={image} alt="" />
      </figure>
      <div className="card-body">
        <h2 className="card-title">{title}</h2>
        <p>{truncatedDescription}</p>
        <button className="btn bg-green-500 text-white">
          Read more...
        </button>
      </div>
    </Link>
  );
};

export default Card;
