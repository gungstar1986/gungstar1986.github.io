import React from 'react';
import './App.css';
import Header from "./components/Header/Header";
import Sidebar from "./components/Sidebar/Sidebar";
import Content from "./components/Content/Content";
import Dialogs from "./components/Content/Dialogs/Dialogs";
import {BrowserRouter, Route} from "react-router-dom";


function App(props) {
    return (
        <BrowserRouter>
            <div className="app-container">
                <Header/>
                <Sidebar/>
                <div className="content-wrapper">
                    <Route path='/profile'
                           render={() => <Content posts={props.profile.postData} addPost={props.profPost}/>}/>
                    <Route path='/messages' render={() => <Dialogs users={props.messages.usersData}
                                                                   messages={props.messages.messagesData}/>}/>
                </div>
            </div>
        </BrowserRouter>
    );
}

export default App;
