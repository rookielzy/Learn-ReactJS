import React from 'react'
import PropTypes from 'prop-types'

class Collapsible extends React.Component {
    constructor(props) {
        super(props)
    }
    render() {
        return(
            <div className="panel">
                <div className="panel-heading">
                    <h2>{this.props.title}</h2>
                </div>
                <div className="panel-collapse">
                    <div className="panel-body">
                        <p>Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute.</p>
                    </div>
                </div>
            </div>
        )
    }
}

Collapsible.propTypes = {
    title: PropTypes.string
}

export default Collapsible