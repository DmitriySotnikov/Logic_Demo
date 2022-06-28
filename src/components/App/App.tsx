import React, {useEffect, useState} from "react";
import "../../styles/index.scss";
import {Header} from "../Header";
import {Categories} from "../Categories";
import {Selectors} from "../Selectors";
import axios from "axios";
import {ICategory} from "../../models/ICatagory";


function App() {

    const [categories, setCategories] = useState<ICategory[]>([])

    const getAllProducts = async () => {
          return await axios.get<ICategory[]>(`categories.json`)
    }

    useEffect(() => {
        getAllProducts()
            .then(res => setCategories(res.data))
            .catch(res => console.log(res.message))
    }, [])

    console.log(categories)

    return (
        <div className="app">
            <Header/>
            <div className="container">
                <Selectors />
                <Categories categories={categories} setCategory={(category) => setCategories(categories)}/>
            </div>
        </div>
    );
}

export default App;
