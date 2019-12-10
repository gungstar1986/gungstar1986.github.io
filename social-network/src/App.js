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
                           render={() => <Content posts={props.profile}
                                                  tempItem={props.tempItem}
                                                  addPost={props.profPost}/> }/>

                    <Route path='/messages'
                           render={() => <Dialogs users={props.messages.usersData}
                                                  chat={props.messages.tempChat}
                                                  messages={props.messages.messagesData}
                                                  addTempChatItem={props.addTempChatItem}
                                                  addItemToChat={props.addItemToChat}/>}/>
                </div>
            </div>
        </BrowserRouter>
    );
}

export default App;
