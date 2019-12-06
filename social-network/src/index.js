import * as serviceWorker from './serviceWorker';
import {reRenderDomTree} from "./Render";
import data from "./redux/state";


reRenderDomTree(data)
serviceWorker.unregister();
