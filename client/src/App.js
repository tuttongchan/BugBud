import './index.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import LoginScreen from './screens/LoginScreen';

function App() {
  return (
    <div>
      <Router>
        <Switch>
          {/* <Route exact path="/">
            <Home />
          </Route> */}
          <LoginScreen />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
