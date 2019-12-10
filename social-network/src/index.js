import * as serviceWorker from './serviceWorker';
import ReactDOM from "react-dom";
import App from "./App";
import React from "react";
import store from "./redux/state";


const reRenderDomTree = (data) => {
    ReactDOM.render(
        <App profile={store.getData().profilePage}
             messages={store.getData().messagePage}
             dispatch={store.dispatch.bind(store)}/>,
        document.getElementById('root'));
};
reRenderDomTree(store.getData());
store.subscribe(reRenderDomTree)
serviceWorker.unregister();
