import React from 'react';
import './App.css';
import Header from "./components/Header/Header";
import Sidebar from "./components/Sidebar/Sidebar";
import Content from "./components/Content/Content";
import Dialogs from "./components/Content/Dialogs/Dialogs";
import {Route} from "react-router-dom";
import UsersContainer from "./components/Users/UsersContainer";


function App() {
    return (
        <div className="app-container">
            <Header/>
            <Sidebar/>
            <div className="content-wrapper">
                <Route path='/profile' render={() => <Content/>}/>
                <Route path='/messages' render={() => <Dialogs/>}/>
                <Route path='/users' render={() => <UsersContainer/>}/>
            </div>
        </div>
    );
};

export default App;
