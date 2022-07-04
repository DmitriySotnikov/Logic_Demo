import React, {FC} from 'react';
import {useAppDispatch, useAppSelector} from "../../hooks/redux";
import {selectionCategory, sortCategories } from '../../store/reducer/categorySlice';
import {ICategory} from "../../models/ICatagory";

export const Sort: FC = () => {

    const dispatch = useAppDispatch()
    const {selector, categories} = useAppSelector(state => state.categories)
    const selectHandler = (e:  React.ChangeEvent<HTMLSelectElement>) => {
        const key: string = e.target.value
        dispatch(sortCategories(key))
        dispatch(selectionCategory(selector))
        const str = "1..34.5"
        console.log(str.replace(/[\s.,%]/g, ''))
        console.log(Object.values(categories).sort((a: ICategory, b: ICategory ) => (
            a.date.replace(/[\s.,%]/g, '') > b.date.replace(/[\s.,%]/g, '')
        ) ? 1 : -1 ))
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