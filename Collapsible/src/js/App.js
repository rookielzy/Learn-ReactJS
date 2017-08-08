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
                        <Collapsible title="Tracy Palmer">
                            <p>tracey.palmer@example.com<br />3280 manchester road, ely</p>
                        </Collapsible>
                        <Collapsible title="Jade Dupuis">
                            <p>jade.dupuis@example.com<br />1803 rue pasteur, nanterre</p>
                        </Collapsible>
                        <Collapsible title="Alfred Olsen">
                            <p>alfred.olsen@example.com<br />6598 fjordparken, hirtsals</p>
                        </Collapsible>
                    </div>
                </div>
            </div>
        );
    }
}
export default App;
