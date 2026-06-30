import React, { useContext } from "react";
import myContext from "../../components/contextapi/Contextdata";
import "./Profile.css";

function Profile() {
  const { logindata, logout } = useContext(myContext);

  // temporary user data (later you can fetch from API)
  const user = {
    name: "Pavan",
    email: "pavan@gmail.com",
    role: "Frontend Developer"
  };

  return (
    <div className="profile-box">
      
      <h2 style={{ textAlign: "center" }}>Profile</h2>

      {logindata ? (
        <>
          <p><b>Name:</b> {user.name}</p>
          <p><b>Email:</b> {user.email}</p>
          <p><b>Role:</b> {user.role}</p>

          <button onClick={logout} className="profile-logout-btn">
            Logout
          </button>
        </>
      ) : (
        <h3>Please Login First</h3>
      )}

    </div>
  );
}

export default Profile;