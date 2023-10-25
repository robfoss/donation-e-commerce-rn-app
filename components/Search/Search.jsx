import {Text, TextInput, Pressable} from 'react-native';
import React, {useRef, useState} from 'react';

import style from './style';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import {faSearch} from '@fortawesome/free-solid-svg-icons';
import {scaleFontSize} from '../../assets/styles/scaling';

import PropTypes from 'prop-types';

const Search = ({onSearch, placeholder}) => {
  const textInputRef = useRef(null);
  const [search, setSearch] = useState('');

  const handleFocus = () => {
    textInputRef.current.focus();
  };
  const handleSearch = searchValue => {
    setSearch(searchValue);
    onSearch(searchValue);
  };

  return (
    <Pressable style={style.searchInputContainer}>
      <FontAwesomeIcon
        icon={faSearch}
        color={'#25c0ff'}
        size={scaleFontSize(22)}
      />
      <TextInput
        ref={textInputRef}
        style={style.searchInput}
        placeholder={placeholder}
        value={search}
        onChangeText={value => handleSearch(value)}
      />
    </Pressable>
  );
};

Search.defaultProps = {
  onSearch: () => {},
  placeholder: 'Search',
};

Search.prototype = {
  onSearch: PropTypes.func,
  placeholder: PropTypes.string,
};

export default Search;
