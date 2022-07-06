import React, { FC } from 'react';
import { Sort } from "../components/Sort";
import { Selectors } from "../components/Selectors";
import { Categories } from "../components/Categories";

export const HomePage: FC = () => {
    return (
        <>
            <Sort />
            <Selectors />
            <Categories />
        </>
    );
};