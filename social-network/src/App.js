import React from 'react';
import './App.css';
import Header from "./components/Header/Header";
import Sidebar from "./components/Sidebar/Sidebar";
import Content from "./components/Content/Content";
import Dialogs from "./components/Content/Dialogs/Dialogs";
import {BrowserRouter, Route} from "react-router-dom";


function App(props) {
    return (
        <div className="app-container">
            <Header/>
            <Sidebar/>
            <div className="content-wrapper">
                <Route path='/profile'
                       render={() => <Content posts={props.profile}
                                              dispatch={props.dispatch}/>}/>
                <Route path='/messages'
                       render={() => <Dialogs users={props.messages.usersData}
                                              chat={props.messages.tempChat}
                                              messages={props.messages.messagesData}
                                              dispatch={props.dispatch}/>}/>
            </div>
        </div>
    );
};

export default App;
