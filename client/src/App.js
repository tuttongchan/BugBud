import './index.css';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { useSelector } from 'react-redux';
import LoginScreen from './screens/LoginScreen/LoginScreen';
import HomeScreen from './screens/HomeScreen/HomeScreen';

function App() {
  const userSignin = useSelector((state) => state.userSignin);
  const { userInfo } = userSignin;
  console.log(userInfo);

  return (
    <div>
      <BrowserRouter>
        <Switch>
          <Route path="/" component={HomeScreen} exact></Route>
          <Route path="/login" component={LoginScreen} exact></Route>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
