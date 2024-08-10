import { Fragment, useState } from "react";
import { Route, Switch } from "react-router-dom";
import Login from "./components/LoginPage/Login";
import Sidebar from "./components/SideBar/sideBarComponent";
import NavBar from "./components/navBar/navBar";
import Dashboard from "./components/DashBoard/DashBoard";
import Profile from "./components/profile/Profile";
import EditProfile from "./components/profile/editprofile/EditProfile";
import { ToastContainer, toast } from "react-toastify";
import { getCurrentUser, logout } from "./services/authService";
import LogOut from "./components/logout";
import http from "./services/httpService";
import UserList from "./components/userList/UserList ";
import ArtistList from "./components/artistList/ArtistList";
import ProfilePage from "./components/ProfilePage/ProfilePage";
import Complaint from "./components/complaint/Complaint";
import ComplaintDetails from "./components/complaint/complaintDetails/ComplaintDetails";
import ReliabilityCertificates from "./components/certificate/ReliabilityCertificates ";
import CertificateDetails from "./components/certificate/certificateDetails/CertificateDetails";

import "./App.css";
import "react-toastify/dist/ReactToastify.css";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  let loginigUser = getCurrentUser();

  const [user, setUser] = useState({
    name: loginigUser ? loginigUser.name : null,
    email: loginigUser ? loginigUser.email : null,
    image: loginigUser ? loginigUser.image : null,
    gender: loginigUser ? loginigUser.gender : null,
  });

  const handelUpdate = async () => {
    const { data } = await http.get("http://127.0.0.1:8000/api/admin/profile");
    localStorage.setItem("user", JSON.stringify(data.result[0]));
    loginigUser = getCurrentUser();
    setUser({ ...loginigUser });
  };

  return (
    <div className="app">
      <ToastContainer position="top-right" autoClose={1000} />
      {!loginigUser ? (
        <Login />
      ) : (
        <>
          {" "}
          <Sidebar />
          <div className="main-content">
            <NavBar user={user} />
            <div className="container mt-4">
              {!user && <Login />}
              {user && (
                <Switch>
                  <Route
                    path="/profile"
                    render={() => <Profile user={user} />}
                  />

                  <Route
                    path="/edit-profile"
                    render={() => (
                      <EditProfile user={user} onSave={handelUpdate} />
                    )}
                  />
                  <Route
                    path="/ReliabilityCertificates"
                    component={ReliabilityCertificates}
                  />
                  <Route path="/logout" render={() => <LogOut />} />
                  <Route path="/userList" component={UserList} />
                  <Route
                    path="/complaint/show/:id"
                    component={ComplaintDetails}
                  />
                  <Route
                    path="/certificate/show/:id"
                    component={CertificateDetails}
                  />

                  <Route path="/complaint" component={Complaint} />
                  <Route path="/artistList" component={ArtistList} />
                  <Route path="/artist/profile/:id" component={ProfilePage} />

                  <Route path="/" exact component={Dashboard} />
                </Switch>
              )}{" "}
            </div>
          </div>
        </>
      )}
    </div>
  );
}

export default App;
