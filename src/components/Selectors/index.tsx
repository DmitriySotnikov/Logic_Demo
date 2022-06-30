import React, {FC} from "react";

interface IProps {
    selector: string
    setSelector: (arg: string) => void
}

export const Selectors: FC<IProps> = ({selector, setSelector}) => {

    const selectors = [
        {
            id: 0,
            name: "Show All",
            value: ""
        },
        {
            id: 1,
            name: "Design",
            value: "Design"
        },
        {
            id: 2,
            name: "Branding",
            value: "Branding"
        },
        {
            id: 3,
            name: "Illustrations",
            value: "Illustrations"
        },
        {
            id: 4,
            name: "Motions",
            value: "Motions"
        },
    ]

    const onSelect = (event: React.ChangeEvent<HTMLSelectElement>) => setSelector(event.target.value)

    return (
        <div className="selectors">
            <div className="selectors__list">
                {
                    selectors.map( el =>
                        <div className="selectors__items" key={el.id}
                             onClick={() => setSelector(el.value)}
                        >
                            {el.name}
                        </div>
                    )
                }
            </div>
            <div className="selectors__form">
                <form>
                    <select onChange={e => onSelect(e)} value={selector} className="selectors__select">
                        { selectors.map( el => <option
                            key={el.id}
                        >{el.name}</option>)}
                    </select>
                </form>
            </div>
        </div>
    );
};