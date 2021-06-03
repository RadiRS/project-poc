import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
  holder: {
    alignItems: 'center',
    justifyContent: 'center',
    position: 'absolute',
    width: 300,
    height: 40,
    backgroundColor: 'white',
    zIndex: 2,
    shadowColor: '#000',
    shadowOffset: {width: 2, height: 0},
    shadowOpacity: 1,
    shadowRadius: 15,
    elevation: 7,
  },
  picker: {
    position: 'absolute',
    top: 0,
    left: 0,
    height: 50,
    width: 300,
    color: '#000000',
  },
  container10Top: {
    flexDirection: 'row',
    backgroundColor: '#2196F3',
    marginTop: 10,
  },

  containerShowResultMsg: {
    flexDirection: 'row',
    marginTop: 10,
  },

  containerSeamless: {
    flexDirection: 'row',
    backgroundColor: '#2196F3',
  },

  containerTopicInput: {
    flexDirection: 'row',
    backgroundColor: '#2196F3',
    marginTop: 10,
    flex: 1,
  },
  inputTopic: {
    textAlign: 'center',
    padding: 15,
    color: 'white',
    width: 360,
    backgroundColor: '#2196F3',
  },

  buttonLeft: {
    marginBottom: 2,
    width: 200,
    height: 40,
    alignItems: 'center',
    backgroundColor: '#2196F3',
  },
  buttonRight: {
    flexWrap: 'nowrap',
    height: 40,
    alignItems: 'flex-start',
    backgroundColor: '#2196F3',
  },

  buttonText: {
    textAlign: 'center',
    padding: 15,
    color: 'white',
    width: 200,
    alignItems: 'center',
    textTransform: 'none',
  },
  imageView: {
    flex: 1,
    backgroundColor: '#fff',
    flexDirection: 'column',
  },
  image: {
    justifyContent: 'flex-start',
    width: 400,
    height: 80,
  },
  paddingX: {
    paddingTop: 75,
  },
});
