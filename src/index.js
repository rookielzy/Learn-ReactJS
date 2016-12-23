import React from 'react';
import ReactDOM from 'react-dom';

import LifeCycle from 'react-lifecycle';

const body = document.body;

const MyComponent = React.createClass({
  mixins: [LifeCycle],

  render() {
    console.log('render');
    return null;
  }
});

ReactDOM.render(<MyComponent />, body);
ReactDOM.unmountComponentAtNode(body);
ReactDOM.render(<MyComponent />, body);
ReactDOM.render(<MyComponent />, body);
