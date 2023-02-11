import React from "react";
import "./Profile.css";
import Avatar from "./../Avatar/Avatar";
const Profile = (props) => {
  const { name, username, email, phone, address } = props;
  
  return (
    <div className="form-profile-container">
      <form action="">
        <div className="form-profile">
          <div className="form-profile-title">
            <label className="form-profile-title__label">Thông tin cá nhân</label>
            <button type="submit" className="form-profile-title__button">
              Lưu
            </button>
          </div>
          <label htmlFor="imgs">
            <div className="form-profile-avatar">
              <Avatar margin="0 10px 0 10px" size="big" />
            </div>
          </label>
          <input id="imgs" type="file" name="myImage" accept="image/*"  hidden/>
          <div className="profile-welcome">Chào mừng Mai Đào Tuấn Thành</div>
          <div className="form-profile-info-row">
            <div style={{ marginRight: "10px" }} className="form-profile-info">
              <label className="form-profile-info__label">Name</label>
              <br />
              <input className="form-profile-info__input" value="Mai Dao Tuan Thanh" type="text" />
            </div>
            <div className="form-profile-info">
              <label className="form-profile-info__label">User name</label>
              <br />
              <input className="form-profile-info__input" value={username} type="text" />
            </div>
            <div style={{ marginRight: "10px" }} className="form-profile-info">
              <label className="form-profile-info__label">Email</label>
              <br />
              <input className="form-profile-info__input" value={email} type="text" />
            </div>
            <div className="form-profile-info">
              <label className="form-profile-info__label" >Phone</label>
              <br />
              <input className="form-profile-info__input" value={phone} type="text" />
            </div>
            <div style={{ marginRight: "10px" }} className="form-profile-info">
              <label className="form-profile-info__label">Address</label>
              <br />
              <input className="form-profile-info__input" value={address} type="text" />
            </div>
          </div>
        </div>
      </form>
    </div>
  );
};

export default Profile;
