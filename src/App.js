import React from "react";
import { Route, useHistory } from "react-router-dom";
import "./App.css";
import GetLink from "./GetLink";
import ShowMessage from "./ShowMessage";

const App = () => {
    return (
        <div className="App">
            <Route exact path="/" component={GetLink} />
            <Route exact path="/message" component={ShowMessage} />
        </div>
    );
};

export default App;
