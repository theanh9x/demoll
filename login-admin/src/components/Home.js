import React from 'react';
import Header from "./directory/Header";
import { Button} from 'antd';
import "../assets/css/Home.css";

function Home(props) {

    const handleLogin = () => {   
        props.history.push('/login');
    }

  return (
    <>
    <Header/>
    <div data-testid="home">
        <div className="head">
            <Button name="Login" type="Login" text="Login" onClick={handleLogin} className="btn_login">
              Login
            </Button>
        </div>
        <p style={{textAlign:'center'}}>Welcome Home!</p><br /><br />
    </div>
    </>
  );
}
 
export default Home;