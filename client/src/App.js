import './index.css';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import LoginScreen from './screens/LoginScreen/LoginScreen';
import HomeScreen from './screens/HomeScreen/HomeScreen';
import BugsScreen from './screens/BugsScreen/BugsScreen'
import SingleBugScreen from './screens/SingleBugScreen/SingleBugScreen';

function App() {
  // const userSignin = useSelector((state) => state.userSignin);
  // const { userInfo } = userSignin;

  return (
    <div>
      <BrowserRouter>
        <Switch>
          <Route path="/" component={HomeScreen} exact></Route>
          <Route path="/login" component={LoginScreen} exact></Route>
          {/* <Route path="/register" component={RegisterScreen} exact></Route> */}


          <Route path='/bugs' component={BugsScreen} exact></Route>
          <Route path='/bug/:id' component={SingleBugScreen} exact></Route>
          
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
