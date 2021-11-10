import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Home from './pages/Home/Home/Home';
import Signin from './pages/Signin/Signin';
import Signup from './pages/Signup/Signup';
import AuthProvider from './context/AuthProvider';

function App() {
  return (
    <div className="App">
      <AuthProvider>
        <Router>
          <Switch>
            <Route exact path='/'>
              <Home />
            </Route>
            <Route path='/signin'>
              <Signin />
            </Route>
            <Route path='/signup'>
              <Signup />
            </Route>

          </Switch>
        </Router>
      </AuthProvider>
    </div>
  );
}

export default App;
