import { StyleSheet, Dimensions } from 'react-native';

const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: Dimensions.get('window').height,
  },

  video: {
    position: 'absolute',
    top: 0,
    left: 0,
    bottom: 0,
    right: 0,
  },

  uiContainer: {
    height: '100%',
    justifyContent: 'flex-end',
  },

  bottomContainer: {
    padding: 10
  },

  handle: {
    color: '#fff',
    fontSize: 16,
    fontWeight: '700',
    marginBottom: 10
  },

  description: {
    color: '#fff',
    fontSize: 16,
    fontWeight: '300',
    marginBottom: 10
  },

  songRow: {
    flexDirection: 'row',
    alignItems: 'center'
  },

  songName: {
    color: '#fff',
    fontSize: 16,
    marginLeft: 5
  },

  // RIGHT CONTAINER
  rightContainer: {
    alignSelf: 'flex-end',
    height: 300,
    justifyContent: 'space-between',
    marginRight: 5
  },

  profilePicture: {
    width: 50,
    height: 50,
    borderRadius: 25,
    borderWidth: 2,
    borderColor: '#fff',
    marginBottom: 30
  },

  iconContainer: {
    alignItems: 'center'
  },

  statsLabel: {
    color: '#fff',
    fontSize: 16,
    fontWeight: '600',
    marginTop: 5
  }

});

export default styles;