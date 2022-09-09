import './App.css';
import {Route, Router, Routes} from 'react-router';
import Login from './Login';
import Home from './Home';


const App =()=> {
  return (
    <div>
      <Router>
    <Route path='/' component={Login} />
    <Route path="/home" component={Home} />
  </Router>
 
     
    </div>
  );
}




export default App;
