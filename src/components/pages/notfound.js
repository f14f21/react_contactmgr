import React, {Component} from 'react';

class Notfound extends Component {
    render() {
        return (
            <div>
                <h1 className="display-4_">404 - Not Found</h1>
                <div className="lead">The page cant be found in the server.</div>
            </div>
        );
    }
}

export default Notfound;