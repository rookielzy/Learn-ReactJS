import React from 'react'

class SelectCurrency extends React.Component {
    constructor(props) {
        super(props)
    }

    render() {
        const data = this.props.currencies
        return(
            <select>
                <option value="A">{data.currencyA.name}</option>
                <option value="B">{data.currencyB.name}</option>
            </select>
        )
    }
}

export default SelectCurrency