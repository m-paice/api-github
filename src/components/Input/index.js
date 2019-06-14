import React from 'react';
import PropTypes from 'prop-types';

import { Pesquisar } from '../../css/styles';

const Input = props => {
    const { input, placeholder, meta } = props;
    const { error, touched } = meta !== undefined ? meta : {};
    return (
      <React.Fragment>
        <Pesquisar placeholder={placeholder} onChange={input.onChange} value={input.value} />
        {touched && error ? (
          <span style={{ color: 'red', position: 'absolute', top: '110%', left: '1%' }}> {error} </span>
            ) : null}
      </React.Fragment>
    );
};

Input.propTypes = {
    input: PropTypes.object.isRequired,
    placeholder: PropTypes.string.isRequired,
    meta: PropTypes.object,
};

export default Input;
