import React from "react";
import { useState, useEffect } from "react";
import "./MyProfile.css";
import Avatar from "../../components/Avatar/Avatar";
const MyProfile = (user, updateUser, userId) => {
  // const [formData, setFormData] = useState({
  //   name: user.name,
  //   username: user.username,
  //   email: user.email,
  //   phone: user.phone,
  //   address: user.address,
  // });
  const [userProfile, setUserProfile] = useState(null);
  const [formValues, setFormValues] = useState({
    name: "",
    username: "",
    email: "",
    phone: "",
    address: "",
  });

  useEffect(() => {
    fetch(`https://hedspi.dev/core/profile`)
      .then((response) => response.json())
      .then((data) => setUserProfile(data))
      .catch((error) => console.log(error));
  }, [userId]);

  useEffect(() => {
    if (userProfile) {
      setFormValues({
        name: userProfile.name,
        username: userProfile.username,
        email: userProfile.email,
        phone: userProfile.phone,
        address: userProfile.address,
      });
    }
  }, [userProfile]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormValues({ ...formValues, [name]: value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    fetch(`https://hedspi.dev/user/profile`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formValues),
    })
      .then((response) => response.json())
      .then((data) => setUserProfile(data))
      .catch((error) => console.log(error));
  };

  return (
    <>
        <div >
          <form onSubmit={handleSubmit}>
            <div className="form-profile">
              <div className="form-profile-title">
                <label className="form-profile-title__label">
                  Thông tin cá nhân
                </label>
                <button type="submit" className="form-profile-title__button">
                  Lưu
                </button>
              </div>
              <label htmlFor="imgs">
                <div className="form-profile-avatar">
                  <Avatar margin="0 10px 0 10px" size="big" />
                </div>
              </label>
              <input
                id="imgs"
                type="file"
                name="myImage"
                accept="image/*"
                hidden
              />
              <div className="profile-welcome">
                Chào mừng Mai Đào Tuấn Thành
              </div>
              <div className="form-profile-info-row">
                <div
                  style={{ marginRight: "10px" }}
                  className="form-profile-info"
                >
                  <label className="form-profile-info__label">Name</label>
                  <br />
                  <input
                    className="form-profile-info__input"
                    value={formValues.name}
                    onChange={handleChange}
                    type="text"
                    required
                  />
                </div>
                <div className="form-profile-info">
                  <label className="form-profile-info__label">User name</label>
                  <br />
                  <input
                    className="form-profile-info__input"
                    value={formValues.username}
                    onChange={handleChange}
                    type="text"
                    required
                  />
                </div>
                <div
                  style={{ marginRight: "10px" }}
                  className="form-profile-info"
                >
                  <label className="form-profile-info__label">Email</label>
                  <br />
                  <input
                    className="form-profile-info__input"
                    value={formValues.email}
                    onChange={handleChange}
                    type="text"
                    required
                  />
                </div>
                <div className="form-profile-info">
                  <label className="form-profile-info__label">Phone</label>
                  <br />
                  <input
                    className="form-profile-info__input"
                    value={formValues.phone}
                    onChange={handleChange}
                    type="text"
                  />
                </div>
                <div
                  style={{ marginRight: "10px" }}
                  className="form-profile-info"
                >
                  <label className="form-profile-info__label">Address</label>
                  <br />
                  <input
                    className="form-profile-info__input"
                    type="text"
                    value={formValues.address}
                    onChange={handleChange}
                  />
                </div>
              </div>
            </div>
          </form>
        </div>
    </>
  );
};

export default MyProfile;
