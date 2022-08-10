import React, {useEffect, useState} from "react";
import Appbar from "./components/Appbar";
import Students from "./components/Students";

function App() {

    return (
        <div className="App">
            <Appbar/>
            <Students/>
        </div>
    );
}

export default App;
