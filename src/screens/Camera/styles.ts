import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    backgroundColor: 'black',
  },

  preview: {
    flex: 1,
    justifyContent: 'flex-end',
    alignItems: 'center',
  },

  buttonRecord: {
    alignSelf: 'center',
    marginVertical: 10,
    height: 50,
    width: 50,
    backgroundColor: 'red',
    borderRadius: 25,
  },

  buttonStop: {
    alignSelf: 'center',
    marginVertical: 10,
    height: 35,
    width: 35,
    backgroundColor: 'red',
    borderRadius: 3,
  }
});

export default styles;