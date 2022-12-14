import React, { Fragment, useEffect } from "react";
import { useSelector } from "react-redux";
import Loader from "../layout/Loader/Loader";
import { Link } from "react-router-dom";
import "./Profile.css";

const Profile = ({ history }) => {
  const { user, loading, isAuthenticated } = useSelector((state) => state.user);

  useEffect(() => {
    if (isAuthenticated === false) {
      history.push("/login");
    }
  }, [history, isAuthenticated]);
  
  return (
    <Fragment>
      {loading ? (
        <Loader />
      ) : (
        <Fragment>
        <div className="profileContainer">
            <div>
            <div>
              <img src={user.avatar.url} alt={user.name} />
            </div>
              <div>
                <h4>Full Name</h4>
                <p>{user.name}</p>
              </div>
              <div>
                <h4>Email</h4>
                <p>{user.email}</p>
              </div>
              <div>
                <h4>Joined On</h4>
                <p>{String(user.createdAt).substr(0, 10)}</p>
              </div>

              <div>
                <Link to="/cart">My Orders</Link>
                <Link to="/password/update">Change Password</Link>
              <Link to="/account/me">Edit Profile</Link>
              </div>
            </div>
          </div>
        </Fragment>
      )}
    </Fragment>
  );
};

export default Profile;
