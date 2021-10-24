// import React, { useEffect, useState } from 'react';
// import TabHome from '../tabHome/TabHome'
// import TabBugs from '../tabBugs/TabBugs';
import './content.css';

const Content = () => {
  // const [tab, setTab] = useState('Home');
  // const [content, setContent] = useState();

  // useEffect(() => {
  //   switch (tab) {
  //     case 'Home':
  //       setContent(<TabHome />)
  //       break;
  //     case 'Bugs':
  //       setContent(<TabBugs />)
  //     default:
  //       setContent(<div></div>);
  //   }
  // }, []);

  return <div className="content-container">

  </div>;
};

export default Content;

// import React, { useEffect } from 'react';
// import './content.css';
// import PieChart from '../pieChart/PieChart';
// import BarGraph from '../barGraph/BarGraph';
// import { useSelector, useDispatch } from 'react-redux';
// import { detailsBug } from '../../actions/bugActions';
// import UserList from '../userList/UserList';
// // import { bugDetails } from './actions/bugActions';

// const Content = () => {
//   const dispatch = useDispatch();
//   const allBugs = useSelector((state) => state.bugDetails);
//   const { loading, error, bugs } = allBugs;
//   console.log(bugs);

//   useEffect(() => {
//     dispatch(detailsBug());
//   }, [dispatch]);

//   return (
//     <div className="content-container">
//       <div className="content-grid">
//         {/* <div className="content-grid-item"> */}

//         {/* --- Notification Grid --- */}
//         <div className="notification-grid">
//           <div className="notification-container">
//             <div className="notification-left-container">
//               <span className="notification-span-number">10</span>
//             </div>
//             <div className="notification-right-container">
//               <div className="notification-right-spans-container">
//                 <span className="notification-span-blue">Bugs this month</span>
//                 <span className="notification-span-black">
//                   Completed this month
//                 </span>
//               </div>
//               <div className="notification-arrow-container">
//                 <i class="fas fa-arrow-right"></i>
//               </div>
//             </div>
//           </div>
//           <div className="notification-container">
//             <div className="notification-left-container">
//               <span className="notification-span-number">10</span>
//             </div>
//             <div className="notification-right-container">
//               <div className="notification-right-spans-container">
//                 <span className="notification-span-red">Bugs this month</span>
//                 <span className="notification-span-black">
//                   Completed this month
//                 </span>
//               </div>
//               <div className="notification-arrow-container">
//                 <i class="fas fa-arrow-right"></i>
//               </div>
//             </div>
//           </div>
//           <div className="notification-container">
//             <div className="notification-left-container">
//               <span className="notification-span-number">10</span>
//             </div>
//             <div className="notification-right-container">
//               <div className="notification-right-spans-container">
//                 <span className="notification-span-blue">Bugs this month</span>
//                 <span className="notification-span-black">
//                   Completed this month
//                 </span>
//               </div>
//               <div className="notification-arrow-container">
//                 <i class="fas fa-arrow-right"></i>
//               </div>
//             </div>
//           </div>
//           <div className="notification-container">
//             <div className="notification-left-container">
//               <span className="notification-span-number">10</span>
//             </div>
//             <div className="notification-right-container">
//               <div className="notification-right-spans-container">
//                 <span className="notification-span-red">Bugs this month</span>
//                 <span className="notification-span-black">
//                   Completed this month
//                 </span>
//               </div>
//               <div className="notification-arrow-container">
//                 <i class="fas fa-arrow-right"></i>
//               </div>
//             </div>
//           </div>
//           <div className="notification-container">
//             <div className="notification-left-container">
//               <span className="notification-span-number">10</span>
//             </div>
//             <div className="notification-right-container">
//               <div className="notification-right-spans-container">
//                 <span className="notification-span-blue">Bugs this month</span>
//                 <span className="notification-span-black">
//                   Completed this month
//                 </span>
//               </div>
//               <div className="notification-arrow-container">
//                 <i class="fas fa-arrow-right"></i>
//               </div>
//             </div>
//           </div>
//           <div className="notification-container">
//             <div className="notification-left-container">
//               <span className="notification-span-number">10</span>
//             </div>
//             <div className="notification-right-container">
//               <div className="notification-right-spans-container">
//                 <span className="notification-span-red">Bugs this month</span>
//                 <span className="notification-span-black">
//                   Completed this month
//                 </span>
//               </div>
//               <div className="notification-arrow-container">
//                 <i class="fas fa-arrow-right"></i>
//               </div>
//             </div>
//           </div>
//         </div>

//         <div className="content-grid-item-chart">
//           <div className="piechart-container">
//             <PieChart />
//           </div>
//         </div>
//         <div>
//           <UserList />

//           {/* <PieChart /> */}

//           {/* <BarGraph /> */}

//           {/* {loading ? (
//             <h1>Loading...</h1>
//           ) : error ? (
//             <h1>{error}</h1>
//             ) : (
//               <div className="row center">
//               {bugs.map((bug) => (
//                 <h1 key={bug.bugName}>{bug.bugName}</h1>
//                 ))}
//                 </div>
//               )} */}
//         </div>
//         <div className="content-grid-item-chart">
//           <div className="bargraph-container">
//             <BarGraph />
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Content;
