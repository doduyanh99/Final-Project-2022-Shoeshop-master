import React, { Fragment, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import "./UserOptions.css";
import { useHistory } from "react-router-dom"
import { logout } from "../../../actions/userAction";
import { useAlert } from "react-alert";

const UserOptions = () => {
  let history = useHistory();
  const alert = useAlert();
  const dispatch = useDispatch();
  const { user } = useSelector((state) => state.user);

  const [visible, setVisible] = useState(false)
  return (
    <Fragment>
      { }    <div className="avtRight">
        <img
          className="Icon"
          src={user?.avatar?.url ? user?.avatar?.url : "/Profile.png"}
          alt="Profile"
          onClick={() => setVisible(!visible)}
        />
        {visible && <div className="popup">
          {user.role === "admin" && <div className="popup_item" onClick={() => history.push("/admin/dashboard")}>Manager</div>}
          <div className="popup_item" onClick={() => history.push("/account")}>Profile</div>
          <div className="popup_item" onClick={() => history.push("/orders")}>Orders</div>
          <div className="popup_item" onClick={() => history.push("/cart")}>Cart</div>
          <div className="popup_item" onClick={() => {
            dispatch(logout());
            alert.success("Logout Successfully");
          }}>Log uot</div>
        </div>}
      </div>
    </Fragment>
  );
};

export default UserOptions;
