import React from 'react';
import image from '../images/cloud-upload-download-data-transfer.svg';
import Collapsible from './Collapsible'

class App extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            isLoading: false,
            contacts: [],
        }
        this.fetchData = this.fetchData.bind(this)
    }

    fetchData() {
        this.setState({
            isLoading: true,
            contacts: [],
        })
    }

    render() {
        return (
            <div>
                <header>
                    <img src={image} />
                    <h1>Fetching Data <button className="btn btn-sm btn-danger" onClick={this.fetchData}>Fetch Now</button></h1>
                </header>
                <div className={`content ${this.state.isLoading ? "is-loading" : ""}`}>
                    <div className="panel-group">
                        {!this.state.isLoading && this.state.contacts.length < 0 ? this.state.contacts.map(contact => {
                            <Collapsible title="Test">
                                <p>{contact}</p>
                            </Collapsible>
                        }) : null}
                    </div>
                    <div className="loader">
                        <div className="icon"></div>
                    </div>
                </div>
            </div>
        );
    }
}
export default App;
