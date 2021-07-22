import * as React from 'react';
import { Component } from 'react';
import { JsxEmit } from 'typescript';

import './category-tile.css'

// const CategoryTile: React.FunctionComponent = (text: string, label: string) => {
//     return (
//         <div className="category-tile-item ctegory-tile-border bt-help-purple--color ct-without-icon col-sm-8 col-md-2">
//             <span className="category-icon-text-hover">
//                 <p aria-label={label}>{text}</p>
//             </span>
//         </div>
//     )
// }

interface IProps {
    text: string;
    label: string;
}

const CategoryTile = ({text, label}: IProps): JSX.Element => {
    return (

        <div className="category-tile-item__container">

            <button className="category-tile-item category-tile-border bt-help-purple--color ct-without-icon col-xs-12 col-sm-8 col-md-2">
                <span className="category-icon-text-hover">
                    <p className="category-tile-item__label" aria-label={label}>{text}</p>
                </span>
            </button>

        </div>
    )
}

export default CategoryTile;