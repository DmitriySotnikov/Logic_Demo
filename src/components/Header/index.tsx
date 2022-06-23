import React, {FC} from 'react';
import {Link} from "react-router-dom";

export const Header: FC = () => {
    return (
        <div className="header">
            <div className="header__container">
                <div className="header__nav">
                    <div className="header__logo">
                        Agency
                    </div>
                    <div className="header__links">
                        <Link className="header__link-item" to={"#"}>
                            About
                        </Link>
                        <Link className="header__link-item" to={"#"}>
                            Service
                        </Link>
                        <Link className="header__link-item" to={"#"}>
                            Pricing
                        </Link>
                        <Link className="header__link-item" to={"#"}>
                            Blog
                        </Link>
                    </div>
                    <button className="header__button-contact">
                        Contact
                    </button>
                </div>
                <div className="header__bottom">
                    <span className="header__bottom-title">Portfolio</span>
                    <span className="header__bottom-info">
                        Agency provides a full service range including technical
                        skills, design, business understanding.
                    </span>
                </div>
            </div>
        </div>
    );
};