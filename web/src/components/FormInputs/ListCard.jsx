import React from "react";

const ListCard = ({ data }) => {
  return (
    <div className="list-card">
      <h3>ID: {data.id}</h3>
      <p>UserName: {data.UserName}</p>
      <p>UserName: {data.password}</p>
    </div>
  );
};

export default ListCard;
