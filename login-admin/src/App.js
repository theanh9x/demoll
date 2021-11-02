import { Route, BrowserRouter as Router, Switch } from 'react-router-dom';
import './App.css';
import Dashboard from './components/Dashboard';
import Login from './components/auth/LoginForm';
import Reset from './components/auth/Reset';
import Home from './components/Home';
import NotFound from './components/NotFound';
function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/"  component={Home}/>
        <Route path="/login" component={Login}/>
        <Route exact path="/reset" component={Reset} />
        <Route path="/dashboard" component={Dashboard}/>
        <Route path="*" component={NotFound} />
      </Switch>
    </Router>
  );
}

export default App;
