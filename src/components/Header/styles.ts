import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  headerContainer: {
    display: 'flex',
    flexDirection: 'row',
    // textAlign: 'center',
    // alignItems: 'center',
    alignContent: 'space-between',
    padding: 4,
    backgroundColor: 'orange',
  },
  leftItem: {flex: 1},
  rightItem: {flex: 1, alignItems: 'flex-end'},
  headerItem: {
    flex: 1,
    alignItems: 'center',
    color: 'black',
    fontSize: 24,
    fontWeight: '600',
  },
});
