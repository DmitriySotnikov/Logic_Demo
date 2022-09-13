import React, { FC } from "react";

type IButton = {
    textBtn: string;
    classname?: string;
    onClick: (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
} & typeof defaultProps;

const defaultProps = {
    classname: "",
};

function Button({ textBtn, classname, onClick }: IButton) {
    return (
        <button
            className={`btn ${classname}`}
            onClick={(e) => onClick(e)}
            type="button"
        >
            {textBtn}
        </button>
    );
}

Button.defaultProps = defaultProps;

export default Button as FC<IButton>;
