import React, { Fragment, useState } from "react";
import { useSelector } from "react-redux";
import "./UserOptions.css";
import { useHistory } from "react-router-dom"


const UserOptions = () => {
  let history = useHistory();
  const { user } = useSelector((state) => state.user);
const [visible,setVisible] = useState(false)
  return (
    <Fragment>
      <div className="avtRight">
        <img
          className="Icon"
          src={user?.avatar?.url ? user?.avatar?.url : "/Profile.png"}
          alt="Profile"
          onClick={() => setVisible(!visible)}
        />
       {visible && <div className="popup">
         <div className="popup_item" onClick={() => history.push("./account")}>Profile</div>
         <div className="popup_item">Profile</div>
         <div className="popup_item">Profile</div>
         <div className="popup_item">Profile</div>
        </div>} 
      </div>
    </Fragment>
  );
};

export default UserOptions;
