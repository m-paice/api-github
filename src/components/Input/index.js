import React from 'react';
import PropTypes from 'prop-types';

const Input = props => {
    const { input, placeholder } = props;
    return <input placeholder={placeholder} onChange={input.onChange} value={input.value} />;
};

Input.propTypes = {
    input: PropTypes.object.isRequired,
    placeholder: PropTypes.string.isRequired,
};

export default Input;
