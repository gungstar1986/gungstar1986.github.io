import * as serviceWorker from './serviceWorker';
import ReactDOM from "react-dom";
import App from "./App";
import React from "react";
import store from "./redux/redux-store";
import {BrowserRouter} from "react-router-dom";
import {Provider} from "react-redux";


const reRenderDomTree = () => {
    ReactDOM.render(
        <BrowserRouter>
            <Provider store={store}>
                <App/>
            </Provider>
        </BrowserRouter>, document.getElementById('root'));
};

reRenderDomTree(store.getState());
store.subscribe(() => reRenderDomTree(store.getState()));
serviceWorker.unregister();
