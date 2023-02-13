import React from "react";
import { useState, useEffect } from "react";
import "./MyProfile.css";
import Avatar from "../../components/Avatar/Avatar";
import getProfile from "../../service/profile";

const MyProfile = () => {
  // const [userProfile, setUserProfile] = useState(null);
  // const [formValues, setFormValues] = useState({
  //   name: "",
  //   username: "",
  //   email: "",
  //   phone: "",
  //   address: "",
  // });

  // useEffect(() => {
  //   fetch(`https://hedspi.dev/core/profile`)
  //     .then((response) => response.json())
  //     .then((data) => setUserProfile(data))
  //     .catch((error) => console.log(error));
  // }, [userId]);

  // useEffect(() => {
  //   if (userProfile) {
  //     setFormValues({
  //       name: userProfile.name,
  //       username: userProfile.username,
  //       email: userProfile.email,
  //       phone: userProfile.phone,
  //       address: userProfile.address,
  //     });
  //   }
  // }, [userProfile]);

  // const handleChange = (e) => {
  //   const { name, value } = e.target;
  //   setFormValues({ ...formValues, [name]: value });
  // };

  // const handleSubmit = (event) => {
  //   event.preventDefault();
  //   fetch(`https://hedspi.dev/user/profile`, {
  //     method: "PUT",
  //     headers: {
  //       "Content-Type": "application/json",
  //     },
  //     body: JSON.stringify(formValues),
  //   })
  //     .then((response) => response.json())
  //     .then((data) => setUserProfile(data))
  //     .catch((error) => console.log(error));
  // };
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");

  useEffect(() => {
    (async () => {
      const profile = await getProfile();
      //   console.log(profile.user)
      setName(profile.user.name);
      setEmail(profile.user.email);
    })();
  }, []);
  return (
    <>
      <div>
        <form>
          <div className="form-profile">
            <div className="form-profile-title">
              <label className="form-profile-title__label">
                Thông tin cá nhân
              </label>
              <label
                className="form-profile-title__button">
                Lưu
              </label>
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
            <div className="profile-welcome">Chào mừng {name}</div>
            <div className="form-profile-info-row">
              <div
                style={{ marginRight: "10px" }}
                className="form-profile-info"
              >
                <label className="form-profile-info__label">Name:</label>
                <span className="form-profile-info__data">{name}</span>
                <br />
                {/* <input
                  className="form-profile-info__input"
                  value={name}
                  // onChange={handleChange}
                  type="text"
                  required
                /> */}
              </div>
              {/* <div className="form-profile-info">
                <label className="form-profile-info__label">User name</label>
                <br />
                <input
                  className="form-profile-info__input"
                  value={username}
                  // onChange={handleChange}
                  type="text"
                  required
                />
              </div> */}
              <div
                style={{ marginRight: "10px" }}
                className="form-profile-info"
              >
                <label className="form-profile-info__label">Email:</label>
                <span className="form-profile-info__data">{email}</span>
                <br />
                {/* <input
                  className="form-profile-info__input"
                  value={email}
                  // onChange={handleChange}
                  type="text"
                  required
                /> */}
              </div>
              {/* <div className="form-profile-info">
                <label className="form-profile-info__label">Phone</label>
                <br />
                <input
                  className="form-profile-info__input"
                  value={phone}
                  type="text"
                />
              </div> */}
              {/* <div
                style={{ marginRight: "10px" }}
                className="form-profile-info"
              >
                <label className="form-profile-info__label">Address</label>
                <br />
                <input
                  className="form-profile-info__input"
                  type="text"
                  value={address}
                />
              </div> */}
            </div>
          </div>
        </form>
      </div>
    </>
  );
};

export default MyProfile;
