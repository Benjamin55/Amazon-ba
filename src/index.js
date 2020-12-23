import React from "react";
import ReactDOM from "react-dom";
import App from "../src/components/App";
import { initialState } from './reducer';

ReactDOM.render(<div>
    <React.StrictMode>
    <StateProvider initialState={initialState} reducer={reducer}>
    <App />
    </StateProvider>
       
    </React.StrictMode>
       </div>, document.getElementById("root"))