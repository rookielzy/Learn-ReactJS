import React from 'react'

class SelectCurrency extends React.Component {
    constructor(props) {
        super(props)
    }

    render() {
        const data = this.props.currencies
        const onSelectCurrency = this.props.onSelectCurrency
        return(
            <select onChange={ e => onSelectCurrency(e.target.value)}>
                {data.map(currency => 
                    <option key={currency.code} value={currency.code}>{currency.name}</option>
                )}
            </select>
        )
    }
}

export default SelectCurrency