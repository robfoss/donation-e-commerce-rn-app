import React from 'react';
import {Text, Pressable} from 'react-native';
import PropTypes from 'prop-types';

import style from './style';

const Button = ({title, isDisabled, onPress}) => {
  return (
    <Pressable
      style={[style.button, isDisabled && style.disabled]}
      disabled={isDisabled}
      onPress={() => onPress()}>
      <Text style={style.title}>{title}</Text>
    </Pressable>
  );
};

Button.default = {
  title: '',
  isDisabled: false,
  onPress: () => {},
};

Button.propTypes = {
  title: PropTypes.string.isRequired,
  isDisabled: PropTypes.bool,
  onPress: PropTypes.func,
};

export default Button;
