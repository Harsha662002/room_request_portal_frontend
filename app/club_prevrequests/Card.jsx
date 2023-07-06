import React from "react";

const Card = ({ nameOfTheEvent, date, hallBooked, request, status }) => {
  return (
    <div className="flex bg-club_prevrequests-card-bg text-club_prevrequests-card-text">
      <div className="w-4/5 px-4 py-2">
        <div className="flex ">
          <h3>Name of the Event:</h3> <p className="ml-4">{nameOfTheEvent}</p>
        </div>
        <div className="flex ">
          <h3>Date of the Event:</h3>{" "}
          <p className="ml-4">{date.toDateString()}</p>
        </div>
        <div className="flex ">
          <h3>Hall Booked:</h3> <p className="ml-4">{hallBooked}</p>
        </div>
        <div className="flex ">
          <h3>Request:</h3> <p className="ml-4">{request}</p>
        </div>
      </div>
      <div className="flex items-end pb-4">
        <div className="flex items-center">
          <h3 className="text-lg">Status:</h3> <p className="ml-4">{status}</p>
        </div>
      </div>
    </div>
  );
};

export default Card;
