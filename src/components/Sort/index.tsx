import React, {FC} from 'react';
import {useAppDispatch, useAppSelector} from "../../hooks/redux";
import {selectionCategory, sortCategories } from '../../store/reducer/categorySlice';

export const Sort: FC = () => {

    const dispatch = useAppDispatch()
    const {selector} = useAppSelector(state => state.categories)
    const selectHandler = (e:  React.ChangeEvent<HTMLSelectElement>) => {
        const key: string = e.target.value
        dispatch(sortCategories(key))
        dispatch(selectionCategory(selector))
    }

    return (
        <div className="sort">
            <form>
                <label className="sort__title">
                    Отсортировать по :
                    <br/>
                    <select className="sort__selector" onChange={e => selectHandler(e)}>
                        <option value="date">По дате</option>
                        <option value="title">По названию</option>
                    </select>
                </label>
            </form>
        </div>
    );
};