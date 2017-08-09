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

    
    componentWillMount() {
        if (localStorage.getItem('contacts')) {
            this.setState({
                isLoading: false,
                contacts: JSON.parse(localStorage.getItem('contacts')),
            })
        }
    }
    

    componentDidMount() {
        const date = localStorage.getItem('contactsDate')
        const contactsDate = date && new Date(parseInt(date))
        const now = new Date()
        const isOld = Math.round((now - contactsDate) / (1000 * 60)) >= 1

        if (isOld) {
            this.fetchData()
        } else {
            console.log(`Using localStorage Data now the time stamp is ${Math.round((now - contactsDate) / (1000 * 60))}`)
        }
    }

    componentWillUpdate(nextProps, nextState) {
        localStorage.setItem('contacts', JSON.stringify(nextState.contacts))
        localStorage.setItem('contactsDate', Date.now())
    }

    fetchData() {
        this.setState({
            isLoading: true,
            contacts: [],
        })

        fetch('https://randomuser.me/api/?results=50&nat=us,dk,fr,gb')
            .then(data => data.json())
            .then(parsedJSON => parsedJSON.results.map(user => (
                {
                    name: `${user.name.first} ${user.name.last}`,
                    username: `${user.login.username}`,
                    email: `${user.email}`,
                    location: `${user.location.street}, ${user.location.city}`,
                }
            )))
            .then(contacts => {
                this.setState({
                    contacts: contacts,
                    isLoading: false,
                })
            })
            .catch(error => console.error(error))
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
                        {!this.state.isLoading && this.state.contacts.length > 0 ? this.state.contacts.map(contact => {
                            return <Collapsible key={contact.username} title={contact.name}>
                                <p>{contact.email}<br />{contact.location}</p>
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
