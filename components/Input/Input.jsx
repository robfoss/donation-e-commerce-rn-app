import React, {useState} from 'react';
import {View, Text, TextInput} from 'react-native';

import PropTypes from 'prop-types';

import style from './style';

const Input = ({
  label,
  placeholder,
  onChangeText,
  keyboardType,
  secureTextEntry,
}) => {
  const [value, setValue] = useState('');
  return (
    <View>
      <Text style={style.label}>{label}</Text>
      <TextInput
        style={style.input}
        value={value}
        secureTextEntry={secureTextEntry}
        keyboardType={keyboardType}
        onChangeText={val => {
          setValue(val);
          onChangeText(val);
        }}
        placeholder={placeholder ? placeholder : null}
      />
    </View>
  );
};

Input.defaultProps = {
  onChangeText: () => {},
  keyboardType: 'default',
  secureTextEntry: false,
};

Input.propTypes = {
  label: PropTypes.string.isRequired,
  placeholder: PropTypes.string,
  onChangeText: PropTypes.func,
  keyboardType: PropTypes.string,
  secureTextEntry: PropTypes.bool,
};

export default Input;
