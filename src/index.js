import React from 'react';
import ReactDOM from 'react-dom';


class Clock extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      date: new Date(),
      text: ''
    };
    this.handleChange = this.handleChange.bind(this);
  }

  componentDidMount() {
    setInterval(() => this.tick(), 1000);
  }

  tick() {
    this.setState({
      date: new Date()
    });
  }

  handleChange(event) {
    this.setState({text: event.target.value});
  }

  render() {
    return (
      <div>
        <span>{this.state.date.toLocaleTimeString()}</span>
        <input type="text" onChange={this.handleChange}/><span>{this.state.text}</span>
      </div>
    );
  }
}

ReactDOM.render(
  <Clock />,
  document.getElementById('root')
);