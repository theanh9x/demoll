import React from 'react';
import Header from "./directory/Header";
import { Button} from 'antd';
import "../assets/css/Dashboard.css";

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
      
      {/* <input type="button" onClick={handleLogout} value="Logout" /> */}
      <Button
          className="btn_Logout"
          onClick={() => handleLogout()}
          value="Logout"
        >
          Logout
        </Button>

        <br /><br />
        <p style={{textAlign:'center'}}>Welcome Dashboard!</p>
    </div>
    </>
  );
}
 
export default Dashboard;