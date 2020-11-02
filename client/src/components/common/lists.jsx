import React from "react";

const List = ({ header, name, data, isReservation, isWaitList }) => {
  if (data.length == 0 && isReservation)
    return <div>There are currently no reservations</div>;
  if (data.length == 0 && isWaitList) return null;
  return (
    <section className="card">
      <div className="card-header">
        <h2>{header}</h2>
      </div>
      <div className="card-body" id={name}>
        {data.map((item) => (
          <div key={item._id} className="box">
            <h3>{item.name}</h3>
            <p>{item.email}</p>
            <p>{item.phoneNumber}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default List;