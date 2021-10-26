import React, { useEffect } from 'react';
import './bugScreen.css';
import { useSelector } from 'react-redux';
import Topbar from '../../components/topbar/Topbar';
import Dashboard from '../../components/dashboard/Dashboard';
import { useHistory } from 'react-router';
import TabBugs from '../../components/tabBugs/TabBugs';

const BugScreen = () => {
  const userSignin = useSelector((state) => state.userSignin);
  const { userInfo } = userSignin;

  const allBugs = useSelector((state) => state.bugsDetails.bugs || []);
  console.log(allBugs)

  // const [tab, setTab] = useState('Home');
  // const [content, setContent] = useState();

  // useEffect(() => {
  //   switch (tab) {
    //     case 'Home':
    //       setContent(<TabHome />);
  //       break;
  //     case 'Bugs':
  //       setContent(<TabBugs />);
  //       console.log(content)
  //       break;
  //     default:
  //       setContent(<div></div>);
  //   }
  // }, [tab]);
  
  let history = useHistory();
  useEffect(() => {
    if (!userInfo) {
      history.push('/login');
    }
  }, [userInfo, history]);

  return (
    <div className="bugscreen-container">
      <Topbar />
      <div className="bottom-container">
        {/* <Dashboard setTab={setTab} /> */}
        {/* {content} */}

        <Dashboard />
        <TabBugs />
        {/* <Content /> */}
      </div>
    </div>
  );
};

export default BugScreen;
