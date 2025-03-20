import PropTypes from "prop-types";
import propTypes from "prop-types";

const Item = (Props) =>{
    
    const {title,amount} = Props
    
    return (
        <li>{title}<span>{amount}</span></li>
    )
}

Item.propTypes={
    title:PropTypes.string.isRequired,
    amount:PropTypes.number.isRequired
}

export default Item