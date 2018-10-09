import React, {Component} from 'react';
import PropTypes from 'prop-types'


class Contact extends Component {
    render() {
        const {Name,Email,Tel,Age} = this.props;
        return (
            <div>
                <h4>{Name}</h4>
                <ul>
                    <li>{Email}</li>
                    <li>Tel: {Tel}</li>
                    <li>Age: {Age}</li>
                </ul>
            </div>
        );
    }
}
Contact.defaultProps = {
    Age:30
};

Contact.propTypes =  {
    Age: PropTypes.number.isRequired,
    Tel: PropTypes.string.isRequired,
    Email: PropTypes.string.isRequired,
    Name: PropTypes.string.isRequired,
};
export default Contact;