// @generated by expo-yarn-workspaces

import 'expo/build/Expo.fx';
import { activateKeepAwake } from 'expo-keep-awake'; // eslint-disable-line
import registerRootComponent from 'expo/build/launch/registerRootComponent';

import App from './App';

if (__DEV__) { // eslint-disable-line
  activateKeepAwake();
}

registerRootComponent(App);
