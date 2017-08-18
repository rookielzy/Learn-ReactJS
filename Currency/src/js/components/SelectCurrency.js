import React from 'react'
import PropTypes from 'prop-types'

class SelectCurrency extends React.Component {
    constructor(props) {
        super(props)
    }

    render() {
        const currencies = this.props.currencies
        const onSelectCurrency = this.props.onSelectCurrency
        return(
            <select onChange={ e => onSelectCurrency(e.target.value)}>
                {currencies.map(currency => 
                    <option key={currency.code} value={currency.code}>{currency.name}</option>
                )}
            </select>
        )
    }
}

SelectCurrency.PropTypes = {
    currencies: PropTypes.array.isRequired,
    onSelectCurrency: PropTypes.func.isRequired,
}

export default SelectCurrency