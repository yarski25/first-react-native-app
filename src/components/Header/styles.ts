import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  headerContainer: {
    display: 'flex',
    flexDirection: 'row',
    textAlign: 'center',
    alignContent: 'space-between',
    // backgroundColor: 'black',
  },
  leftItem: {flex: 1},
  rightItem: {flex: 1},
  headerItem: {
    flex: 1,
    color: 'black',
    fontSize: 24,
    fontWeight: '600',
  },
});
