import './category-tile.css'

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