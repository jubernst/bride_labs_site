import React, { useState } from "react";
import {} from "../utils/getPhotos";

function RequestForm() {
  const [formState, setFormState] = useState({
    fname: "",
    lname: "",
    email: "",
    phone: "",
    location: "",
    number: "",
    date: "",
    finish: "",
    makeup: false,
    comments: "",
  });
  const [errorMessage, setErrorMessage] = useState("");

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormState({ ...formState, [name]: value });
  };

  const handleFormSubmit = async (e) => {
    e.preventDefault();

    if (
      formState.fname === "" ||
      formState.lname === "" ||
      formState.email === "" ||
      formState.location === "" ||
      formState.number === "" ||
      formState.date === "" ||
      formState.finish === ""
    ) {
      setErrorMessage("One or more necessary fields are blank");
      return;
    }

    try {
      // send formState as an email to bridelabs.ca@gmail.com
    } catch (err) {
      console.error(err);
      return;
    }

    // clear inputs after a successful submission
    setFormState({
      fname: "",
      lname: "",
      email: "",
      phone: "",
      location: "",
      number: "",
      date: "",
      finish: "",
      makeup: false,
      comments: "",
    });

    // clear error message
    setErrorMessage("");
  };

  return (
    <form className="request-form" onSubmit={handleFormSubmit}>
      <div className="fname-input">
        <input
          type="text"
          name="fname"
          id="fname"
          placeholder="First Name*"
          onChange={handleInputChange}
        />
      </div>
      <div className="lname-input">
        <input
          type="text"
          name="lname"
          id="lname"
          placeholder="Last Name*"
          onChange={handleInputChange}
        />
      </div>
      <div className="email-input">
        <input
          type="email"
          name="email"
          id="email"
          placeholder="Email*"
          onChange={handleInputChange}
        />
      </div>
      <div className="phone-input">
        <input
          type="text"
          name="phone"
          id="phone"
          placeholder="Phone Number"
          onChange={handleInputChange}
        />
      </div>
      <div className="location-input">
        <input
          type="text"
          name="location"
          id="location"
          placeholder="Address where the services will be provided*"
          onChange={handleInputChange}
        />
      </div>
      <div className="number-input">
        How many people will need services?*
        <input
          type="text"
          name="number"
          id="number"
          onChange={handleInputChange}
        />
      </div>
      <div className="date-input">
        What day will you need the services?*
        <input type="date" name="date" id="date" onChange={handleInputChange} />
      </div>
      <div className="finish-input">
        What time do you need the services done by?*
        <input
          type="text"
          name="finish"
          id="finish"
          onChange={handleInputChange}
        />
      </div>
      <div className="makeup-input">
        Check this box if you require makeup services as well:
        <input
          type="checkbox"
          name="makeup"
          id="makeup"
          onChange={handleInputChange}
        />
      </div>
      <div className="comments-input">
        <input
          type="text"
          name="comments"
          id="comments"
          placeholder="Comments / Questions"
          onChange={handleInputChange}
        />
      </div>

      {errorMessage && (
        <div>
          <p className="field-err">{errorMessage}</p>
        </div>
      )}

      <div className="submit-div">
        <button className="submit-btn" type="submit">
          Submit
        </button>
      </div>
    </form>
  );
}

export default RequestForm;
