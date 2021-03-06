import React from "react";
import { NavLink } from "react-router-dom";

const Common = (props) => {
  return (
    <>
      <section id="header" className="d-flex align-items-center my-5">
        <div className="container-fluid">
          <div className="row">
            <div className="col-10 mx-auto">
              <div className="row">
                <div className="col-md-6 pt-5 pt-lg-0 order-2 order-lg-1 d-flex justify-content-center flex-column">
                  <h2 className="mt-5">
                    {props.btname}
                    <span>
                      <strong className="brand-name"> LearnTogether</strong>
                    </span>
                  </h2>
                  <h2 className="my-2">
                    We are a team of hardworking and talented developers.
                  </h2>
                  <div className="mt-3">
                    <NavLink to={props.visit} className="btn-get-started">
                      {props.btname}
                    </NavLink>
                  </div>
                </div>
                <div className="col-lg-6 order-1 order-lg-2 my-5 header-img">
                  <img
                    src={props.imgsrc}
                    className="img-fluid animated"
                    alt="Common"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Common;
