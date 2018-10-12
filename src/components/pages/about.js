import React, {Component} from 'react';

class About extends Component {
    render() {
        return (
            <div>
                <h1>This is a sample application</h1>
                <div className="lead">Simple App To Manage</div>
                <div className="text-secondary">
                    Version 1.0.0 - {this.props.match.params.id}
                </div>
            </div>
        );
    }
}

export default About;