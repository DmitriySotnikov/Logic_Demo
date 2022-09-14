import React, { FC } from "react";
import Sort from "../components/Sort";
import Selectors from "../components/Selectors";
import Categories from "../components/Categories";

function HomePage() {
    return (
        <>
            <Sort />
            <Selectors />
            <Categories />
        </>
    );
}

export default HomePage as FC;
