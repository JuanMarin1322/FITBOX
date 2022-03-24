//import './App.css';
import { Index } from './components/index';
import { Login } from './components/Login';
import { SignUp } from './components/SignUp';
import { Home } from './components/Home';
import { Nav } from './components/nav';
import { AuthProvider } from './context/AuthContext';


import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { PrivateRoute } from './components/PrivateRoute';

function App() {
  return (
    <>
      <Router>
        <AuthProvider>
          <Switch>
          
            <PrivateRoute exact path='/' component={Home} />
            <Route exact path='/index' component={Index} />
            <Route exact path='/login' component={Login} />
            <Route exact path='/signup' component={SignUp} />
          </Switch>
        </AuthProvider>
      </Router>
    </>
  );
}

export default App;
