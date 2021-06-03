import React from 'react';
import {SafeAreaView, StatusBar} from 'react-native';

import Push from './src/push';

const App = () => {
  return (
    <>
      <StatusBar barStyle="dark-content" />
      <SafeAreaView>
        <Push />
      </SafeAreaView>
    </>
  );
};

export default App;
