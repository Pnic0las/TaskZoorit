import React from 'react'
import PropTypes from 'prop-types'
import './Price.css'

function Price(props) {
    return (
        <div className='PriceContainer'>
            <p>{props.Title}</p>
            <div className='ProductPrice'>
            {props.NewPrice ? (
                <>
                <p className='NewPrice'>{props.NewPrice}€</p>
                <p className='OldPrice'>{props.OldPrice}€</p>
                </>
            ) : <p className='NewPrice'>{props.OldPrice}€</p>}
            </div>
        </div>
    )
}

Price.propTypes = {
    OldPrice: PropTypes.number.isRequired,
    NewPrice: PropTypes.number.isRequired,
    Title: PropTypes.string.isRequired,
}

export default Price

