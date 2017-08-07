import React from 'react';
import image from '../images/expand-vertical-4.svg';
import Collapsible from './Collapsible'

class App extends React.Component {
    render() {
        return (
            <div>
                <header>
                    <img src={image} />
                    <h1>Collapsible Content</h1>
                </header>
                <div className="content">
                    <div className="panel-group">
                        <Collapsible title="OverView">
                            <p>test test test test test test test test test test test test</p>
                        </Collapsible>
                    </div>
                </div>
            </div>
        );
    }
}
export default App;
