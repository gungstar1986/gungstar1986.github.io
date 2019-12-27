import React from 'react';
import './App.css';
import Sidebar from "./components/Sidebar/Sidebar";
import Content from "./components/Content/Content";
import Dialogs from "./components/Content/Dialogs/Dialogs";
import {Route} from "react-router-dom";
import UsersContainer from "./components/Users/UsersContainer";
import HeaderContainer from "./components/Header/HeaderContainer";
import UserLogin from "./components/UserLogin/UserLogin";


function App() {
    return (
        <div className="app-container">
            <HeaderContainer/>
            <Sidebar/>
            <div className="content-wrapper">
                <Route path='/profile/:userId?' render={() => <Content/>}/>
                <Route path='/users' render={() => <UsersContainer/>}/>
                <Route path='/messages' render={() => <Dialogs/>}/>
                <Route path='/login' render={() => <UserLogin/>}/>
            </div>
        </div>
    );
};

export default App;
