import React, {useEffect, useState} from "react";
import "../../styles/index.scss";
import {Header} from "../Header";
import {Categories} from "../Categories";
import {Selectors} from "../Selectors";
import axios from "axios";
import {ICategory} from "../../models/ICatagory";


function App() {

    const [categories, setCategories] = useState<ICategory[]>([])
    const [selector, setSelector] = useState("")

    const getAllProducts = async () => {
          return await axios.get<ICategory[]>(`categories.json`)
    }

    useEffect(() => {
        getAllProducts()
            .then(res => setCategories(res.data))
            .catch(res => console.log(res.message))
    }, [selector])

    const filterCategory = (arg: string) => {
        return arg !== ""
            ? categories.filter(category => category.categoryName === arg)
            : categories
    }

    const deleteCategory = (id: string) => {
        categories.filter(category => category.id !== id)

    }


    return (
        <div>
            <Header/>
            <div className="container">
                <Selectors setSelector={setSelector} selector={selector}/>
                <Categories
                    categories={filterCategory(selector)}
                    setCategory={(category) => setCategories(categories)}
                    deleteCategory={(id:string) => deleteCategory(id)}
                />
            </div>
        </div>
    );
}

export default App;
