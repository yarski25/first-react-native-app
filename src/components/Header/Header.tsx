import {View, Text} from 'react-native';
import React from 'react';
import {styles} from './styles';

type HeaderProps = {
  leftNode?: JSX.Element;
  rightNode?: JSX.Element;
  headerText?: string;
};

const Header: React.FC<HeaderProps> = ({
  leftNode = null,
  rightNode = null,
  headerText = '',
}) => {
  return (
    <View style={styles.headerContainer}>
      <View style={styles.leftItem}>{leftNode}</View>
      <View style={styles.headerItem}>
        <Text style={styles.headerItem}>{headerText}</Text>
      </View>
      <View style={styles.rightItem}>{rightNode}</View>
    </View>
  );
};

export default Header;
