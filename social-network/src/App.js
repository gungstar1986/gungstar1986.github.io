import React from 'react';
import './App.css';
import Header from "./components/Header/Header";
import Sidebar from "./components/Sidebar/Sidebar";
import Content from "./components/Content/Content";
import Dialogs from "./components/Content/Dialogs/Dialogs";
import {Route} from "react-router-dom";


function App() {
    return (
        <div className="app-container">
            <Header/>
            <Sidebar/>
            <div className="content-wrapper">
                <Route path='/profile' render={() => <Content/>}/>
                <Route path='/messages' render={() => <Dialogs/>}/>
            </div>
        </div>
    );
};

export default App;
