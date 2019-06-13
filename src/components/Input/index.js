import React from 'react';
import PropTypes from 'prop-types';

import { Pesquisar } from '../../css/styles';

const Input = props => {
    const { input, placeholder } = props;
    return <Pesquisar placeholder={placeholder} onChange={input.onChange} value={input.value} />;
};

Input.propTypes = {
    input: PropTypes.object.isRequired,
    placeholder: PropTypes.string.isRequired,
};

export default Input;
