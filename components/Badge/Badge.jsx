import React, {useRef, useState} from 'react';
import {Text, View} from 'react-native';
import PropTypes from 'prop-types';

import style from './style';
import {horizontalScale} from '../../assets/styles/scaling';

const Badge = ({title}) => {
  const [width, setWidth] = useState(0);
  const textRef = useRef(null);
  const paddingHorizontal = 10;

  const tabWidth = {
    width: horizontalScale(paddingHorizontal * 2 + width),
  };

  return (
    <View style={[style.badge, tabWidth]}>
      <Text
        onTextLayout={e => setWidth(e.nativeEvent.lines[0].width)}
        ref={textRef}
        style={style.title}>
        {title}
      </Text>
    </View>
  );
};

Badge.propTypes = {
  title: PropTypes.string.isRequired,
};

export default Badge;
