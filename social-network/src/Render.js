import React from 'react';
import './index.css';
import ReactDOM from "react-dom";
import App from "./App";
import {addItemToChat, addItemToProfile, addTempChatItem, addTempItem} from "./redux/state";

export const reRenderDomTree = (data) => {
    ReactDOM.render(<App profile={data.profilePage}
                         messages={data.messagePage}
                         profPost={addItemToProfile}
                         tempItem={addTempItem}
                         addItemToChat={addItemToChat}
                         addTempChatItem={addTempChatItem}
                         addItemToChat={addItemToChat}/>,
        document.getElementById('root'));
}
