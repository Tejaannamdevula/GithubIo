import React, { useState } from "react";

function ProfileForm({ addProfile }) {
  const [formData, setFormData] = useState({
    UserName: "",
    password: "",
  });

  const handleChange = (event) => {
    setFormData({ ...formData, [event.target.name]: event.target.value });
  };

  const handleForm = (event) => {
    event.preventDefault();
    addProfile(formData);
    setFormData({ UserName: "", password: "" });
  };

  return (
    <>
      <form className="profile-form" onSubmit={handleForm}>
        <h2 style={{ textAlign: "center" }}>Registration Form</h2>
        <input
          type="text"
          name="UserName"
          value={formData.UserName}
          placeholder="Username"
          onChange={handleChange}
        />
        <input
          type="password"
          name="password"
          value={formData.password}
          placeholder="Password"
          onChange={handleChange}
        />
        <button type="submit">Add Profile</button>
      </form>
    </>
  );
}

export default ProfileForm;
