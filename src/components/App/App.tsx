import React, {useState} from "react";
import "../../styles/index.scss";
import {Header} from "../Header";
import {Categories} from "../Categories";
import {Selectors} from "../Selectors";

function App() {

    const [category, setCategory] = useState("")

    return (
        <div className="app">
            <Header/>
            <div className="container">
                <Selectors setCategory={(category) => setCategory(category)}/>
                <Categories ctg={category} setCategory={(category) => setCategory(category)}/>
            </div>
        </div>
    );
}

export default App;
