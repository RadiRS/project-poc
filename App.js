import React, {useEffect} from 'react';
import ReactNativeBiometrics from 'react-native-biometrics';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
  TouchableOpacity,
  NativeModules,
  DeviceEventEmitter,
} from 'react-native';

import {Header, Colors} from 'react-native/Libraries/NewAppScreen';

const App = () => {
  useEffect(() => {
    DeviceEventEmitter.addListener('FINGERPRINT_SCANNER', msg => {
      console.warn('App -> msg', msg);
    });

    scanFingerprint();
  });

  const handlePressBiometric = async () => {
    try {
      // Check sensor is available or not
      const {
        available,
        biometryType,
      } = await ReactNativeBiometrics.isSensorAvailable();

      if (available) {
        if (biometryType === ReactNativeBiometrics.TouchID) {
          createSignature();
        } else if (biometryType === ReactNativeBiometrics.FaceID) {
          console.warn('FaceID is supported');
        } else if (biometryType === ReactNativeBiometrics.Biometrics) {
          createSignature();
        }
      } else {
        console.log('Biometrics not supported');
      }
    } catch (error) {
      console.log('handlePressBiometric -> error', error);
    }
  };

  const createSignature = async () => {
    try {
      const epochTimeSeconds = Math.round(
        new Date().getTime() / 1000,
      ).toString();
      const payload = epochTimeSeconds + 'some message';

      const {signature, success} = await ReactNativeBiometrics.createSignature({
        promptMessage: 'Sign in',
        cancelButtonText: 'Batal',
        payload,
      });

      if (success) {
        console.log('createSignature -> signature', signature, payload);
        // verifySignatureWithServer(signature, payload);
      }
    } catch (error) {
      console.log('createSignature -> error', error);
    }
  };

  const createKey = async () => {
    try {
      const {publicKey} = await ReactNativeBiometrics.createKeys({
        test: 'asdf',
      });

      console.log('createKey -> publicKey', publicKey);
      return publicKey;
      // sendPublicKeyToServer(publicKey);
    } catch (error) {
      console.log('createKey -> error', error);
    }
  };

  const scanFingerprint = async () => {
    try {
      const res = await NativeModules.ReactNativeFingerprintScanner.authenticate();
      console.warn('scanFingerprint -> res', res);
    } catch (error) {
      console.warn('scanFingerprint -> error', error);
    }
  };

  return (
    <>
      <StatusBar barStyle="dark-content" />
      <SafeAreaView>
        <ScrollView
          contentInsetAdjustmentBehavior="automatic"
          style={styles.scrollView}>
          <Header />
          {global.HermesInternal == null ? null : (
            <View style={styles.engine}>
              <Text style={styles.footer}>Engine: Hermes</Text>
            </View>
          )}
          <View style={styles.body}>
            <View style={styles.sectionContainer}>
              <TouchableOpacity onPress={handlePressBiometric}>
                <Text style={styles.sectionTitle}>Test Biometric</Text>
              </TouchableOpacity>
              <Text style={styles.sectionDescription}>
                Testing biometric with fingerprint or touch id
              </Text>
            </View>
          </View>
        </ScrollView>
      </SafeAreaView>
    </>
  );
};

const styles = StyleSheet.create({
  scrollView: {
    backgroundColor: Colors.lighter,
  },
  engine: {
    position: 'absolute',
    right: 0,
  },
  body: {
    backgroundColor: Colors.white,
  },
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
    color: Colors.black,
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
    color: Colors.dark,
  },
  highlight: {
    fontWeight: '700',
  },
  footer: {
    color: Colors.dark,
    fontSize: 12,
    fontWeight: '600',
    padding: 4,
    paddingRight: 12,
    textAlign: 'right',
  },
});

export default App;
