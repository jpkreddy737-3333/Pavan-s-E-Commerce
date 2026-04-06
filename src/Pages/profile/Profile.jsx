import React, { useContext } from "react";
import myContext from "../../components/contextapi/Contextdata";

function Profile() {
  const { logindata, logout } = useContext(myContext);

  // temporary user data (later you can fetch from API)
  const user = {
    name: "Pavan",
    email: "pavan@gmail.com",
    role: "Frontend Developer"
  };

  return (
    <div style={{ width: "400px", margin: "50px auto", boxShadow: "0 0 10px black", padding: "20px" }}>
      
      <h2 style={{ textAlign: "center" }}>Profile</h2>

      {logindata ? (
        <>
          <p><b>Name:</b> {user.name}</p>
          <p><b>Email:</b> {user.email}</p>
          <p><b>Role:</b> {user.role}</p>

          <button onClick={logout} style={{ marginTop: "20px", backgroundColor: "red", color: "white" }}>
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