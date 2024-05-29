import {BrowseRouter as Router, Route, Switch} from 'react-router-dom'
import Home from './pages/Home.js'
import Contact from './pages/Contact.js'
import Excercies from './pages/Excercies.js'
import Login from './pages/Login.js'
import Register from './pages/Register.js'
import './App.css';

function App() {
  return (
    <Router>
      <Switch>
        <Route path='./pages' component={Home}/>
        <Route path='./pages' component={Excercies}/>
        <Route path='./pages' component={Contact}/>
        <Route path='./pages' component={Login}/>
        <Route path='./pages' component={Register}/>

      </Switch>
    </Router>
  );
}

export default App;
