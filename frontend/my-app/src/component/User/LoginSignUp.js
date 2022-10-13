import React, { useState } from "react";
import "./LoginSignUp.css";
import { useDispatch, useSelector } from "react-redux";
import { login, register } from "../../actions/userAction";
const LoginSignUp = ({ history, location }) => {
  const [tab, setTab] = useState(1);
  const [avatar, setAvatar] = useState("/Profile.png");
  const dispatch = useDispatch();
  const { error, loading, isAuthenticated } = useSelector(
    (state) => state.user
  );
  const loginSubmit = (e) => {
    e.preventDefault();
    dispatch(login(e.target.email.value, e.target.password.value));
    if (isAuthenticated) {
      const redirect = location.search
        ? location.search.split("=")[1]
        : "/account";
      history.push(redirect);
    }
  };
  const registerSubmit = (e) => {
    e.preventDefault();
    const myForm = new FormData();
    const reader = new FileReader();
    reader.onload = () => {
      if (reader.readyState === 2) {
        setAvatar(reader.result);
      }
    };
    myForm.set("name", e.target.name.value);
    myForm.set("email", e.target.email.value);
    myForm.set("password", e.target.password.value);
    myForm.set("avatar", avatar);
    dispatch(register(myForm));
    if (isAuthenticated) {
      const redirect = location.search
        ? location.search.split("=")[1]
        : "/account";
      history.push(redirect);
    }
  };

  const registerDataChange = (e) => {
    const reader = new FileReader();
    reader.onload = () => {
      if (reader.readyState === 2) {
        setAvatar(reader.result);
      }
    };
    reader.readAsDataURL(e.target.files[0]);
  };
  return (
    <>
      <div className="LoginSignUpContainer">
        <div className="formContainer">
          <div className="tabContainer">
            <div
              onClick={() => setTab(1)}
              className={`${tab === 1 ? "activeTab" : "defaultTab"}`}
            >
              LOGIN
            </div>
            <div
              onClick={() => setTab(2)}
              className={`${tab === 2 ? "activeTab" : "defaultTab"}`}
            >
              REGISTER
            </div>
          </div>
          {tab === 1 && (
            <div className="tabContainer">
              <form onSubmit={(e) => loginSubmit(e)}>
                <div>
                  <label>Email:</label>
                  <br />
                  <input name="email" />
                </div>
                <div>
                  <br />
                  <label>PassWord:</label>
                  <br />
                  <input name="password" />
                </div>
                <div className="forgot">Forgot Password ?</div>
                <button type="submit">Login</button>
              </form>
            </div>
          )}
          {tab === 2 && (
            <div className="tabContainer">
              <form onSubmit={registerSubmit}>
                <div>
                  <label>Name:</label>
                  <br />
                  <input name="name" />
                </div>
                <div>
                  <br />
                  <label>Email:</label>
                  <br />
                  <input name="email" />
                </div>
                <div>
                  <br />
                  <label>Password:</label>
                  <br />
                  <input name="password" />
                </div>
                <br />
                <div className="fielAvt">
                  <label htmlFor="avt" className="labelAvatar">
                    Choose File
                  </label>
                  <input
                    type="file"
                    accept="image/*"
                    id="avt"
                    className="avatar"
                    name="avatar"
                    onChange={registerDataChange}
                  />
                </div>
                <br />
                <button type="submit">Register</button>
              </form>
            </div>
          )}
        </div>
      </div>
    </>
  );
};
export default LoginSignUp;
