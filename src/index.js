import React from "react";
import ReactDOM from "react-dom";
import App from "../src/components/App";
import reducer, { initialState } from './reducer';
import { StateProvider } from './StateProvider';

ReactDOM.render(<div>
    <React.StrictMode>
    <StateProvider initialState={initialState} reducer={reducer}>
    <App />
    </StateProvider>
       
    </React.StrictMode>
       </div>, document.getElementById("root"))