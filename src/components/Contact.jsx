import React, { useState } from "react";
import Footer from "./Footer";

const Contact = () => {
  const [data, setData] = useState({
    fullname: "",
    phone: "",
    email: "",
    msg: "",
  });

  const InputEvent = (e) => {
    const { name, value } = e.target;

    setData((preVal) => {
      return {
        ...preVal,
        [name]: value,
      };
    });
  };

  const formSubmit = (e) => {
    e.preventDefault();
    alert(
      `My name is ${data.fullname}, Mobile Number is ${data.phone}, Email Address is ${data.email} and Message is ${data.msg}`
    );
  };
  return (
    <>
      <div className="my-5">
        <h1 className="text-center">This is Contact Page</h1>
        <div className="container contact_div">
          <div className="row">
            <div className=" col-md-6 col-10 mx-auto">
              <form onSubmit={formSubmit}>
                <div class="mb-3">
                  <div class="mb-3">
                    <label for="exampleFormControlInput1" class="form-label">
                      Full Name
                    </label>
                    <input
                      type="text"
                      class="form-control"
                      id="exampleFormControlInput1"
                      required
                      name="fullname"
                      value={data.fullname}
                      onChange={InputEvent}
                      placeholder="Enter Your Full Name"
                    />
                  </div>
                  <label for="exampleFormControlInput1" class="form-label">
                    Phone
                  </label>
                  <input
                    type="number"
                    class="form-control"
                    id="exampleFormControlInput1"
                    required
                    name="phone"
                    value={data.phone}
                    onChange={InputEvent}
                    placeholder="Mobile Number"
                  />
                  <div class="mb-3">
                    <label for="exampleFormControlInput1" class="form-label">
                      Email Address
                    </label>
                    <input
                      type="email"
                      class="form-control"
                      id="exampleFormControlInput1"
                      required
                      name="email"
                      value={data.email}
                      onChange={InputEvent}
                      placeholder="name@example.com"
                    />
                  </div>
                </div>
                <div class="mb-3">
                  <label for="exampleFormControlTextarea1" class="form-label">
                    Message
                  </label>
                  <textarea
                    class="form-control"
                    id="exampleFormControlTextarea1"
                    rows="3"
                    required
                    name="msg"
                    value={data.msg}
                    onChange={InputEvent}
                  ></textarea>
                </div>
                <div class="col-12">
                  <button class="btn btn-outline-primary" type="submit">
                    Submit form
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
        <Footer />
      </div>
    </>
  );
};

export default Contact;