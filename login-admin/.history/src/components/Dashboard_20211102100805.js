import React from 'react';
import Header from "./directory/Header";

function Dashboard(props) {
 
  // handle click event of logout button
  const handleLogout = () => {   
    props.history.push('/');
    // window.location.reload();
    // localStorage.removeItem("username");
    // localStorage.removeItem("password");
    // localStorage.removeItem  ('token');
    window.localStorage.clear();
  }
 
  return (
    <>
    <Header/>
    <div data-testid="dashboard">
      Welcome Dashboard!<br /><br />
      <input type="button" onClick={handleLogout} value="Logout" />
    </div>
    </>
  );
}
 
export default Dashboard;