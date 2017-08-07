import React from 'react'
import PropTypes from 'prop-types'

class Collapsible extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            isExpanded: false,
        }
        this.handleToggle = this.handleToggle.bind(this)
    }
    handleToggle(e) {
        e.preventDefault()
        this.setState({
            isExpanded: !this.state.isExpanded,
            height: this.refs.inner.clientHeight,
        })
    }
    render() {
        const currentHeight = this.state.isExpanded ? this.state.height : 0
        return(
            <div className={`panel ${this.state.isExpanded ? 'is-expanded' : ''}`} onClick={e => this.handleToggle(e)}>
                <div className="panel-heading">
                    <h2>{this.props.title}</h2>
                </div>
                <div className="panel-collapse" style={{height: currentHeight + 'px'}}>
                    <div className="panel-body" ref="inner">
                        {this.props.children}
                    </div>
                </div>
            </div>
        )
    }
}

Collapsible.propTypes = {
    title: PropTypes.string,
}

export default Collapsible