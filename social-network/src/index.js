import * as serviceWorker from './serviceWorker';
import ReactDOM from "react-dom";
import App from "./App";
import React from "react";
import store from "./redux/redux-store";
import {BrowserRouter} from "react-router-dom";

const reRenderDomTree = () => {
    ReactDOM.render(
        <BrowserRouter>
            <App profile={store.getState().profilePage}
                 messages={store.getState().messagePage}
                 dispatch={store.dispatch.bind(store)}/>,
        </BrowserRouter>, document.getElementById('root'));
};

reRenderDomTree(store.getState());
store.subscribe(() => reRenderDomTree(store.getState()));
serviceWorker.unregister();
