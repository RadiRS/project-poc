import React, {Fragment} from 'react';
import {SafeAreaView, StatusBar} from 'react-native';

import BiometricsScreen from './screens/biometrics-screen';

const App = () => {
  return (
    <Fragment>
      <StatusBar barStyle="dark-content" />
      <SafeAreaView style={{flex: 1}}>
        <BiometricsScreen />
      </SafeAreaView>
    </Fragment>
  );
};

export default App;
