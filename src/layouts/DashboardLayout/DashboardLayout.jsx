import React from "react";
import "./DashboardLayout.css";
import { useState } from "react";
import { Link } from "react-router-dom";
const DashboardLayout = (props) => {
  const items = [
    { id: "Thông tin cá nhân", path: "my-profile" },
    { id: "Bài viết", path: "post" },
    { id: "Bookmark", path: "bookmark" },
    { id: "Người theo dõi", path: "follower" },
    { id: "Đang theo dõi", path: "following" },
  ];
  const [selectedItem, setSelectedItem] = useState("Thông tin cá nhân");

  const handleItemClick = (itemIndex) => {
    setSelectedItem(itemIndex);
  };
  return (
    <div className="profile-container">
      <div className="dashboard-profile">
        <div className="dashboard-profile__title">DASHBOARD</div>
        <div>
          <ul>
            {items.map((item) => (
              <li
                key={item.id}
                className={selectedItem === item.id ? "move-right" : ""}
                onClick={() => handleItemClick(item.id)}
              >
                <Link className="dashboard-profile__option" to={`/dashboard/${item.path}`}>{item.id}</Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
      <div className="dashboard-children">{props.children}</div>
    </div>
  );
};

export default DashboardLayout;
