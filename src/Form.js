import React, { useState } from "react";
import SharedInput from "./SharedInput";

const Form = () => {
  const [formData, setFormData] = useState({
    name: "",
    address: "",
    gender: "",
  });

  const [isSubmitted, setIsSubmitted] = useState(false); 

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === "checkbox" ? checked : value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    setIsSubmitted(true);
    setTimeout(() => {
      setIsSubmitted(false); 
      console.log("Form Submitted", formData);
    }, 2000);
  };

  return (
    <div>
      {isSubmitted ? (
        <div className="submit-message">Your Form Submitted!</div>
      ) : (
        <form onSubmit={handleSubmit}>
          <SharedInput
            label="Name"
            name="name"
            type="text"
            value={formData.name}
            onChange={handleChange}
          />

          <SharedInput
            label="Address"
            name="address"
            type="textarea"
            value={formData.address}
            onChange={handleChange}
          />

          <SharedInput
            label="Gender"
            name="gender"
            type="radio"
            value={formData.gender}
            onChange={handleChange}
            options={[
              { label: "Male", value: "male" },
              { label: "Female", value: "female" },
            ]}
          />

          <button type="submit">Submit</button>
        </form>
      )}
    </div>
  );
};

export default Form;
