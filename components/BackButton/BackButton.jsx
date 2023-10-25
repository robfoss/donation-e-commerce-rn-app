import {View, Text, Pressable} from 'react-native';
import React from 'react';
import PropTypes from 'prop-types';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import {faArrowLeft} from '@fortawesome/free-solid-svg-icons';
import style from './style';

const BackButton = ({onPress}) => {
  return (
    <Pressable style={style.container} onPress={() => onPress()}>
      <FontAwesomeIcon icon={faArrowLeft} />
    </Pressable>
  );
};

BackButton.defaultProps = {
  onPress: () => {},
};

BackButton.propTypes = {
  onPress: PropTypes.func.isRequired,
};

export default BackButton;
