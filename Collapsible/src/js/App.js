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
                        <Collapsible title="OverView"></Collapsible>
                        <div className="panel">
                            <div className="panel-heading">
                                <h2>Reviews</h2>
                            </div>
                            <div className="panel-collapse">
                                <div className="panel-body">
                                    Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute.
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}
export default App;
