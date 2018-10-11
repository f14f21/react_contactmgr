import React, {Component} from 'react';
import PropTypes from 'prop-types';


const TextInputGroup = ({
                    label,
                    name,
                    type,
                    placeholder,
                    value,
                    onChange,
                    error
                }) =>{



    return (

        <div className="form-group">
            <label>{label}:</label>
            <input name={name} type={type} className="form-control error===null ? is-invalid : null" placeholder={placeholder} value={value} onChange={onChange}/>
            <div className="invalid-feedback">{error}</div>
        </div>


    )
};

TextInputGroup.propTypes = {
    name: PropTypes.string.isRequired,
    label: PropTypes.string.isRequired,
    type: PropTypes.string.isRequired,
    placeholder: PropTypes.string.isRequired,
    value: PropTypes.string.isRequired,
    onChange: PropTypes.func.isRequired,
};
TextInputGroup.defaultProps = {
    type:'text'
};


export default TextInputGroup;