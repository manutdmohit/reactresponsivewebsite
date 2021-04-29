import React from "react";

const Card = (props) => {
  return (
    <>
      <div className="col-md-4 col-1- mx-auto mb-4 h-50 w-50">
        <div className="card">
          <img
            className="card-img-top"
            src={props.imgsrc}
            alt="Card image cap"
          />
          <div className="card-body">
            <h5 className="card-title text-center font-weight-bold">
              {props.title}
            </h5>
          </div>
        </div>
      </div>
    </>
  );
};

export default Card;
