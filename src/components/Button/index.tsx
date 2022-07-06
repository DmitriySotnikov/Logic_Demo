import React, { FC } from 'react';

interface IButton {
    textBtn: string
    classname?: string
    onClick: (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void
}

export const Button: FC<IButton> = ({textBtn, classname, onClick}) => {
    return (
        <>
            <button className={`btn ${classname}`} onClick={(e) => onClick(e)}>{textBtn}</button>
        </>
    );
};