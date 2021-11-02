import { Route, BrowserRouter as Router, Switch } from 'react-router-dom';
import './App.css';
import Dashboard from './components/Dashboard';
import Login from './components/auth/LoginForm';
import Reset from './components/auth/Reset';
import Home from './components/Home';

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/" exact component={Home}/>
        <Route path="/login" component={Login}/>
        <Route exact path="/reset" component={Reset} />
        <Route path="/dashboard" component={Dashboard}/>
      </Switch>
    </Router>
  );
}

export default App;
