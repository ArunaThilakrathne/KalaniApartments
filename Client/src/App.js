import './App.css';
import * as React from "react";
import * as ReactDOM from "react-dom/client";
import {
  createBrowserRouter,
  Outlet,
  RouterProvider,
} from "react-router-dom";
import Home from './pages/Home.js'
import Login from './pages/Login.js';
import Register from './pages/Register';
import AccountManager from './pages/AccountManager';
import LeaveRec from './pages/LeaveRec';
import Pdetails from './pages/Pdetails';
import Report from './pages/Report';
import UpdatePayments from './pages/UpdatePayments';
// function Layout(){
//   return(
//     <>
//     <Nav />
//     <Outlet />
//     <Footer />
//     </>
//   );
// };

const router = createBrowserRouter([
  {
    path: "/login",
    element: <Login/>,
  },

  {
    path: "/",
    element: <Home/>,
  },
  {
    path:"/registration",
    element:<Register/>,
  },
  {
    path:"/personaldetails",
    element:<Pdetails/>,
  },
  {
    path:"/updatepayments",
    element:<UpdatePayments/>,
  },
  {
    path:"/report",
    element:<Report/>,
  },
  {
    path:"/leaverecords",
    element:<LeaveRec/>,
  },
  {
    path:"/accmanager",
    element:<AccountManager/>,
  },

]);


function App() {
  return (
    <div className="App">
      <div className="container">
      <RouterProvider router={router}/>
      </div>
    </div>
  );
};



// const layout = () => {

// }

export default App;
